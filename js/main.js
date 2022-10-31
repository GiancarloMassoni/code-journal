var $photoUrl = document.querySelector('#photo-url');
var $photoOutput = document.querySelector('img');
var $form = document.querySelector('.entry-form');
var nextEntryId = 0;

$photoUrl.addEventListener('input', updatePhoto);
$form.addEventListener('submit', submitForm);

function updatePhoto(event) {
  if ($photoUrl !== '') {
    $photoOutput.setAttribute('src', event.target.value);
  }
}

function submitForm(event) {
  event.preventDefault();
  var formInputs = {};
  var title = document.getElementById('title');
  var photoUrl = document.getElementById('photo-url');
  var notes = document.getElementById('notes');

  formInputs.title = title.value;
  formInputs.photoUrl = photoUrl.value;
  formInputs.notes = notes.value;
  formInputs.nextEntryId = nextEntryId;
  data.entries.unshift(formInputs);
  $form.reset();
  $photoOutput.setAttribute('src', 'images/placeholder-image-square.jpg');

}
