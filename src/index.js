import './style.css';
import { addItem, clearAll, displayList } from './modules/activities.js';
import ToDo from './modules/constructor.js';

const listItem = JSON.parse(localStorage.getItem('todoList'));
if (listItem) {
  listItem.forEach((item) => new ToDo(item.description, item.complete));
}

const addInputItems = document.getElementById('add-input');
addInputItems.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addItem(addInputItems.value);
    addInputItems.value = '';
    displayList();
  }
});

const removeData = document.getElementById('remove-btn');
removeData.addEventListener('click', () => {
  clearAll(ToDo);
  displayList();
});
displayList();
