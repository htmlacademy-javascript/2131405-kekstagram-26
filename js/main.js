import {createPhotosDescriptions} from './data.js';
import {getRandomValue} from './util.js';
import {checkStringLength} from './util.js';
import {createPhoto} from './miniatures.js';

getRandomValue(0,10);

checkStringLength('Я изучаю JS', 20);

createPhoto();

console.log(createPhotosDescriptions());

