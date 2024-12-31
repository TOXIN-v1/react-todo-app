import React, { Component } from 'react';
import CheckBox from './CheckBox'; // Import the CheckBox component

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.task.completed, // Task completion state
            showDialog: false, // Control dialog visibility
            backupChecked: this.props.task.completed, // Backup state for canceling
        };
    }

    // Handle checkbox change with confirmation
    handleCheckboxChange = (checked) => {
        this.setState({ backupChecked: this.state.isChecked }); // Backup current state
        this.setState({ showDialog: true }); // Show the confirmation dialog
    };

    // Confirm the change (mark as completed)
    handleConfirm = () => {
        this.setState({ isChecked: true, showDialog: false }); // Mark task as completed
        this.props.changeStatus(this.props.task.id, true); // Update task status
    };

    // Cancel the change (restore original state)
    handleCancel = () => {
        this.setState({ isChecked: this.state.backupChecked, showDialog: false }); // Revert state
    };

    render() {
        const { task } = this.props;
        return (
            <div>
                <div>
                    <CheckBox
                        checked={this.state.isChecked}
                        onChange={this.handleCheckboxChange}
                    />
                    <span>{task.text}</span>
                    <span>Priority: {task.priority}</span> {/* Display priority */}
                    <span>Due Date: {task.dueDate}</span> {/* Display due date */}
                </div>

                {/* Confirmation Dialog */}
                {this.state.showDialog && (
                    <div style={styles.dialog}>
                        <p>Are you sure you want to mark this task as completed?</p>
                        <button onClick={this.handleConfirm}>Confirm</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                )}
            </div>
        );
    }
}

// Simple styles for the dialog
const styles = {
    dialog: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
    },
};

export default Task;
