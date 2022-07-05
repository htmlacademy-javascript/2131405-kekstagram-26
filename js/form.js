import {closeTab} from './big-picture.js'
import {checkStringLength} from "./util.js";

let uploadFile = document.querySelector('#upload-file');
let uploadSubmit = document.querySelector('#upload-submit');
export function uploadImage () {
  let workImage = document.querySelector('.img-upload__preview > img');
  uploadFile.addEventListener('change', function(evt) {
    let imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload.classList.toggle('hidden');
    document.body.classList.toggle('modal-open');
    /*
    let file = this.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      workImage.src = reader.result;
    }
    */
    closeTab('#upload-cancel', imgUpload);
    uploadFile.value = '';

    let textHashtags = document.querySelector('.text__hashtags');
    let hashtags = [];
    let textDescription = document.querySelector('.text__description');
    let description;

    textHashtags.addEventListener('focus', function(){
      textHashtags.addEventListener('keydown', function(){
        event.stopPropagation();
      })
    })

    textDescription.addEventListener('focus', function(){
      textDescription.addEventListener('keydown', function(){
        event.stopPropagation();
      })
    })

    textHashtags.addEventListener('input', function() {
      hashtags = textHashtags.value.split(" ");

      for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i] === '#' || hashtags[i][0] !== '#'
          || checkStringLength(hashtags[i], 20) === false || hashtags.length === 5
          || findWSymbols() === true || checkSameHashtags(hashtags) === true) {
          uploadSubmit.disabled = true;
        }
        else {uploadSubmit.disabled = false}
      }

      function checkSameHashtags(lowerCaseHashtags) {
        for (let i = 0; i < lowerCaseHashtags.length; i++) {
          lowerCaseHashtags[i] = lowerCaseHashtags[i].toLowerCase();
        }

        const countItems = lowerCaseHashtags.reduce((acc, item) => {
          acc[item] = acc[item] ? acc[item] + 1 : 1;
          return acc;
        }, {});
        const result = Object.keys(countItems).filter((item) => countItems[item] > 1);

        if (result.length > 0) {
          return true;
        }
        else {return false;}
      }

      function findWSymbols () {
        for (let i = 0; i < hashtags.length; i++) {
          if (hashtags[i].slice(1).search(/\W/) !== -1) {
            return true;
          }
          else {return false;}
        }
      }
      })

    textDescription.addEventListener('input', function() {
      let description = textDescription.value;
      if (checkStringLength(description, 140) === false) {
        uploadSubmit.disabled = true;
      }
      else {uploadSubmit.disabled = false;}
    })
  })
}
