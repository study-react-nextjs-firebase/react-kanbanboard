import styles from "./Atom.module.css";
import Image from "next/image";

const PlusButtonInTask = () => {
    return (
        <div className={styles.PlusButtonInTask}>
            <Image src="/plus.svg" alt="" width={16} height={16}/>
        </div>
    );
}

export default PlusButtonInTask;