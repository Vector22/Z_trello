import React, { Component } from "react";

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li className='checklist__task'
        key={task.name}>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#ancre' className='checklist__task--remove' />
      </li>
    ));
    return (
      <div className='checklist' id='ancre'>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default CheckList;
