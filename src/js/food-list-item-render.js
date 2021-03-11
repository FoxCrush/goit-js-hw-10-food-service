import foodItemsListJson from '../json-from-server/menu.json';
import parseFoodListItemsTpl from '../templates/food-card.hbs';

const foodItemsParsedList = JSON.parse(JSON.stringify(foodItemsListJson));
const foodServiceListEl = document.querySelector('.menu.js-menu');

foodServiceListEl.insertAdjacentHTML('beforeend', parseFoodListItemsTpl(foodItemsParsedList));

