import Image from "next/image";
import styles from "./Atom.module.css"

const HeaderProfile = () => {
    return (
        <div className={styles.HeaderProfileDiv}>
            <Image className={styles.HeaderProfileImg} src={"/profile.png"} alt="" width={36} height={36}/>
        </div>
    );
}

export default HeaderProfile;