import {getRandomValue} from './util.js';

let descriptionVariations = ['На море.', 'На природе.', 'Утро.', 'Сегодня хорошая погода.', 'Чувствую себя хорошо.'];

let commentNames = ['Александр', 'Борис', 'Глеб', 'Игорь'];

export function createPhotosDescriptions () {
  let descriptions = [];
  for (let i = 1; i <= 25; i++) {
    let description = {};
    description.id = i;
    description.url = `photos/${i}.jpg`;
    description.likes = getRandomValue(15,200);
    description.description = descriptionVariations[getRandomValue(0,4)];
    description.comments = [];
    for (let j = 1; j <= getRandomValue(1,10); j++) {
      let comment = {};
      comment.id = `${i}${j}`;
      comment.avatar = `img/avatar-${getRandomValue(1,6)}.svg`;
      if (j%2 === 0) {
        comment.message = 'Всё отлично!';
      }
      else {
        comment.message = 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
      }
      comment.name = commentNames[getRandomValue(0,3)];
      description.comments.push(comment);
    }
    descriptions.push(description);
  }
  return descriptions;
}
