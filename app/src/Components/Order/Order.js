import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 80px;
	left: 0;
	background-color: #fff;
	min-width: 380px;
	height: calc(100% - 80px);
	box-shadow: 1px 4px 20px rgba(0, 0, 0, .25);
	padding: 30px;
	z-index: 10;
`;

const OrderTitle = styled.h2`
	text-align: center;
	margin-bottom: 30px;
`;

const OrderContent = styled.div`
	flex-grow: 1;
`;

const OrderList = styled.ul`
	
`;

const OrderTotal = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: left;
	margin: 0 30px 30px;
`;

const OrderFooter = styled.div`
text-align: center;
`;

const EmptyList = styled.p`
	text-align: center;
`;

export const Order = ({ orders }) => {

	const total = orders.reduce((result, order)=>
		totalPriceItems(order) + result, 0);

	const totalCounter = orders.reduce((result, order)=>
		order.count + result, 0);

	return (
		<OrderStyled>
			<OrderTitle>Ваша вкусная корзина</OrderTitle>
			<OrderContent>
				{orders.length ? 
				<OrderList>
					{orders.map(order => <OrderListItem order={order}/>)}
				</OrderList> :
				<EmptyList>
					Список заказов пуст
				</EmptyList>}
			</OrderContent>
			<OrderFooter>
				<OrderTotal>
					<span>Итого</span>
					<span>{totalCounter} шт.</span>
					<span>{formatCurrency(total)}</span>
				</OrderTotal>
				<Button>Оформить</Button>
			</OrderFooter>
		</OrderStyled>
	)
}