
import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2,  3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();


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

/*
  const getCoffee = coffee => {
    const $ul = document.querySelector(`.prices__list`);
    const $li = document.createElement(`.li`);
    const $a = document.createElement(`a`);
    const $span = document.createElement(`span`);

    $ul.appendChild($li);
    $li.appendChild($a);
    $a.appendChild($span);
    $span.appendChild(getName(data));
    $span.appendChild(getPrice(data));

    const $name = document.createElement(`span`);
    $name.textContent = data.name;
    $name.classList.add(`price__button__name`);
    return $name;

    const $price = document.createElement(`span`);
    $price.textContent = data.prices.small;
    $price.classList.add(`price__button__amount`);
    return $li;


  const getCoffees = data => {
    const $coffees = document.querySelector(`.prices__list`);
    data.coffees.forEach(coffee => {
      const $coffee = getCoffees(coffee);
      $coffees.appendChild($coffee);
    });
  };

  const init = () => {
    getCoffees(data);
  };

  init();
}
*/

{
  const init = () => {

    createCoffees(data);
  };

  const createCoffees = data => {
    const $coffees = document.querySelector(`.prices__list`);
    data.coffees.forEach(coffee => {
      const $coffee = createCoffee(coffee);
      $coffees.appendChild($coffee);
    });
  };

  const createCoffee = coffee => {
    // nieuw listitem aanmaken
    const $li = document.createElement(`li`);
    $li.classList.add(`price`);
    $li.textContent = coffee[0];

    //Button price
    const $a = document.createElement(`a`);
    $a.classList.add(`price__button`);
    $li.appendChild($a);

    //Wrapper
    const $wrapper = document.createElement(`span`);
    $wrapper.classList.add(`price_button_wrapper`);
    $a.appendChild($wrapper);

    //Naam span element
    const $spanname = document.createElement(`span`);
    $spanname.classList.add(`price_button_name`);
    $wrapper.appendChild($spanname);
    $spanname.textContent = coffee.name;
    $spanname.dataset.id = coffee.id;

    //Aantal span element
    const $spanamount = document.createElement(`span`);
    $spanamount.classList.add(`price_button_amount`);
    $wrapper.appendChild($spanamount);
    $spanamount.textContent = coffee.prices.medium;

    //Button
    const $button = document.createElement(`span`);
    $button.classList.add(`price_button_plus`);
    $a.appendChild($button);
    $button.textContent = '+';

    return $li;
  };

  init();
}
