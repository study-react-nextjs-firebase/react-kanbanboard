import Image from "next/image";
import styled from 'styled-components';
import plusImage from "/plus.svg";

function AddTaskButton() {
    const AddTask = styled.div`
    display: flex;            /* Flexboxを指定 */
    justify-content: center;  /* 水平方向の中央寄せ */
    align-items: center;      /* 垂直方向の中央寄せ */
    height: 36px;
    width: 170px;
    background-color: #F6F4F4;
    margin 10px 20px;
    `;
    const InternalComments = styled.p`
    margin-left: 7px;
    font-size: 14px;
    color: #6D6E6F;
    `;
    const AddButton = styled.button`

    // background-color: #F6F4F4;
    // border: none;
    cursor: pointer;
    padding: 0;

    display: flex;
    justify-content: center;  /* 水平方向の中央寄せ */
    align-items: center;      /* 垂直方向の中央寄せ */
    height: 36px;
    width: 170px;
    `;
    return (
        <AddTask>
            <AddButton>
                <Image src={plusImage} alt="" width={16} height={16} />
                <InternalComments>タスクを追加</InternalComments>
            </AddButton>
        </AddTask>
    );
}

export default AddTaskButton;

