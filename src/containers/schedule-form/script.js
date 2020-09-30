import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../../actions/index';

import './style.scss';

function ScheduleForm() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(state => state.isFormOpen);
    const day = useSelector(state => state.day)
    const month = useSelector(state => state.month)
    const [taskValue, setTask] = useState('')

    function handleTaskValue(event) {
        setTask(event.target.value);
    }

    function handleSubmit(event) {
        dispatch(closeForm(taskValue, day, month));
        setTask('');
        event.preventDefault();
    }

    if(!isFormOpen) {
        return <></>;
    }

    return (
        <div className="schedule-form">
            <h2 className="schedule-form__heading">Editing date: {day}/{month}/2020</h2>
            <div className="schedule-form__close-btn" onClick={() => dispatch(closeForm())}></div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add description for you task:
                    <input value={taskValue} onChange={handleTaskValue}></input>
                </label>
            <input type="submit" value="Add task" />
            </form>
        </div>
    )
}

export default ScheduleForm;