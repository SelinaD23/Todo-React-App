import React from "react"



// Function does not require a render() function
// Function Component
// function TodoItem(props) {
//     return <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing}>
//             <input 
//             type = "checkbox"
//             checked = {props.todo.completed}
//             onChange={() => props.handleChangeProps(props.todo.id)} />
//             <button class="" onClick={() => props.deleteTodoProps(props.todo.id)}>
//                 Delete
//             </button>
//             {props.todo.title}
//         </div>
//     </li>
// }

// Class Component
class TodoItem extends React.Component {
    render() {
        return <li>
        <div onDoubleClick={this.handleEditing}>
            <input 
            type = "checkbox"
            checked = {this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
            <button class="" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                Delete
            </button>
            {this.props.todo.title}
        </div>
        </li>
    }
}

export default TodoItem