class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(),
            priority: 'Low', // Default priority
            dueDate: '', // Default empty due date
        };
    }

    addNew(text) {
        let updatedList = addToList(this.state.list, {
            text,
            completed: false,
            priority: this.state.priority,
            dueDate: this.state.dueDate, // Add due date to task
        });

        this.setState({ list: updatedList });
    }

    handlePriorityChange = (event) => {
        this.setState({ priority: event.target.value });
    };

    handleDueDateChange = (event) => {
        this.setState({ dueDate: event.target.value });
    };

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery', 'handlePriorityChange', 'handleDueDateChange'])
        });

        return <div>{children}</div>;
    }
}
