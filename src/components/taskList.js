import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";


const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.TODOS.filteredTasks);
    const [tasksToShow, setTasksToShow] = useState(tasks.slice(0, 5));

    const fetchData = () => {
        setTasksToShow(tasks.slice(0, tasksToShow.length + 5))
    }

    useEffect(() => {
        setTasksToShow(tasks.slice(0, tasksToShow.length >= 5 ? tasksToShow.length : 5))
    }, [tasks, tasksToShow.length]);


    return (
        <>
            <div className="col-sm-12 d-flex justify-content-center align-items-center">
                <ul className="list-group w-75 p-0">
                    {tasksToShow.map((todo, i) => {
                        return (
                            <li key={todo.id}
                                className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                                <span
                                >
                                    <i
                                        style={{
                                            cursor: "pointer",
                                            color: todo.isCompleted ? "#2C7348" : "#5C636A",

                                        }}
                                        onClick={() => dispatch({ type: "COMPELTE", id: todo.id })}
                                        className={`${todo.isCompleted ? "fas" : "far"} fa-check-circle fs-3`}></i>
                                </span>
                                <div className="d-flex align-items-center flex-column">
                                    <span className="h6 text-primary">{todo.description}</span>
                                    <span className="text-secondary">{todo.date}</span>
                                </div>
                                <span onClick={() => dispatch({ type: "DEL", id: todo.id })} style={{ cursor: "pointer" }} className="badge bg-danger"><i className="fas fa-trash"></i></span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-center my-3">
                {tasksToShow.length !== tasks.length ? <button className="btn btn-link" onClick={fetchData}>Load More ...</button> : null}
            </div>
        </>
    )
}

export default TaskList
