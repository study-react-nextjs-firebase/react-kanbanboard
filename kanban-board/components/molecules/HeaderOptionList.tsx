import Image from "next/image";
import styles from "./Molecules.module.css";
import HeaderProfile from "../atoms/HeaderProfile";

const HeaderOptionList = () => {
    return (
        <div className={styles.HeaderOptionList}>
            <HeaderProfile />
            <div className={styles.DisplayCulumn}>
                <div className={styles.MyTask}>
                    マイタスク
                </div>
                <div className={styles.HeaderOption}>
                    <ul>
                        <li>リスト</li>
                        <li>ボード</li>
                        <li>カレンダー</li>
                        <li>ファイル</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderOptionList;