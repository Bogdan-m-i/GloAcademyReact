import React from 'react';
import styled from 'styled-components';
import Trash from '../../image/trash.svg';

const OrderItemStyled = styled.li`
	display: flex;
	margin: 15px 0;
`;

const ItemName = styled.span`
	flex-grow: 1;
`;

const ItemPrice = styled.span`
	margin: 0 15px 0 30px;
	min-width: 65px;
	text-align: right;
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

export const OrderListItem = ({ order }) => (
	<OrderItemStyled>
		<ItemName>{order.name}</ItemName>
		<span>2</span>
		<ItemPrice>{order.price.toLocaleString('ru-RU',
					{ style: 'currency', currency: 'RUB' })}</ItemPrice>
		<TrashButton/>
	</OrderItemStyled>
);