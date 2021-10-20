import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todo: string) => {
        const newTodo = new Todo(todo);

        setTodos((prevList) => {
            return prevList.concat(newTodo);
        });
    };

    const removeHandler = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemove={removeHandler} />
        </div>
    );
}

export default App;
