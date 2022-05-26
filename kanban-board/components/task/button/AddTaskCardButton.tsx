import { Draggable } from 'react-beautiful-dnd';
import styles from '../task.module.css';
import { v4 as uuid } from 'uuid';

const AddTaskCardButton: React.FC = ({ taskCardsList, setTaskCardsList }) => {
  const addTackCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item-${taskCardId}`,
      },
    ]);
  };
  return (
    <div className={styles.AddTaskCardButtonArea}>
      <button className={styles.AddTaskCardButton} onClick={addTackCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
