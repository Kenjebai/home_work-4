// import React from "react";

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>Список дел</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">
//             Введите данные
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Добавить {this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.text.length === 0) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default TodoApp

import React from "react";
import { useState } from "react";

export default function App(){
  const [age, setAge] = useState(1);

  function increment(){
    setAge(a => a + 1)
  }

  return(
    <div>
      {/* <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment()
        increment()
      }}>+2</button> */}
    </div>
  )
}

