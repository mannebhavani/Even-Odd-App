// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOdd extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state is: ${prevState.count}`)
      return {count: prevState.count + Math.ceil(Math.random() * 100)}
    })
  }

  renderText = () => {
    const {count} = this.state

    if (count % 2 === 0) {
      return <p className="change-text-para">Count is Even</p>
    }
    return <p className="change-text-para">Count is Odd</p>
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          Count <span>{count}</span>
        </h1>

        {this.renderText()}
        <button className="btn-style" onClick={this.onIncrement} type="button">
          Increment
        </button>
        <p className="descrip">Increase by Random number between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOdd
