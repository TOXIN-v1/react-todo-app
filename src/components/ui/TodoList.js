import { sortByDueDate, sortByPriority } from '../../services/sort';

export default function TodoList(props) {
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions;
    const activeItemCount = applyFilter(list, FILTER_ACTIVE).length;
    const items = search(applyFilter(list, filter), query);

    // Sort tasks by priority and due date
    const sortedByPriority = sortByPriority(items);
    const sortedItems = sortByDueDate(sortedByPriority);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{ addNew, mode, query, setSearchQuery }} />
                    <FilteredList {...{ items: sortedItems, changeStatus }} />
                    <Footer {...{ activeItemCount, filter, changeFilter, mode, changeMode }} />
                    <Info {...{ mode }} />
                </div>
            </div>
        </div>
    );
}
