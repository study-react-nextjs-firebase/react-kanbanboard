import HeaderOptionList from "../molecules/HeaderOptionList";
import TaskList from "../molecules/TaskList";

import styles from "./Templete.module.css";


const Templete = () => {
    return (
        <>
        <div className={styles.Header}>
            <HeaderOptionList/>
        </div>

        <div className={styles.Main}>
            <TaskList title = "Recently assigned"/>
            <TaskList title = "Do today"/>
            <TaskList title = "Do next week"/>
            <TaskList title = "Do later"/>
        </div>
        </>
    );
}

export default Templete;