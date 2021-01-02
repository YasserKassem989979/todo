import { useState } from 'react'
import Datetime from 'react-datetime';
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
const AddTodoModal = ({ setShowAddModal }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState(null);



    const addTask = () => {
        console.log(dateTime)
        const task = {
            description,
            date: dateTime.format("YYYY-MM-DD HH:mm"),
            id: Math.random(),
            isCompleted: false
        }
        dispatch({ type: "ADD", task });
        setShowAddModal(false);
    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={() => setShowAddModal(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="modal-body">
                <div className="row">
                    <h3>Add a task</h3>
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={({ target: { value } }) => setDescription(value)}
                            className="form-control"
                            id="description"
                            placeholder="Ex: clean the room" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <Datetime
                            value={dateTime}
                            onChange={(m) => setDateTime(m)} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="d-flex w-50 justify-content-around">
                        <button onClick={addTask} disabled={!description || !dateTime} className="btn btn-primary">Add task</button>
                        <button onClick={() => setShowAddModal(false)} className="btn">Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: "hidden",
        minHeight: "57%"
    }
};

export default AddTodoModal
