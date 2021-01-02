import { useState } from 'react'
import AddTodoModal from "../components/addTodoModal"
import { useSelector, useDispatch } from "react-redux";
import TaskList from "../components/taskList";

const Home = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.TODOS.searchValue);
    const [showAddModal, setShowAddModal] = useState(false);




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
                <TaskList />
            </div>
            {showAddModal ? <AddTodoModal setShowAddModal={setShowAddModal} /> : null}
        </div>
    )
}

export default Home
