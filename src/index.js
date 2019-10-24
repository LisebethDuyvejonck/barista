import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2,  3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

{
  /*
  const createCoffee = coffee => {
    const $name = document.querySelector(`.price__button__name`);
    $name.textContent = coffee.name;
    console.log(coffee.name);

    const $price = document.querySelector(`.price__button__amount`);
    $price.textContent = coffee.prices.small;
  };

  const parse = coffees => {
    coffees.forEach(coffee => {
      createCoffee (coffee);
    });
  };

  const getCoffees = async () => {
    const url = './assets/data/coffees.json';
    const response = await fetch(url);
    parse(await response.json());
  };*/

  const init = () => {
    //getCoffees();
    console.log(data);
    data.coffees.forEach(coffee => {
      console.log(coffee.name);
      const $name = document.querySelector(`.price__button__name`);
      $name.textContent = coffee.name;
      console.log(coffee.prices.small);
      const $price = document.querySelector(`.price__button__amount`);
      $price.textContent = coffee.prices.small;
    });
  };

  init();
}
