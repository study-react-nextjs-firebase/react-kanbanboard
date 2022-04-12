import styled from "styled-components";
import TaskList from "../organisms/TaskList";

function layout() {

    const MainList = styled.div`
    display: flex;
    `;

    return (
        <MainList>
            <TaskList topic = "Recently assigned"/>
            <TaskList topic = "Do today"/>
            <TaskList topic = "Do next week"/>
            <TaskList topic = "Do later"/>
        </MainList>
    );
}

export default layout;