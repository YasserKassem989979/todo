import { useState, useEffect } from 'react'
import AddTodoModal from "../components/addTodoModal"
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.TODOS.filteredTasks);
    const searchValue = useSelector(state => state.TODOS.searchValue);
    const [showAddModal, setShowAddModal] = useState(false);
    const [tasksToShow, setTasksToShow] = useState(tasks.slice(0, 5))
    const fetchData = () => {
        setTasksToShow(tasks.slice(0, tasksToShow.length + 5))
    }

    useEffect(() => {
        setTasksToShow(tasks.slice(0, tasksToShow.length))
    }, [tasks, tasksToShow.length])

    return (

        <div style={{ minHeight: "100vh" }} className="container">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-sm-12 d-flex w-100 justify-content-center">
                    <div className="mb-3">
                        <input
                            onChange={({ target: { value } }) => dispatch({ type: "SET_SEARCH_VALUE", searchValue: value })}
                            type="text"
                            value={searchValue}
                            className="form-control"
                            placeholder="search" />
                    </div>
                </div>
                <div className="col-sm-12 d-flex w-75 my-3">
                    <div className="d-flex w-100 justify-content-between">
                        <p className="h5 text-primary">Tasks:</p>
                        <button onClick={() => setShowAddModal(true)} className="btn btn-outline-primary"><i className="fas fa-plus"></i></button>
                    </div>
                </div>
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
            </div>
            {showAddModal ? <AddTodoModal setShowAddModal={setShowAddModal} /> : null}
        </div>
    )
}

export default Home
