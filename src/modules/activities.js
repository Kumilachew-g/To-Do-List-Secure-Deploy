import ToDoList from './constructor.js';

export const addItem = (data) => {
  const newListItem = new ToDoList(data);
  localStorage.setItem('todoList', JSON.stringify(newListItem.getList()));
};

export const clear = (index) => {
  ToDoList.list = ToDoList.list.filter((item) => item !== ToDoList.list[index]);
  ToDoList.list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(ToDoList.list));
};

export const update = (index, text) => {
  ToDoList.list[index].description = text;
  localStorage.setItem('todoList', JSON.stringify(ToDoList.list));
};

export const displayList = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  ToDoList.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';

    listItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span class ="spn">${item.description}</span>
    <textarea class="text-area" maxlength="25">${item.description}</textarea>
    <i class="fa fa-trash trash-btn" aria-hidden="true"></i>
    `;

    todoList.appendChild(listItem);
    const textInput = listItem.querySelector('.text-area');
    const trashButton = listItem.querySelector('.trash-btn');
    const checkboxInput = listItem.querySelector('.checkbox');
    const descriptionText = listItem.querySelector('.spn');

    checkboxInput.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      ToDoList.list[index].update();
      descriptionText.classList.toggle('complete');
      textInput.classList.toggle('complete');
      listItem.classList.toggle('active');
      localStorage.setItem('todoList', JSON.stringify(ToDoList.list));
    });

    descriptionText.addEventListener('click', () => {
      descriptionText.style.display = 'none';
      textInput.classList.toggle('update-item');
    });

    textInput.addEventListener('keydown', (e) => {
      descriptionText.innerHTML = textInput.value;
      const index = parseInt(listItem.id, 10);
      update(index, descriptionText.innerHTML);
      if (e.code === 'Enter') {
        descriptionText.style.display = 'block';
        textInput.classList.toggle('update-item');
      }
    });

    trashButton.addEventListener('click', () => {
      const index = parseInt(listItem.id, 10);
      clear(index);
      displayList();
    });
    if (item.complete) {
      checkboxInput.checked = true;
      descriptionText.classList = 'complete';
    }
  });
};

export const clearAll = (allTasks) => {
  allTasks.list = allTasks.list.filter((item) => item.complete === false);
  allTasks.list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(allTasks.list));
};
