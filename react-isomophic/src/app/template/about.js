import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div>
        <h4>About</h4>

        <div className="contact-form">
          <input type="text" name="name" placeholder="Name"/>

          <input type="email" name="email" placeholder="Email"/>

          <textarea name="message" id="" cols="30" rows="10" placeholder>
          </textarea>
        </div>
      </div>
    )
  }
}

export default About
