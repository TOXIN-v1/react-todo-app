export function sortByPriority(tasks) {
    return tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
}

export function sortByDueDate(tasks, ascending = true) {
    return tasks.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        return ascending ? dateA - dateB : dateB - dateA;
    });
}
