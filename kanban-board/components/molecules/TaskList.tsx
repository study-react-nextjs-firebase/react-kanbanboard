import TaskTitle from "../atoms/TaskTitle";
import TaskMemo from "../atoms/TaskMemo";
import AddTaskButton from "../atoms/AddTaskButton";
import PlusButtonInTask from "../atoms/PlusButtonInTask";
import ThreeDotsInTask from "../atoms/ThreeDotsInTask";
import styles from "./Molecules.module.css"

const TaskList = (props) => {
    return (
    <div className={styles.SingleTaskList}>
        <div className={styles.TaskListHead}>
            <TaskTitle title={props.title}/>
            <PlusButtonInTask />
            <ThreeDotsInTask />
        </div>
        <AddTaskButton/>
    </div>
    );
}

export default TaskList;