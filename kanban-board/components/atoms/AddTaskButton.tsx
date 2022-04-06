import styles from '../../styles/Atom.module.css'
import Image from 'next/image';

const AddTaskButton:React.FunctionComponent=()=> {
    return (
        <>
            <button className={styles.AddTaskButton}>
                タスクを追加
            </button>
        </>
    );
}

export default AddTaskButton;
