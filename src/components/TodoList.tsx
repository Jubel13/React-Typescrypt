import classes from "./TodoList.module.css";


const TodoList: React.FC<{ text: string; onRemove: () => void }> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemove}>
            {props.text}
        </li>
    );
};

export default TodoList;
