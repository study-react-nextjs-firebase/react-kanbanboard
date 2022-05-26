import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import styles from './task.module.css';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

const TaskCards: React.FC = () => {
  const initId = uuid();
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: initId,
      droppableId: `item-${initId}`,
    },
  ]);
  const handleDragEnd = (result: Event) => {
    const remove = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination.index, 0, remove[0]);
    setTaskCardsList(taskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className={styles.TaskCardsArea}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => {
              return (
                <TaskCard
                  key={taskCard.id}
                  index={index}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                  taskCard={taskCard}
                />
              );
            })}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default TaskCards;
