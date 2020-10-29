import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { OrderListItem } from './OrderListItem';

export const Order = () => {

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
		text-align: left;
		margin: 0 30px 30px;

		& span:first-child {
			flex-grow: 1;
		}
	`;

	const OrderFooter = styled.div`
	text-align: center;
	`;

	return (
		<OrderStyled>
			<OrderTitle>Ваша вкусная корзина</OrderTitle>
			<OrderContent>
				<OrderList>
					<OrderListItem/>
				</OrderList>
			</OrderContent>
			<OrderFooter>
				<OrderTotal>
					<span>Итого</span>
					<span>5</span>
					<span>$</span>
				</OrderTotal>
				<Button>Оформить</Button>
			</OrderFooter>
		</OrderStyled>
	)
}