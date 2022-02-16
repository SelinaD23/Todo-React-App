import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends React.Component {
    // Adding States
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development enviornment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    }

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: !todo.completed,
                }
              }
              return todo
            }),
        }))
    };

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
    };
    
    render() {
        return (
            // Calls the header
            <div>
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange} 
                    deleteTodoProps={this.delTodo} 
                />
            </div>

            // Sends the to do list to TodosList.js
            // <div>
            //     <h1>Todo List</h1>
            //     <TodosList todos={this.state.todos} />
            // </div>
            
            // Prints as a bullet list
            // <ul>
            //     {this.state.todos.map(todo => (
            //         <li>{todo.title}</li>
            //     ))}
            // </ul>

            // Basic printing output
            // <div>
            //     <h1>Hello from Create React App</h1>
            //     <p>I am in a React Component</p>
            // </div>
        )
    }
}

export default TodoContainer