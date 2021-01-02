import { useState, useEffect } from 'react'
import TaskList from "../components/taskList"
import { useDispatch } from "react-redux"
import moment from "moment"
const Calendar = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(moment(new Date()).format("YYYY-MM-DD"))
    }, [])

    useEffect(() => {
        dispatch({ type: "DATE_FILTER", date: date })
    }, [date, dispatch])

    const dateHandler = ({ target: { value } }) => {
        setDate(value)
    }

    return (
        <div style={{ minHeight: "100vh" }} className="container">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-sm-12 d-flex w-100 justify-content-center">
                    <div className="mb-3 d-flex align-items-end">
                        <label htmlFor="datetime" className="form-label mx-2">Date:</label>
                        <input id="datetime" value={date} onChange={dateHandler} className="form-control" type="date" />
                    </div>
                </div>
                <div style={{minWidth:300}} className="col-sm-12 d-flex w-75 my-3">
                    <div className="d-flex w-100 justify-content-between">
                        <p className="h5 text-primary">Tasks:</p>
                    </div>
                </div>
                <TaskList dateFilteredTasks={true} />
            </div>
        </div>
    )
}

export default Calendar
