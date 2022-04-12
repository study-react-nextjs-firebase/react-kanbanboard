import styled from "styled-components";
import plusImage from "../../public/plus.svg";
import dotsImage from "../../public/dots.svg";
import Image from "next/image";
import styles from "./TaskTopic.module.css"


function TaskTopic(props) {
    const Outer = styled.div`
    display: flex;
    height: 36px;
    width: 180px;
    justify-content: center;
    align-items: center;
    margin 10px 50px;
    `;
    const InnerText = styled.p`
    margin-right:auto;
    
    `;
    return (
        <Outer>
            <InnerText>{props.topic}</InnerText>
            <Image className={styles.OptionImage} src={plusImage} alt="" width={16} height={16} />
            <Image className={styles.OptionImage} src={dotsImage} alt="" width={16} height={16} />
        </Outer>
    );
}


TaskTopic.defaultProps = { topic: "無題のチェックリスト" };

export default TaskTopic;