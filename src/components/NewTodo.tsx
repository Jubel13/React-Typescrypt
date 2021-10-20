import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const todoInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todoCtx.addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
