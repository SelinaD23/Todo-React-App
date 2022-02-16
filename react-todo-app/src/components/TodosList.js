import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    // Uses TodoItem
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
                    

                    // // Uses the id number as a key prop
                    // <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        )
        
    }
}

export default TodosList