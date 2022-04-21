import { useState } from "react";
import styles from "./Atom.module.css";

const TaskTitle = (props) => {
    const [text, setText] = useState(props.title);
    return (
        <input className={styles.TaskTitle} onChange={(event) => setText(event.target.value)} type="text" value={text} placeholder="セクションを追加" />
    );
}

export default TaskTitle;