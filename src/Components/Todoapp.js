import React, { Component } from "react";
import "./Todoapp.css";
export default class Todoapp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    //console.log(this.state.input)
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input], //spread operator (create copy of orginal array and push that copy into next session)
      input: "",
    });
  };

  deleteItem = (key) => {
    const allItems = this.state.items;
    allItems.splice(key, 1); //'splice' function is used to delete items in javascript. we use 'key' to select the item which is to be removed. 1 is used to select on;'1' is used to delete the current item only.
    this.setState({
      items: allItems,
    });
  };

  render() {
    const { input, items } = this.state; //destructuring

    //console.log(items);

    return (
      <div className="Main">
        <form className="Input-section" onSubmit={this.storeItems}>
          <h1>Todoapp</h1>

          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items..."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fa-solid fa-trash-can"
                onClick={() => this.deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
