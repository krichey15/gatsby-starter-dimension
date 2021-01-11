import PropTypes from 'prop-types'
import React from 'react'
import grad from '../images/code-grad.png'
import family from '../images/courtney.jpg'
import screenshot from '../images/website.png'
import simply from '../images/simply-seattle.png'
import storyville from '../images/storyville.jpg'

class Main extends React.Component {


  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={grad} alt="code-fellows-graduation" />
          </span>
          <p>
            Hello and Welcome!
            <br/>
            I am a Full-Stack JavaScript developer with experience in many languages, libraries and coding practices. The list below is just a small sample.
          </p>
          <h4>NodeJS | React | SQL | Mongodb | Express | Agile </h4>
          <p>
            Please have a look around my page, if you like what you see head over to the "Contact" page and send me a message. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>

          <h3 className="projects">Personal Portfolio</h3>
          <span className="image main">
            <img src={screenshot} alt="portfolio-screenshot" />
          </span>
          <h5>
            React | SCSS | AWS | HTML
          </h5>
          <p>
            This is my personal portfolio website. It is designed with the user in mind. From the aesthetic to the navigation, this site was a fun build. It was built using mainly REACT and SCSS and was deployed using AWS.
          </p>
          <hr/>

          <h3 className="projects">
            <a href="https://www.simplyseattle.com/" target="_blank"  rel="noreferrer" className="hide-link">
              Simply Seattle
            </a>
          </h3>
          <span className="image main">
            <img src={simply} alt="simplyseattle-screenshot" />
          </span>
          <h5>
            JavaScript | CSS | Shopify
          </h5>
          <p>
            On this project I worked with Simply Seattle to create a responsive addition to the footer of the website. It is visibile across all pages and includes the 12 links as shown in the photo. I also cleaned up and debugged a portion of the code base. This project was mainly done in Shopify using CSS and JavaScript. 
          </p>
          <hr/>
          
          <h3 className="projects">
            <a href="https://storyville.com/" target="_blank" rel="noreferrer" className="hide-link">
              Storyville Coffee Company
            </a>
          </h3>
          <span className="image main">
            <img src={storyville} alt="storyville-screenshot" />
          </span>
          <h5>
            React | Node | Express | MongoDB | SCSS
          </h5>
          <p>
            This was a full-stack project in which I worked with Storyville to build a website for training staff. It included a full front-end design, as well as a database that Storyville could use to keep track of staff progress as training courses were completed.
          </p>


          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img className="family-photo" src={family} alt="wife-and-i" />
          </span>
          <p>
          Hi There! I see you have made your way over to my "About" section, thank you so much for taking the time 
          to explore my page.
          <br/>
          <br/>
          In case you missed it, my name is Kyle Richey. I am a husband, father, and a lover of all things programming. 
          My wife and I have been married for 5+ years now and we have a wonderfully adventurous 1 year old son. They are 
          a huge inspiration to me and their constant encouragement has helped me to get to where I am today. 
          <br/>
          <br/> 
          I was born and raised in the great PNW and I can't imagine life anywhere else. Skiing, hiking, camping, swimming -  
          living here allows me to do it all! I was also raised in a programmer household, with both my parents having careers
           in the field. This career is the unavoidable outcome of being raised by them and in one of the great developer meccas 
           of the US. 
          <br/>
          <br/>
          If you are looking for projects I have done, hop on over to the "Work" page.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <h4>Shoot me a message here.</h4>

          {/* <form id="contact-form" target="" action="mailto:kyle@kyle-richey.com" method="POST">
            TO DO: Impliment the below form in a secure way, clear form on submit. use action="https://formspree.io/f/xwkwabjl" in <form> attributes
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="_replyto" id="_replyto" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>

            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>              
            </ul>
          </form> */}
          <a href="mailto:kyle@kyle-richey.com">
            <button className="special">Send Message</button>
          </a>

          <br/>
          <br/>
          <h4>I'm pretty social.</h4>

          <ul className="icons">
            <li>
              <a href="https://github.com/krichey15" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/kyle-richey/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/kyle.richey1/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/richeykyle/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/k_richey" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
