// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask)
}

function addTask(e) {
  if(taskInput.value === "") {
    alert('Add Task');
    return;
  }

  // Create li Element
  const li = document.createElement('li');
  // Add class name
  li.className = 'collection-item';
  // Append textNode to li
  li.appendChild(document.createTextNode(taskInput.value));
  
  // Create new link element
  const link = document.createElement('a');
  // Add class name
  link.className = 'delete-item secondary-content';
  // Add icon html to link
  link.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Reset Input
  taskInput.value = '';

  e.preventDefault();
}

