import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';

const List = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Item = styled.li`
	position: relative;
	width: 400px;
	height: 155px;
	background-image: ${({img}) => `url(${img})`};
	background-position: center;
	background-size: cover;
	margin: 30px;
	padding: 15px;
	font-size: 30px;
	color: white;
	z-index: 1;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: black;
		opacity: 40%;
		z-index: -1;
	}
	&:hover {
		&:after {
			opacity: 10%;
		}
		font-size: 22px;
		.price {
			font-size: 14px;
		}
	}
`;

const Price = styled.p`
	font-size: 20px;
`;

export const ListItem = ({ itemList, setOpenItem }) => (
	<List>
		{itemList.map(item => (
			<Item 
				key={item.id} 
				img={item.img}
				onClick={() => {setOpenItem(item)}}
			>
				<p>{item.name}</p>
				<Price className='price'>{formatCurrency(item.price)}</Price>
			</Item>
		))}
	</List>
);