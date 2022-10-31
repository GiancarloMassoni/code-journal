var $photoUrl = document.querySelector('#photo-url');
var $photoOutput = document.querySelector('img');
var $form = document.querySelector('.entry-form');
var nextEntryId = 0;
var formInputs = {};

$photoUrl.addEventListener('input', updatePhoto);
$form.addEventListener('submit', updateForm);

function updatePhoto(event) {
  if ($photoUrl !== '') {
    $photoOutput.setAttribute('src', event.target.value);
  }
}

function updateForm(event) {
  event.preventDefault();

  var title = document.getElementById('title');
  var photoUrl = document.getElementById('photo-url');
  var notes = document.getElementById('notes');

  formInputs.title = title.value;
  formInputs.photoUrl = photoUrl.value;
  formInputs.notes = notes.value;
  formInputs.nextEntryId = nextEntryId;

  nextEntryId++;

}
