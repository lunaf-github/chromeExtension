date = document.getElementById('date');
let today = new Date();
let todayDate =
  today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
date.innerText = todayDate;

for (let i = 1; i <= localStorage.length; i += 1) {
  // const entryHolder = document.createElement('div');
  // entryHolder.setAttribute('id', counter + '');
  // const checklist = document.createElement('input');
  // checklist.setAttribute('type', 'checkbox');
  // entryHolder.style.display = 'flex';
  const newEntry = document.createElement('li');
  const inputText = localStorage[i];
  document.getElementById('list').appendChild(newEntry);
  newEntry.innerHTML = inputText;
}
class Event {
  constructor(message) {
    this.message = message;
  }
}

const buttonPress = document.getElementById('addButton');
buttonPress.addEventListener('click', function () {
  let counter = localStorage.length;

  const entryHolder = document.createElement('div');
  entryHolder.setAttribute('id', counter + '');
  const checklist = document.createElement('input');
  checklist.setAttribute('type', 'checkbox');
  entryHolder.style.display = 'flex';
  const newEntry = document.createElement('li');
  //   newEntry.setAttribute('type', 'checkbox');
  const inputText = document.getElementById('inputText').value;
  entryHolder.appendChild(newEntry);
  entryHolder.appendChild(checklist);

  document.getElementById('list').appendChild(entryHolder);
  newEntry.innerHTML = inputText;
  counter += 1;

  localStorage[counter] = inputText;

  //
});

const clearBtn = document.getElementById('clearButton');
clearBtn.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});

// console.log(localStorage['test']);
console.log(localStorage);
