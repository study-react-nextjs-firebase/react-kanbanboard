import styles from './task.module.css';
import Image from 'next/image';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ index, task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className={styles.TaskBox}
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className={styles.TaskText}>{task.text}</p>
          <button
            className={styles.TaskTrashButton}
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            <Image
              className={styles.TaskTrashBoxImage}
              src={'/trashBox.png'}
              alt=""
              width={'18px'}
              height={'18px'}
            ></Image>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
