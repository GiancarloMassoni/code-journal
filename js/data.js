/* exported data */
window.addEventListener('beforeunload', saveToLocalStorage);

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('journal-entry');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function saveToLocalStorage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('journal-entry', dataJSON);
}
data.nextEntryId++;
