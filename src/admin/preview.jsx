import { createRoot } from 'react-dom/client'
import PortfolioApp from '@/PortfolioApp'
import { PreviewDataContext } from '@/admin/PreviewDataContext'
import projects from '@content/projects.json'
import skills from '@content/skills.json'
import education from '@content/education.json'

// Content as committed. The file being edited is overlaid on top of this.
const savedData = {
  'json/projects.json': projects,
  'json/skills.json': skills,
  'json/education.json': education
}

// Sveltia requires a class adapter; the portfolio uses its own React root for hooks.
// `name` is the CMS file name, which matches both the root list field and the JSON file.
const createPortfolioPreview = (name) => window.createClass({
  componentDidMount() {
    const previewDocument = this.props.document
    const base = previewDocument.createElement('base')
    base.href = `${window.location.origin}/`
    previewDocument.head.prepend(base)
    this.base = base
    this.root = createRoot(this.container)
    this.updatePreview()
  },

  componentDidUpdate() {
    this.updatePreview()
  },

  componentWillUnmount() {
    this.root.unmount()
    this.base.remove()
  },

  updatePreview() {
    // Entries in a file collection have no slug; the draft lives under the field name.
    const draft = this.props.entry.getIn(['data', name])?.toJS() ?? []
    const previewData = { ...savedData, [`json/${name}.json`]: draft }

    this.root.render(
      <PreviewDataContext value={previewData}>
        <PortfolioApp />
      </PreviewDataContext>
    )
  },

  render() {
    return window.h('div', { ref: (element) => { this.container = element } })
  }
})

window.CMS.registerPreviewStyle('/css/stylesheet.css')
for (const name of ['projects', 'skills', 'education']) {
  window.CMS.registerPreviewTemplate(name, createPortfolioPreview(name))
}
