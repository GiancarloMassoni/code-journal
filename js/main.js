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
  entry.EntryId = data.nextEntryId;
  data.entries.unshift(entry);
  $form.reset();
  $previewImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.nextEntryId++;
}
