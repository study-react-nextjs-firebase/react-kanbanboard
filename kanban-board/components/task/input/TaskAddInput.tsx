import styles from '../task.module.css';
import { v4 as uuid } from 'uuid';

const TaskAddInput: React.FC = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e: Event) => {
    const taskId = uuid();
    e.preventDefault();
    // カードを追加する
    if (inputText === '') {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText('');
  };

  const handleChange = (e: Event) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.TaskAddInput}
          type="text"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
