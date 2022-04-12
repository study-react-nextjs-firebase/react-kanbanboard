import styled from "styled-components";
import AddTaskButton from "../atoms/AddTaskButton";
import TaskTopic from "../molecules/TaskTopic";


function TaskList(props) {

    const ListZone = styled.div`
    padding 10px 10px;
    height: 800px;
    width: 200px;
    background-color: ##F9F8F8;
    display: flex;
    align-items: center;      /* 垂直方向の中央寄せ */
    flex-flow: column;
    margin 10px;
    `;

    const TaskZone = styled.div`
    height: 560px;
    width: 200px;
    background-color: #F6F4F4;
    border-radius: 0.5em;
    
    
    `;
    return (
        <ListZone>
            <TaskTopic topic={props.topic}/>
            <TaskZone>
                <AddTaskButton />
            </TaskZone>
        </ListZone>
    );
}

export default TaskList;