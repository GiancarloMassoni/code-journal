var $photoUrlInput = document.querySelector('#photo-url');
var $previewImage = document.querySelector('.preview-image');
var $form = document.querySelector('.entry-form');

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
  var title = document.getElementById('title');
  var photoUrlInput = document.getElementById('placeholder-image');
  var notes = document.getElementById('notes');

  entry.title = title.value;
  entry.photoUrl = photoUrlInput.value;
  entry.notes = notes.value;
  entry.entryId = data.nextEntryId;
  data.entries.unshift(entry);
  $form.reset();
  $previewImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.nextEntryId++;
}

function renderEntry(entry) {
  var row = document.createElement('div');
  row.setAttribute('class', 'row');

  var columnHalf = document.createElement('div');
  columnHalf.setAttribute('class', 'column-half padding');
  row.appendChild(columnHalf);

  var img = document.createElement('img');
  img.setAttribute('src', entry.photoUrl);
  columnHalf.appendChild(img);

  var columnHalfLine = document.createElement('div');
  columnHalfLine.setAttribute('class', 'column-half line-height padding');
  row.appendChild(columnHalfLine);

  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  columnHalfLine.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalfLine.appendChild(p);

  return row;

}

var $list = document.querySelector('.list');

for (var i = 0; i < data.entries.length; i++) {
  var $entry = renderEntry(data.entries[i]);
  $list.appendChild($entry);
}
