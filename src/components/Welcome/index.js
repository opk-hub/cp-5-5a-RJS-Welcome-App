// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {textContent: 'Subscribe'}

  subscribe = () => {
    const {textContent} = this.state
    if (textContent === 'Subscribe') {
      this.setState(() => ({textContent: 'Subscribed'}))
    } else {
      this.setState(() => ({textContent: 'Subscribe'}))
    }
  }

  render() {
    const {textContent} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="des">Thank you!Happy Learning</p>
        <button type="button" className="button" onClick={this.subscribe}>
          {textContent}
        </button>
      </div>
    )
  }
}
export default Welcome
