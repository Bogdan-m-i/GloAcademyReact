import React from 'react';
import styled from 'styled-components';
import Trash from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
	margin: 15px 0;
`;

const ItemName = styled.span`
	flex-grow: 1;
`;

const ItemPrice = styled.span`
	margin: 0 15px 0 30px;
	min-width: 85px;
`;

const TrashButton = styled.button`
	width: 24px;
	height: 24px;
	border-color: transparent;
	background-image: url(${Trash});
	background-color: transparent;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
`;

const Product = styled.div`
	display: flex;
`;

const Toppings = styled.div`
	color: gray;
	font-size: 14px;
	margin-left: 5px;
`;

export const OrderListItem = ({ order, removeOrderItem }) => (
	<OrderItemStyled>
		<Product>
			<ItemName>{order.name} {order.choice}</ItemName>
			<span>{order.count}шт.</span>
			<ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
			<TrashButton onClick={() => {removeOrderItem(order)}}/>
		</Product>
			{order.topping
				.filter(item => item.checked)
				.map((item, key) => (
					<Toppings key={key}>
						+ {item.name}
					</Toppings>
				))}
	</OrderItemStyled>
);