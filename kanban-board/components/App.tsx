import Header from "./header/Header";
import TaskCards from "./task/TaskCards";
import styles from "./components.module.css"




const App : React.FC = () => {
    return (
        <div className={styles.App}>
            <Header/>
            <TaskCards/>
        </div>
    );
}

export default App;