let categories = [];
let dishes = [];
async function getCategories(){
  let response = await fetch('www.themealdb.com/api/json/v1/1/list.php?c=list')
  let result = await response.json();
  return result;
}

async function getDishesbyCategory(categories){
    for(let cat of categories){
      let response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
      let result = await reponse.json();
      dishes.push(result);
    }
}
categories = getCategories();
console.log(categories)

getDishesbyCategory(categories.meals);

function renderCards(){
  let html = '';
  let result = document.querySelector('#renderkey');
  for(let dish of dishes)
}