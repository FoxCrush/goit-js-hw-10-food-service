import foodItemsListJson from '../json-from-server/menu.json';
import parseFoodListItemsTpl from '../templates/food-card.hbs';
console.log("🚀 parseFoodListItems", parseFoodListItemsTpl);

const foodItemsParsedList = JSON.parse(JSON.stringify(foodItemsListJson));
// console.log("🚀", foodItemsParsedList);
const foodServiceListEl = document.querySelector('.menu.js-menu');
// console.log("🚀 foodServiceListEl", foodServiceListEl);
foodServiceListEl.insertAdjacentHTML('beforeend', 's');

