
import honey from './images/honey_tea.jpeg'
import berry from './images/berry-iced-tea-1.jpg'

export const order_page =()=> {
  const order = document.querySelector('#Order')
  const beverages = document.createElement('div')
  const sides = document.createElement('div')
  const main_dishes = document.createElement('div')
  const horny_div = document.createElement('div')
  const beary_div = document.createElement('div')  
  const selector = document.createElement('select')
  const opt1 = document.createElement('option')
  const opt2 = document.createElement('option')
  const opt3 = document.createElement('option')
  const opt4 = document.createElement('option')
  //create headings and paragraphs
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  const hrny_h2 = document.createElement('h2')
  const hrny_p = document.createElement('p')
  const hrny_prc = document.createElement('p')
  const bry_h2 = document.createElement('h2')
  const bry_p = document.createElement('p')
  const bry_prc = document.createElement('p')
  const tea = new Image()
  const berry_tea = new Image()
  tea.src = honey
  berry_tea.src = berry

  //set text to h and p
  h1.textContent = 'Menu'
  hrny_h2.textContent = 'Honey Tea'
  p.textContent = 'Choose your menu:'
  hrny_p.textContent = 'A warm, sweet tea made with the '+
  'highest quality honey and a bit of lemon to start your '+
  'day off.'
  hrny_prc.textContent = 'Price: GHc40'
  bry_h2.textContent = 'Beary Tea'
  bry_p.textContent = 'A comfort, almost filling, tea that is infused with the flavors '+
  'of several kinds of berries. Best served cold, but can be served hot on request.'
  bry_prc.textContent = 'Price: GHc50'
  opt1.textContent = 'Beverages'
  opt2.textContent = 'Sides'
  opt3.textContent = 'Main Dishes'
  opt1.id = 'bev'
  opt2.id = 'sid'
  opt3.id = 'main'
  selecting(selector, 'sides')
  console.log(selector.options)
  horny_div.id = 'honey'
  horny_div.classList.add('beverages-list')
  beary_div.classList.add('beverages-list')
  beverages.classList.add('optiontab')
  beverages.id = 'beverage'
  
  sides.classList.add('optiontab')
  sides.id = 'sides'
  main_dishes.classList.add('optiontab')
  main_dishes.id = 'dish'

  sides.textContent = 'Am in Sides'
  main_dishes.textContent = 'Am in main dishes'
  hrny_prc.classList.add('price')
  bry_prc.classList.add('price')
  p.id = 'menu'
  selector.id = 'selector'
  
  selector.appendChild(opt1)
  selector.appendChild(opt2)
  selector.appendChild(opt3)
  horny_div.appendChild(hrny_h2)
  horny_div.appendChild(hrny_p)
  horny_div.appendChild(tea)
  horny_div.appendChild(hrny_prc)
  beary_div.appendChild(bry_h2)
  beary_div.appendChild(bry_p)
  beary_div.appendChild(berry_tea)
  beary_div.appendChild(bry_prc)
  beverages.appendChild(horny_div)
  beverages.appendChild(beary_div)
  order.appendChild(h1)
  order.appendChild(p)
  order.appendChild(selector)
  order.appendChild(beverages)
  order.appendChild(sides)
  order.appendChild(main_dishes)
  
  return order
}

var record = []

const selecting = (sel, page)=> {
	const option = document.getElementsByClassName('optiontab')
  const sele = document.getElementById('selector')
	var i;

	for (i=0; i<option.length; i++){
		option[i].style.display = 'none'
	}
  for (i=0; i<sel.length; i++){
    sel.options[i].selected = false;
  }

}
const recording =(elmt)=> {
  record[elmt.selectedIndex] = !record[elmt.selectedIndex]
  console.log(record[elmt.selectedIndex] = !record[elmt.selectedIndex])
  refresh(elmt)
}
const refresh = (elmt)=>{

  var i;
  for (i=0; i<record.length; i++){
    elmt.options[i].selected = record[i]

  }
}


