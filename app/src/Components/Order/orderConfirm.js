import React, {useContext} from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { Overlay } from '../Style/Overlay';
import { OrderTitle } from '../Style/OrderTitle';
import {TotalPrice} from '../Style/TotalPrice';
import { Button } from '../Style/Button';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';

const Modal = styled.div`
	background-color: white;
	width: 600px;
	padding: 30px;
`;

const Text = styled.h3`
	text-align: center;
	margin-bottom: 30px;
`;

const rulesData = {
	name: ['name'],
	price: ['price'],
	count: ['count'],
	topping: ['topping', (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
		(arr) => arr.length ? arr : 'no toppings'],
	choice: ['choice', (item) => item ? item : 'no choice'],
}

const sendOrder = (dataBase, orders, authentication) => {
	const newOrder = orders.map((projection(rulesData)))
	dataBase.ref('orders').push().set({
		clientName: authentication.displayName,
		email: authentication.email,
		order: newOrder,
	}).then(function() {
		console.log('Заказ успешно выполнен');
		document.querySelector('#success-msg').innerHTML = `Спасибо за заказ!`;
	})
	.catch(function(error) {
		console.log('Ошибка записи заказа');
	});
}

export const OrderConfirm = () => {
	const { orders: { orders, setOrders } } = useContext(Context);
	const {auth: { authentication }} = useContext(Context);
	const {orderConfirm: { setOpenOrderConfirm }} = useContext(Context);
	const {firebaseDatabase} = useContext(Context);

	const dataBase = firebaseDatabase();
	const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

	const closeModal = (e) => {
		if (e.target.id === 'overlay') {
			setOpenOrderConfirm(false)
		}
	}

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<OrderTitle>{authentication.displayName}</OrderTitle>
				{(orders.length > 0) ? <Text id="success-msg">Осталось только подтвердить ваш заказ</Text> : <Text>Для начала положите товар в корзину</Text>}
				<TotalPrice>
					<span>Итого</span>
					<span>{formatCurrency(total)}</span>
				</TotalPrice>
				{orders.length > 0 && <Button onClick={() => {
					sendOrder(dataBase, orders, authentication);
					setTimeout(() => {setOpenOrderConfirm(false); setOrders([]);}, 3000);
				}}>Оформить</Button>}
			</Modal>
		</Overlay>
	)
}