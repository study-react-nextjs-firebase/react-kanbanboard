import { useState } from 'react';
import TaskCardTitle from './TaskCardTitle';
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import TaskAddInput from './input/TaskAddInput';
import Tasks from './Tasks';
import styles from './task.module.css';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard: React.FC = ({
  index,
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className={styles.TaskCard}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className={styles.TaskCardTitleAndTaskCardDeleteButtonArea}
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
