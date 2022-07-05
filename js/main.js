import {createPhotosDescriptions} from './data.js';
import {getRandomValue} from './util.js';
import {checkStringLength} from './util.js';
import {createPhoto} from './miniatures.js';
import {getToBigPicture} from './big-picture.js';

getRandomValue(0,10);

checkStringLength('Я изучаю JS', 20);

createPhotosDescriptions();

createPhoto();

pictures.children[i+2].addEventListener('click', function() {
  getToBigPicture(descriptions[i]);
  document.body.classList.toggle('modal-open');
})
