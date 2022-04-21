import Image from "next/image";
import styles from "./Atom.module.css";
import TaskMemo from "./TaskMemo";

const AddTaskButton = () => {
    const onClickAddTaskButton = () => {
        return (alert("onClick"))
    };


    return (
        <button className={styles.AddTaskButton} onClick={onClickAddTaskButton}>
            <Image src="/plus.svg" alt="" width={18} height={18}/>
            <p>タスクを追加</p>
        </button>
    );
}

export default AddTaskButton;