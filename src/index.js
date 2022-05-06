import _, { orderBy } from 'lodash';
//import img from './h.jpeg'
import './index.css';
import './home.css'
import './order.css'
import	'./contact.css'
//import {load_page} from './home'
import {order_page} from './order'
import { home_page, home_func} from './home';
import { contact_page } from './contact';


const load_page = () => {
	const content = document.querySelector('#contents')
	const home_btn = document.createElement('button')
	const order_btn = document.createElement('button')
	const contact_btn = document.createElement('button')
	const about_btn = document.createElement('button')
	const home_div = document.createElement('div')
	const housing_div = document.createElement('div')
	const housing_order = document.createElement('div')
	const housing_contact = document.createElement('div')
	const housing_about = document.createElement('div')
	const order_div = document.createElement('div')	
	const about_div = document.createElement('div')
	const contact_div = document.createElement('div')
	const butn = document.createElement('div')
	home_div.id = 'Home'
	housing_div.id = 'housing_home'
	housing_order.id = 'housing_order'
	housing_contact.id = 'housing_contact'
	housing_about.id = 'housing_about'
	home_div.classList.add('tabcontent')
	order_div.id = 'Order'
	order_div.classList.add('tabcontent')
	about_div.id = 'About'
	about_div.classList.add('tabcontent')
	contact_div.id = 'Contact'
	contact_div.classList.add('tabcontent')
	butn.classList.add('btn_con')
	home_btn.classList.add('tablink')
	home_btn.id = 'tabHome'
	home_btn.setAttribute("onclick", 'myfunction(this)')
	home_btn.onclick = function(){myfunction('Home', home_btn)}
	home_btn.innerText = 'Home'
	order_btn.classList.add('tablink')
	order_btn.innerText = 'Order'
	order_btn.onclick = function(){myfunction('Order', order_btn)}
	order_btn.id = 'tabOrder'
	contact_btn.classList.add('tablink')
	contact_btn.id = 'tabContact'
	contact_btn.onclick = function(){myfunction('Contact', contact_btn)}
	contact_btn.innerText = 'Contact'
	about_btn.classList.add('tablink')
	about_btn.id = 'tabAbout'
	about_btn.onclick = function(){myfunction('About', about_btn)}
	about_btn.innerText = 'About'


	butn.appendChild(home_btn)
	butn.appendChild(order_btn)
	butn.appendChild(contact_btn)
	butn.appendChild(about_btn)
	content.appendChild(butn)
	content.appendChild(home_div)
	content.appendChild(order_div)
	content.appendChild(contact_div)
	content.appendChild(about_div)

	return content
}

load_page()
home_page()
order_page()
contact_page()


const myfunction =(page, elmt) => {
	const tabcontent = document.getElementsByClassName('tabcontent')
	const tablink = document.getElementsByClassName('tablink')
	var i;
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = 'none'
	}
	for (i=0; i<tablink.length; i++){
		tablink[i].style.backgroundColor = ''
		tablink[i].style.backgroundImage = ''
		tablink[i].style.boxShadow = ''
		tablink[i].style.borderRadius = ''
		tablink[i].style.border = 'none'}
	document.getElementById(page).style.display = 'flex'

	elmt.style.backgroundImage = "url('adb7c3d8c5463bc99ae4.jpeg')"
	elmt.style.boxShadow = '5px 10px 40px yellowgreen'
	elmt.style.borderRadius = '15px'
}

document.getElementById('tabHome').click();


