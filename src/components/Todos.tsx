import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
    props
) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoList
                    key={item.id}
                    text={item.text}
                    onRemove={props.onRemove.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
