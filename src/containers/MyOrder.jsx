import React,{useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import logo from '@icons/flechita.svg';
import '@styles/MyOrder.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext);

	//reduce es una propiedad de JS para obtner la suma de todos sus elementos, recibe como parametro una funcion y el valor iniciar
	const sumTotal = () =>{
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={logo} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{/* Es importante el key del orderItem para evitar que se repitan id con producList  */}
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
