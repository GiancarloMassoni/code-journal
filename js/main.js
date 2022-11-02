var $photoUrlInput = document.querySelector('#photo-url');
var $previewImage = document.querySelector('.preview-image');
var $form = document.querySelector('.entry-form');
var $tab = document.querySelector('.tab');
var $view = document.querySelectorAll('.view');
var $newButton = document.querySelector('.new-button');

$newButton.addEventListener('click', swapViews);

$tab.addEventListener('click', swapViews);

function swapViews(event) {

  for (var i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === data.view) {
      $view[i].className = 'view hidden';
    } else {
      $view[i].className = 'view';
      var viewData = $view[i].getAttribute('data-view');
    }
  }
  data.view = viewData;

}

$photoUrlInput.addEventListener('input', updatePhoto);
$form.addEventListener('submit', submitForm);

function updatePhoto(event) {
  if ($photoUrlInput !== '') {
    $previewImage.setAttribute('src', event.target.value);
  }
}

function submitForm(event) {
  event.preventDefault();
  var entry = {};

  entry.title = $form.elements.title.value;
  entry.photoUrl = $form.elements.photourl.value;
  entry.notes = $form.elements.notes.value;
  entry.entryId = data.nextEntryId;

  data.entries.unshift(entry);
  $form.reset();
  $previewImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.nextEntryId++;

  domTreeOnSubmit(entry);
  swapViews();
}

function renderEntry(entry) {
  var li = document.createElement('li');

  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  li.appendChild(row);

  var columnHalf = document.createElement('div');
  columnHalf.setAttribute('class', 'column-half padding');
  row.appendChild(columnHalf);

  var img = document.createElement('img');
  img.setAttribute('src', entry.photoUrl);
  columnHalf.appendChild(img);

  var columnHalfLine = document.createElement('div');
  columnHalfLine.setAttribute('class', 'column-half line-height');
  row.appendChild(columnHalfLine);

  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  columnHalfLine.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalfLine.appendChild(p);

  return li;

}

var $list = document.querySelector('.list');

function createDomTree(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var $entry = renderEntry(data.entries[i]);
    $list.appendChild($entry);
  }

  for (i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === data.view) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}

function domTreeOnSubmit(entry) {

  var submitEntry = renderEntry(entry);
  $list.prepend(submitEntry);

}

window.addEventListener('DOMContentLoaded', createDomTree);
