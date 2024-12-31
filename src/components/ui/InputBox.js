import React from 'react';

export default function InputBox(props) {
    const { value, handleChange, handleKeyUp, priority, handlePriorityChange, dueDate, handleDueDateChange } = props;

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <select onChange={handlePriorityChange} value={priority} className="form-control">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={handleDueDateChange}
            />
        </div>
    );
}
