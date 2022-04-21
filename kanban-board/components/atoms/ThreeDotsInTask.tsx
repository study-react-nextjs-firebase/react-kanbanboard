import styles from "./Atom.module.css";
import Image from "next/image";

const ThreeDotsInTask = () => {
    return (
        <div className={styles.TnreeDotsInTask}>
            <Image src="/dots.svg" alt="" width={16} height={16}/>
        </div>
    );
}

export default ThreeDotsInTask;