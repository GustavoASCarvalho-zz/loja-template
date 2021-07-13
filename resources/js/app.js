import '../css/app.scss'
import 'bootstrap'

try {
  //form
  const formName = document.querySelector('#name')
  const formDescription = document.querySelector('#description')
  const formPhoto = document.querySelector('#photo')
  const formCategoriesId = document.querySelector('#categoriesId')

  //preview

  const previewName = document.querySelector('.preview_name')
  const previewDescription = document.querySelector('.preview_description')
  const previewPhoto = document.querySelector('.preview_photo')

  formName.addEventListener('keyup', () => {
    previewName.textContent = formName.value
  })

  formDescription.addEventListener('keyup', () => {
    previewDescription.textContent = formDescription.value
  })

  formPhoto.addEventListener('change', (e) => {
    console.log(e)
  })
} catch (error) {
  console.log(error)
}

// example file upload
/* <input id='img' type='file' onchange='getImg(event)'/>
JS

function getImg(evt){
 var files = evt.dataTransfer.files;
 var file = files[0];
console.log(file.name) */
