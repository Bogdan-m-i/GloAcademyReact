import React, {useContext} from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import {OrderTitle} from '../Style/OrderTitle';
import { TotalPrice } from '../Style/TotalPrice';

const OrderStyled = styled.section`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 80px;
	left: 0;
	background-color: #fff;
	width: 420px;
	height: calc(100% - 80px);
	box-shadow: 1px 4px 20px rgba(0, 0, 0, .25);
	padding: 30px;
	z-index: 10;
`;

const OrderContent = styled.div`
	flex-grow: 1;
`;

const OrderList = styled.ul`
	
`;

const OrderFooter = styled.div`
text-align: center;
`;

const EmptyList = styled.p`
	text-align: center;
`;

export const Order = () => {

	const { orders: { orders, setOrders } } = useContext(Context);
	const {auth: { authentication, logIn }} = useContext(Context);
	const {orderConfirm: { setOpenOrderConfirm }} = useContext(Context);

	const total = orders.reduce((result, order)=>
		totalPriceItems(order) + result, 0);

	const totalCounter = orders.reduce((result, order)=>
		order.count + result, 0);

	const removeOrderItem = (i) => {
		orders.splice(i, 1);
		setOrders([...orders]);
	}

	return (
		<OrderStyled>
			<OrderTitle>Ваша вкусная корзина</OrderTitle>
			<OrderContent>
				{orders.length ? 
				<OrderList>
					{orders.map((order, key) => <OrderListItem
												removeOrderItem={removeOrderItem}
												key={key}
												order={order}
												index={key}/>)}
				</OrderList> :
				<EmptyList>
					Список заказов пуст
				</EmptyList>}
			</OrderContent>
			<OrderFooter>
				<TotalPrice>
					<span>Итого</span>
					<span>{totalCounter} шт.</span>
					<span>{formatCurrency(total)}</span>
				</TotalPrice>
				<Button onClick={() => authentication ? setOpenOrderConfirm(true) : logIn()}>Оформить</Button>
			</OrderFooter>
		</OrderStyled>
	)
}