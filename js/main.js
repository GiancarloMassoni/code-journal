var $photoUrlInput = document.querySelector('#photo-url');
var $previewImage = document.querySelector('.preview-image');
var $form = document.querySelector('.entry-form');
var $tab = document.querySelector('.tab');
var $view = document.querySelectorAll('.view');
var $newButton = document.querySelector('.new-button');
var $h1 = document.querySelector('.new-entry');

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
  $h1.textContent = 'New Entry';
  $form.reset();
  $previewImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.editing = null;
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

  if (data.editing !== null) {
    data.editing.title = $form.elements.title.value;
    data.editing.photoUrl = $form.elements.photourl.value;
    data.editing.notes = $form.elements.notes.value;

    var $fullList = document.querySelectorAll('li');
    for (var i = 0; i < $fullList.length; i++) {
      var attr = $fullList[i].getAttribute('data-entry-id');
      var attrNum = parseInt(attr);
      if (data.editing.entryId === attrNum) {
        $fullList[i].replaceWith(renderEntry(data.editing));
      }
    }

  } else {
    data.entries.unshift(entry);
    domTreeOnSubmit(entry);
    data.nextEntryId++;

  }

  data.editing = null;
  $form.reset();
  $previewImage.setAttribute('src', 'images/placeholder-image-square.jpg');

  swapViews();
}

function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('data-entry-id', entry.entryId);

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

  var smallRow = document.createElement('div');
  smallRow.setAttribute('class', 'row');
  columnHalfLine.appendChild(smallRow);

  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  h2.setAttribute('class', 'column-five-sixths');
  smallRow.appendChild(h2);

  var pencil = document.createElement('i');
  pencil.setAttribute('class', 'column-one-sixth fa-solid fa-2x fa-pencil text-right padding');
  smallRow.appendChild(pencil);

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

var $singleEntry = document.querySelector('ul');

$singleEntry.addEventListener('click', editEntry);

function editEntry(event) {

  if (event.target && event.target.tagName === 'I') {
    swapViews();
    var id = event.target.closest('li').getAttribute('data-entry-id');
    var numId = parseInt(id);
    for (var i = 0; i < data.entries.length; i++) {
      if (numId === data.entries[i].entryId) {
        $previewImage.setAttribute('src', data.entries[i].photoUrl);
        $form.elements.title.value = data.entries[i].title;
        $form.elements.photourl.value = data.entries[i].photoUrl;
        $form.elements.notes.value = data.entries[i].notes;
        $h1.textContent = 'Edit Entry';
        data.editing = data.entries[i];

      }
    }
  }
}
