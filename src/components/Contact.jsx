import React from 'react'
import EducationList from '@/components/EducationList'
import ContactBar from '@/components/ContactBar'
import Experience from '@/components/Experience'

const Contact = () => {
  return (
    <>
      <article className="lead-story" id="about">
        <div className="lead-article">
          <h2 className="lead-headline">
            Senior Software Engineer Leads Platform Rebuild at Giftbit
          </h2>
          <p className="lead-byline">
            Victoria, BC — A passionate developer building scalable, reliable systems
          </p>
          
          <div className="lead-content">
            <img 
              src="images/profile-pic.jpg" 
              alt="Cristiano Faustino" 
              className="lead-photo" 
            />
            <div className="lead-text">
              <p>
                I&apos;m a Senior Software Developer at Giftbit, based in Victoria, British Columbia, 
                Canada. I&apos;m a passionate professional who thrives on tackling challenges through 
                technology, code, and logical reasoning.
              </p>
              <p>
                With over 15 years of experience in full-stack web development, quality assurance, 
                and software architecture, I provide technical and architectural leadership for 
                new and existing products. I enjoy building scalable, reliable systems and 
                continuously learning new technologies.
              </p>
              <p>
                Experienced with Go, Java, TypeScript, ReactJS, Kubernetes, and Terraform, 
                I&apos;m driven by creating innovative solutions that make an impact. At Giftbit, 
                I&apos;m currently contributing to the full rebuild of our V2 platform from the 
                ground up, developing APIs in GoLang and creating our frontend with NextJS.
              </p>
            </div>
          </div>
        </div>
        
        <aside className="lead-sidebar">
          <Experience />

          <div className="sidebar-section">
            <h3 className="sidebar-title">Education</h3>
            <div className="sidebar-content">
              <EducationList />
            </div>
          </div>
        </aside>
      </article>

      <ContactBar />
    </>
  )
}

export default Contact
