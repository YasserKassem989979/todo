import { useState } from 'react'
import Datetime from 'react-datetime';
import TaskList from "../components/taskList"


const Calendar = () => {
    const [dateTime, setDateTime] = useState(null);

    return (
        <div style={{ minHeight: "100vh" }} className="container">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-sm-12 d-flex w-100 justify-content-center">
                    <div className="mb-3">
                        <Datetime
                            value={dateTime}
                            onChange={(m) => setDateTime(m)} />
                    </div>
                </div>
                <div className="col-sm-12 d-flex w-75 my-3">
                    <div className="d-flex w-100 justify-content-between">
                        <p className="h5 text-primary">Tasks:</p>
                    </div>
                </div>
                <TaskList />
            </div>
        </div>
    )
}

export default Calendar
