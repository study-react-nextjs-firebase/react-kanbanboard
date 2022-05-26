import { useState } from "react";
import styles from "./task.module.css"

const TaskCardTitle : React.FC = () => {
    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState("Today");

    const handleClick = () => {
        setIsClick(true);
    }
    const handleChange = (e: Event) => {
        if(e.target.value !== null){
            setInputCardTitle(e.target.value)
        }else{
            throw 'Input target is null.';
        }
    }
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setIsClick(false);
    }
    const handleBlur = () => {
        setIsClick(false);
    }

    return (
        <div onClick={handleClick} className={styles.TaskCardTitleInputArea}>
            {isClick ? (<form onSubmit={handleSubmit}><input autoFocus className={styles.TaskCardTitleInput} type="text" onChange={handleChange} onBlur={handleBlur} value={inputCardTitle} maxLength="10"/></form>) : <h3>{inputCardTitle}</h3> }
        </div>
    );
}

export default TaskCardTitle;