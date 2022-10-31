var $photoUrl = document.querySelector('#photourl');
var $photoOutput = document.querySelector('img');
var $form = document.querySelector('.entry-form');

$photoUrl.addEventListener('input', updatePhoto);
$form.addEventListener('submit', updateForm);

function updatePhoto(event) {
  if ($photoUrl !== '') {
    $photoOutput.setAttribute('src', event.target.value);
  }
}

function updateForm(event) {
  event.preventDefault();
  var formInputs = {};
  var title = document.getElementById('title');
  var photoUrl = document.getElementById('photourl');
  var notes = document.getElementById('notes');
  formInputs.title = title.value;
  formInputs.photoUrl = photoUrl.value;
  formInputs.notes = notes.value;

}
