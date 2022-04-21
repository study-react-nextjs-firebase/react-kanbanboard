import styles from "./Atom.module.css";
import Image from "next/image";

const TaskMemo = (props) => {
    const {content, deadline} = props;
    return (
        <div className={styles.TaskMemo}>
            <div className={styles.Content}>
            <Image src={"/check.svg"} alt="" width={16} height={16}/>
            <p className={styles.MemoContent}>{content}</p>
            </div>
        </div>
    );
}

const today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var week = today.getDay();
var day = today.getDate();
var yobi= new Array("日","月","火","水","木","金","土");

TaskMemo.defaultProps = {
    content: 'タスク名を入力',
    deadline: `${year}年${month}月${day}日 ${yobi[week]}曜"`,
};


export default TaskMemo;