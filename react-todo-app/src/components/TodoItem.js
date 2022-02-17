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
    handleEditing = () => {
        this.setState({
          editing: true,
        })
    }

    state = {
        editing: false,
    }

    render() {
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return <li className="flex font-bold">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input 
            type = "checkbox"
            checked = {this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
            <button className="" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                Delete
            </button>
            {this.props.todo.title}
        </div>
        <input type="text" style={editMode} className="flex font-bold" />
        </li>
    }
}

export default TodoItem