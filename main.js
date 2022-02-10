for (let i = 2; i <= localStorage.length; i += 1) {
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

  // const entryHolder = document.createElement('div');
  // entryHolder.setAttribute('id', counter + '');

  const newEntry = document.createElement('li');
  //   newEntry.setAttribute('type', 'checkbox');
  const inputText = document.getElementById('inputText').value;
  document.getElementById('list').appendChild(newEntry);
  newEntry.innerHTML = inputText;
  counter += 1;

  localStorage[counter] = inputText;

  // chrome.storage.sync.set({ key: inputText }, function () {
  //   console.log('Value is set to ' + inputText);
  // });

  // chrome.storage.local.get('test', function (result) {
  //   console.log('Value currently is ' + result.key);
  // });
});
// console.log(localStorage['test']);
console.log(localStorage);
