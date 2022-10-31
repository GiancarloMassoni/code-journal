var $photoUrl = document.querySelector('#photo-url');
var $photoOutput = document.querySelector('img');
$photoUrl.addEventListener('input', updatePhoto);

function updatePhoto(event) {

  if ($photoUrl !== '') {
    $photoOutput.setAttribute('src', event.target.value);
  }
}
