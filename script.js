//TODO 📗 Module 5. Logic and Control Flow - Lesson 09.02: Practical Logic Patterns - Challenge


//TODO 📝 Step 4:  Task Manager Logic Enhancer

//* 🎯 Challenge Objective
//  Refactor a basic task management script using practical logic patterns (guard clauses, short-circuiting, ternary operators, default parameters, and switch statements) to improve its clarity and maintainability.

//* 🛠️ Challenge Instructions
//  1. Function: addTask(task)
//  • Guard clause: Return early if task is not provided or task.name is missing.
//  • Use default parameter for priority = 'normal'.

//  2. Function: getTaskStatus(status)
//  • Use a switch statement to return one of the following:
//      > 'Pending'         → "Task is in progress"
//      > 'Completed'       → "Task is done"
//      > 'Blocked'         → "Task cannot proceed"
//      > default           → "Unknown status"

//  3. UI display logic
//  • Use a ternary operator to determine display label:

let task = '';

let label = task.isUrgent ? '🔥 Urgent Task' : 'Regular Task';

//  4. Bonus: Short-circuiting for conditional execution
//  • Only log task.notes if it exists:

task.notes && console.log('Notes:', task.notes);

//* 📦 Example Input

//  addTask({ name: 'Fix bug', isUrgent: true, status: 'Pending' });
//  addTask({});                                                        //  Should not be added

//* ☑️ Expected Output

//  • Added task: 🔥 Urgent Task - Fix bug
//  • Task is in progress

//* 🧠 Reflection Prompts
//  • How did using guard clauses improve clarity?
//! Answer: Using guard clauses in the code improved clarity and maintainability.

//  • Which logic pattern helped reduce unnecessary nesting?
//! Answer: The logic pattern that helped reduce unnecessary nesting in the code is the guard clause pattern.

//  • Where could short-circuiting be useful in larger apps?
//! Answer: Short-circuiting is especially useful in larger apps for writing concise, safe, and efficient code.


//* ☑️ Pseudocode

//  SET FUNCTION addTask(task, priority = 'normal')

//  SET FUNCTION addTask
//      IF task is missing or has no name, EXIT
//      SET task.priority to priority

//      SET label to "Urgent Task" IF task is urgent, else "Regular Task"
//      PRINT "Added task: [label] - [task name]"

//      IF task has notes, print them
//      ADD task to taskList
//      PRINT getTaskStatus(task.status)

//  SET FUNCTION getTaskStatus(status):
//      IF status is "Pending", return "Task is in progress"
//      IF status is "Completed", return "Task is done"
//      IF status is "Blocked", return "Task cannot proceed"
//      OTHERWISE, return "Unknown status"

//  CALL addTask with a valid task object
//  CALL addTask with an empty object






//! 🧮 Solution

let taskList = [];

function addTask(task, priority = 'normal') {
    if (!task || !task.name) return; // Guard clause
    task.priority = priority;

    const label = task.isUrgent ? '🔥 Urgent Task' : 'Regular Task';
    console.log(`Added task: ${label} - ${task.name}`);

    task.notes && console.log('Notes:', task.notes);
    taskList.push(task);

    console.log(getTaskStatus(task.status));
}

// Function to get task status message
function getTaskStatus(status) {
    switch (status) {
        case 'Pending': return 'Task is in progress';
        case 'Completed': return 'Task is done';
        case 'Blocked': return 'Task cannot proceed';
        default: return 'Unknown status';
    }
}

// Test the logic with sample inputs
addTask({ name: 'Fix bug', isUrgent: true, status: 'Pending', notes: 'High priority' });
addTask({}); 























