
import ride from './images/dispatch.jpg'
import trans from './images/transport.jpg'
import bs from './images/bus.jpg'

export const contact_page = () => {
  const contact = document.querySelector('#Contact')
	const riders = document.createElement('div')
	const transport = document.createElement('div')
	const bus = document.createElement('div')
	const rider_inner = document.createElement('div')
	const transport_inner = document.createElement('div')
	const bus_inner = document.createElement('div')
	const riders_h = document.createElement('h2')
	const transport_h = document.createElement('h2')
	const bus_h = document.createElement('h2')
	const h1 = document.createElement('h1')
	const p = document.createElement('p')
	const rider_a = document.createElement('p')
	const rider_b = document.createElement('p')
	const rider_c = document.createElement('p')
	const transport_a = document.createElement('p')
	const transport_b = document.createElement('p')
	const transport_c = document.createElement('p')
	const bus_a = document.createElement('p')
	const bus_b = document.createElement('p')
	const bus_c = document.createElement('p')
	const r = new Image()
	const t = new Image()
	const b = new Image()
	r.src = ride
	t.src = trans
	b.src = bs
	h1.textContent = 'Delievery Contact'
	p.textContent = 'Contact any of the delivery services below to get '+
	'your food delivered to you!'
	p.classList.add('info')
	riders.classList.add('contacts')
	transport.classList.add('contacts')
	bus.classList.add('contacts')
	rider_inner.classList.add('inner')
	transport_inner.classList.add('inner')
	bus_inner.classList.add('inner')

	riders_h.textContent = 'Dispatch Riders'
	transport_h.textContent = 'Lex Transport'
	bus_h.textContent = 'Lex Bus'

	rider_a.textContent = 'Manager'
	rider_b.textContent = '033-354-1124'
	rider_c.textContent = 'manager@adepariders.com'

	transport_a.textContent = 'Manager'
	transport_b.textContent = '033-354-1124'
	transport_c.textContent = 'manager@adepariders.com'

	bus_a.textContent = 'Manager'
	bus_b.textContent = '033-354-1124'
	bus_c.textContent = 'manager@adepariders.com'

	contact.appendChild(h1)
	contact.appendChild(p)
	riders.appendChild(riders_h)
	rider_inner.appendChild(rider_a)
	rider_inner.appendChild(rider_b)
	rider_inner.appendChild(rider_c)
	rider_inner.appendChild(r)
	riders.appendChild(rider_inner)

	transport.appendChild(transport_h)
	transport_inner.appendChild(transport_a)
	transport_inner.appendChild(transport_b)
	transport_inner.appendChild(transport_c)
	transport_inner.appendChild(t)
	transport.appendChild(transport_inner)

	bus.appendChild(bus_h)
	bus_inner.appendChild(bus_a)
	bus_inner.appendChild(bus_b)
	bus_inner.appendChild(bus_c)
	bus_inner.appendChild(b)
	bus.appendChild(bus_inner)

	contact.appendChild(riders)
	contact.appendChild(transport)
	contact.appendChild(bus)
}

