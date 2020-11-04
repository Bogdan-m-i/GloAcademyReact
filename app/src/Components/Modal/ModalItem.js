import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Topings } from './Topings';
import { useToppings } from '../Hooks/useToppings';

const Overlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	z-index: 20;
`;

const Modal = styled.div`
	background-color: #fff;
	width: 600px;
	margin-top: 100px;
`;

const Banner = styled.div`
	height: 200px;
	width: 100%;
	background-image: url(${({img}) => img});
	background-size: cover;
	background-position: center;
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 400px;
	padding: 30px 40px;
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-weight: 600;
	}
`;

const ModalFooter = styled.div`
	text-align: center;
`;

const TotalPriceItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

	const counter = useCount();

	const toppings = useToppings(openItem);

	const closeModal = (e) => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	const order = {
		...openItem,
		count: counter.count,
		topping: toppings.toppings,
	};

	const addToOrder = () => {
		setOrders([...orders, order]);
		setOpenItem(null);
	}

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img}/>
				<ModalContent>
					<ModalHeader>
						<h2>{openItem.name}</h2>
						<p>{formatCurrency(openItem.price)}</p>
					</ModalHeader>
					<CountItem {...counter}/>
					{openItem.toppings && <Topings {...toppings}/>}
					<TotalPriceItem>
						<span>Цена:</span>
						<span>{formatCurrency(totalPriceItems(order))}</span>
					</TotalPriceItem>
					<ModalFooter>
						<Button onClick={addToOrder}>Добавить</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Overlay>
	);
}