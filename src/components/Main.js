import PropTypes from 'prop-types'
import React from 'react'
import family from '../images/about.jpg'
import pic02 from '../images/pic02.jpg'

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
            <img src={pic02} alt="family photo" />
          </span>
          <p>
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
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
          My wife and I have been married for 5+ years now and we have a wonderfully adventures 1 year old son. They are 
          a huge inspiration to me and their constant encouragement has helped me to get to where I am today. 
          <br/>
          <br/> 
          I was born and raised in the great PNW and I can't imagine life anywhere else. Skiing, Hiking, Camping, Swimming, 
          living here allows me to do it all! I was also raised in a programmer household with both my parents having careers
           in the field. This page is the unavoidable outcome of being raised by them and in one of the great developer meccas 
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

          <form id="contact-form" action="https://formspree.io/f/xwkwabjl" method="POST">

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

              <li>
                <input type="reset" value="Reset" />
              </li>
              
            </ul>
          </form>

          <ul className="icons">
            <li>
              <a href="https://twitter.com/k_richey" className="icon fa-twitter">
                <span className="label">Twitter</span>
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
              <a href="https://github.com/krichey15" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kyle-richey/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
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
