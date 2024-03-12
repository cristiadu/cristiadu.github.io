import React from 'react';

const Contact = () => {
    return (
        <article name="contact" id="contact" className="aboutMe">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3 content-aboutMe">
                        <img className="img-thumbnail profileImg-max-width" src="images/profile-pic.jpg" alt="My Photo" />
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-6 content-aboutMe">
                        <h3>About Me</h3>
                        <p className="justifyParagraph">
                            I am a Senior Software Developer at Giftbit, a company that offers innovative solutions for digital gift cards and rewards.
                            With over 10 years of experience in software development, I have a strong foundation in full-stack web development, quality assurance, and software architecture.
                            At Giftbit, I provide software development expertise and architectural leadership for their new solutions and existing products.
                            I enjoy working with challenges using technology, particularly through lines of code and logical reasoning. I am always open to learning new technologies and embracing new challenges.
                            Some of the main technologies I have used in my career include Spring Boot, Java, Kubernetes, ReactJS, GoLang, and Kotlin.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 pull-right content-aboutMe">
                        <h3>Contact Information</h3>
                        <div className="col-xs-12 col-md-12">

                            <address>
                                <strong>Cristiano de Oliveira Faustino</strong><br />
                                <a href="mailto:cristiadu@gmail.com">cristiadu@gmail.com</a><br />
                                Phone: +1 (250) 516-6800
                            </address>
                        </div>
                        <div className="col-xs-12 col-md-12">
                            <a href="https://www.facebook.com/cristiano.faustino" target="_blank"><img className="img-icon-contacts"
                                src="images/icons/facebook-icon.png" alt="Facebook" /></a>
                            <a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank"><img className="img-icon-contacts"
                                src="images/icons/linkedin-icon.png" alt="LinkedIn" /></a>
                            <a href="https://github.com/cristiadu" target="_blank"><img className="img-icon-contacts"
                                src="images/icons/github-icon.png" alt="Github" /></a>
                            <a href="http://www.last.fm/user/cristiadu" target="_blank"><img className="img-icon-contacts"
                                src="images/icons/lastfm-icon.png" alt="LastFM" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Contact;
