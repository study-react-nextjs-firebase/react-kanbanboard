import Task from './Task';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result: Event) => {
    //タスクを並び替える
    const remove = taskList.splice(result.source.index, 1);
    taskList.splice(result.destination.index, 0, remove[0]);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => {
                return (
                  <div key={task.text}>
                    <Task
                      index={index}
                      task={task}
                      taskList={taskList}
                      setTaskList={setTaskList}
                    />
                  </div>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
