

export const home_page = () => {
  const home = document.querySelector('#Home')
	const intro = document.createElement('div')
	const working = document.createElement('div')
	const working_inner = document.createElement('div')
	const loc = document.createElement('div')
	const loc_p = document.createElement('p')
	const loc_h2 = document.createElement('h2')
	const p_cont = document.createElement('p')
	const p_contt = document.createElement('p')
	const h1 = document.createElement('h1')
	const hours = document.createElement('h2')
	const discrp = document.createElement('h2')
	const p = document.createElement('p')
	const p1 = document.createElement('p')
	const p2 = document.createElement('p')
	const p3 = document.createElement('p')
	const p4 = document.createElement('p')
	const p5 = document.createElement('p')
	const p6 = document.createElement('p')
	const p7 = document.createElement('p')
	const p8 = document.createElement('p')
	const p9 = document.createElement('p')
	const p10 = document.createElement('p')
	const p11 = document.createElement('p')
	const p12 = document.createElement('p')
	const p13 = document.createElement('p')
	working_inner.classList.add('inner')
	loc.classList.add('contents')
	working.classList.add('contents')
	working.id = 'working'
	hours.textContent = 'Working Hours'
	p_cont.classList.add('first')
	p_contt.classList.add('second')
	discrp.textContent = 'Description'
	intro.classList.add('contents')
	h1.textContent = 'ADEPA RESTAURANT BAR	'
	p_cont.textContent = "Adepa Restaurant bar has an incredible atmosphere"+
	" which let it customers feel amazing when eating. "
	p_contt.textContent = " We serve variety of foods and drinks. We have a special seat reserved" +
	" for VIP customers. Also an amazing seat we couples will enjoy themselves" +
	" while eating our special food." +
	" Don't forget, this is Adepa Restaurant bar, Your service our priority." 

	p.textContent =  'Monday: '  		
	p7.textContent = '8:00am - 8:00pm'
	p1.textContent = 'Tuesday: ' 	
	p8.textContent = '8:00am - 8:00pm'
	p2.textContent = 'Wednesday: ' 	
	p9.textContent = '8:00am - 8:00pm'
	p3.textContent = 'Thursday: ' 	
	p10.textContent = '8:00am - 8:00pm'
	p4.textContent = 'Friday: ' 		
	p11.textContent = '8:00am - 8:00pm'
	p5.textContent = 'Saturday: ' 	
	p12.textContent = '10:00am - 8:00pm'
	p6.textContent = 'Sunday: ' 	
	p13.textContent = '3:00pm - 8:00pm'

	loc_h2.textContent = 'Location'
	loc_p.textContent = '123 fort-east road, near asou'

	intro.appendChild(discrp)
	intro.appendChild(p_cont)
	intro.appendChild(p_contt)
	home.appendChild(h1)
	home.appendChild(intro)
	working.appendChild(hours)
	working_inner.appendChild(p)
	working_inner.appendChild(p7)
	working_inner.appendChild(p1)
	working_inner.appendChild(p8)
	working_inner.appendChild(p2)
	working_inner.appendChild(p9)
	working_inner.appendChild(p3)
	working_inner.appendChild(p10)
	working_inner.appendChild(p4)
	working_inner.appendChild(p11)
	working_inner.appendChild(p5)
	working_inner.appendChild(p12)
	working_inner.appendChild(p6)
	working_inner.appendChild(p13)
	working.appendChild(working_inner)
	loc.appendChild(loc_h2)
	loc.appendChild(loc_p)
	home.appendChild(working)
	home.appendChild(loc)
	return home
}

