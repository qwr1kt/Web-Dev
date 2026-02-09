const taskInput = document.querySelector('.new-task');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.to-do-List');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please set a goal for today!');
        return;
    }

    const li = document.createElement('li');

    const leftPart = document.createElement('div');
    leftPart.className = 'task-left'; 

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'task-text';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '🗑️'; 

    leftPart.appendChild(checkbox);
    leftPart.appendChild(span);

    li.appendChild(leftPart);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    taskInput.value = '';

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.classList.add('done');
        } else {
            span.classList.remove('done');
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});