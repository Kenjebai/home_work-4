import React from "react";
// import { useState } from "react";

// function createInitialTodos(){
//     const initialTodos = []
//     for(let i = 0; i < 50; i++){
//         initialTodos.push({
//             id: i,
//             text: "Item " + (i + 1),
//         });
//     }
//     return initialTodos;
// }

// export default function TodoList(){
//     const [todos, setTodos] = useState(createInitialTodos);
//     const [text, setText] = useState("");

//     return (
//         <div>
//             <input value={text} onChange={(e) => setText(e.target.value)}/>
//             <button onClick={() => {
//                 setText("");
//                 setTodos([{
//                     id: todos.length,
//                     text: text,
//                 }, ...todos]);
//             }}>Add</button>
//             <ul>
//               {todos.map(item => {
//                 <li key={item.id}>{item.text}</li>
//               })}
//             </ul>
//         </div>
//     );
// }

export default function TodoList(){
  return(
    <div>
    </div>
  )
}