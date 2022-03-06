// const initialTodosList = [
//   {
//     id: 1,
//     title: 'Book the ticket for today evening',
//   },
//   {
//     id: 2,
//     title: 'Rent the movie for tomorrow movie night',
//   },
//   {
//     id: 3,
//     title: 'Confirm the slot for the yoga session tomorrow morning',
//   },
//   {
//     id: 4,
//     title: 'Drop the parcel at Bloomingdale',
//   },
//   {
//     id: 5,
//     title: 'Order fruits on Big Basket',
//   },
//   {
//     id: 6,
//     title: 'Fix the production issue',
//   },
//   {
//     id: 7,
//     title: 'Confirm my slot for Saturday Night',
//   },
//   {
//     id: 8,
//     title: 'Get essentials for Sunday car wash',
//   },
// ]

// // Write your code here
import {Component} from 'react'

class SimpleTodos extends Component {
  render() {
    return (
      <form onSubmit={this.onSubmitButton}>
        <h1>Username</h1>
        <input type="text" />
        <h1>Password</h1>
        <input type="password" />
        <h1>Date</h1>
        <input type="date" />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    )
  }
}

export default SimpleTodos
