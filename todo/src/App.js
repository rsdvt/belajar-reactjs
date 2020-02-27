import React, { Component } from 'react';
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
      <div>
        <h3>Aplikasi Aktivitas Harian</h3>
        <form ref="formulir">
          <input type="text" ref="jam" placeholder="Jam Aktivitas" />
          <input type="text" ref="aktivitas" placeholder="Jenis Aktivitas" />
          <button onClick={this.addTodo}>Simpan</button>
        </form>
        <hr />
        <div>
          <ul>
            {
              this.state.todos.map((data, i) =>
                <li key={i}>
                  <div>
                    <button onClick={() => this.removeTodo(i)}>Hapus</button>
                    {data.jam} : {data.aktivitas}
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}
