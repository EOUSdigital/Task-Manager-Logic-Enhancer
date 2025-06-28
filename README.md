# 📗 Module 5. Logic and Control Flow - Lesson 09.02: Practical Logic Patterns - Challenge

## 📝 Step 4:  Task Manager Logic Enhancer

### 🎯 Challenge Goal
Apply practical logic patterns to create a clean, readable, and efficient task manager.

---

### ☑️ Pseudocode

```javascript
SET taskList

SET FUNCTION addTask(task, priority = 'normal')
    IF task is missing or has no name, RETURN
    SET task.priority to priority

    SET label to "Urgent Task" IF task is urgent, ELSE "Regular Task"
    PRINT "Added task: [label] - [task name]"

    IF task has notes, print them
    ADD task to taskList
    PRINT getTaskStatus(task.status)

SET FUNCTION getTaskStatus(status):
     IF status is "Pending", RETURN "Task is in progress"
     IF status is "Completed", RETURN "Task is done"
     IF status is "Blocked", RETURN "Task cannot proceed"
     OTHERWISE, RETURN "Unknown status"

CALL addTask WITH a valid task object
CALL addTask WITH an empty object
```

---

### 🧮 JavaScript Solution

```javascript
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

function getTaskStatus(status) {
  switch (status) {
    case 'Pending':
      return 'Task is in progress';
    case 'Completed':
      return 'Task is done';
    case 'Blocked':
      return 'Task cannot proceed';
    default:
      return 'Unknown status';
  }
}

// Sample Calls
addTask({ name: 'Fix bug', isUrgent: true, status: 'Pending', notes: 'High priority' });
addTask({}); // Should be ignored
```

---

### ✅ Output Example

```javascript
Added task: 🔥 Urgent Task - Fix bug
Notes: High priority
Task is in progress
```
---

### 🔍 Logic Patterns Used

- **Guard Clauses**: to exit early for invalid input
- **Default Parameters**: used in `addTask(task, priority = 'normal')`
- **Ternary Operators**: to assign task labels
- **Short-Circuiting**: to conditionally log notes
- **Switch Statements**: to handle multiple task status cases

---

### 🧠 Reflection Prompts

- What part of the logic felt the most natural to write?
- Could this pattern be applied to larger features like scheduling or filtering?
- How do these patterns help reduce bugs or confusion?
