import React, { Component } from 'react';
import Header from './Header';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [] }
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({ jam, aktivitas });
    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  removeTodo = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="body">
        <Header />
        <form className="form-inline" ref="formulir">
          <input className="form form-control" type="text" ref="jam" placeholder="Jam Aktivitas" />
          <input className="form form-control" type="text" ref="aktivitas" placeholder="Jenis Aktivitas" />
          <button className="btn btn-info" onClick={this.addTodo}>Simpan</button>
        </form>
        <hr />
        <div>
          <ul>
            <CSSTransitionGroup
              transitionName="animasi"
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={500}
            >
              {
                this.state.todos.map((data, i) =>
                  <li className="hide" key={i}>
                    <div>
                      <button className="btn btn-outline-danger mr-1" onClick={() => this.removeTodo(i)}>Hapus</button>
                      {data.jam} : {data.aktivitas}
                    </div>
                  </li>
                )
              }
            </CSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}
