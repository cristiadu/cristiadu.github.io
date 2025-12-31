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
            Brazilian Software Engineer Leads Platform Rebuild at Giftbit
          </h2>
          <p className="lead-byline">
            He loves to tackle challenges and learning new technologies
          </p>
          
          <div className="lead-content">
            <img 
              src="images/profile-pic.png" 
              alt="Cristiano Faustino" 
              className="lead-photo" 
            />
            <div className="lead-text">
              <p>
                Cristiano Faustino is a Senior Software Developer at Giftbit in Victoria, BC, 
                with over 15 years in software development. He&apos;s at his best when there&apos;s a good 
                problem to solve—thriving on challenges and genuinely enjoying picking up new technologies 
                along the way.
              </p>
              <p>
                At Giftbit, he&apos;s currently leading the architecture and development of their V2 
                platform—a full rebuild from the ground up. That means shaping the technical direction, 
                building APIs in GoLang, defining infrastructure as code, and contributing to the NextJS 
                frontend. It&apos;s the kind of project where every decision matters.
              </p>
              <p>
                Over the years, he&apos;s worked with Go, Java, TypeScript, ReactJS, Kubernetes, Terraform, 
                and plenty more—though the specific stack matters less to him than the puzzle itself. 
                New languages, new frameworks—that&apos;s the fun part.
              </p>
            </div>
          </div>
        </div>
        
        <aside className="lead-sidebar">
          <Experience />
          <EducationList />
        </aside>
      </article>

      <ContactBar />
    </>
  )
}

export default Contact
