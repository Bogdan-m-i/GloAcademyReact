import React, {useContext} from 'react';
import { Context } from '../Functions/context';
import { ContextItem } from '../Functions/contextItem';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Topings } from './Topings';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Choices } from './Choices';
import {Overlay} from '../Style/Overlay';

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

export const ModalItem = () => {

	const { orders: { orders, setOrders } } = useContext(Context);
	const {openItem: { openItem, setOpenItem }} = useContext(Context);

	const counter = useCount(openItem);
	const toppings = useToppings(openItem);
	const choices = useChoices(openItem);
	const isEdit = openItem.index > -1;

	const closeModal = (e) => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	const order = {
		...openItem,
		count: counter.count,
		topping: toppings.toppings,
		choice: choices.choice,
	};

	const editOrder = () => {
		const newOrders = [...orders];
		newOrders[openItem.index] = order;
		setOrders(newOrders);
		setOpenItem(null);
	}

	const addToOrder = () => {
		setOrders([...orders, order]);
		setOpenItem(null);
	}

	return (
		<ContextItem.Provider value={{
			toppings,
			choices,
			counter,
		}}>
			<Overlay id="overlay" onClick={closeModal}>
				<Modal>
					<Banner img={openItem.img}/>
					<ModalContent>
						<ModalHeader>
							<h2>{openItem.name}</h2>
							<p>{formatCurrency(openItem.price)}</p>
						</ModalHeader>
						<CountItem/>
						{openItem.toppings && <Topings/>}
						{openItem.choices && <Choices/>}
						<TotalPriceItem>
							<span>Цена:</span>
							<span>{formatCurrency(totalPriceItems(order))}</span>
						</TotalPriceItem>
						<ModalFooter>
							<Button 
								onClick={isEdit ? editOrder : addToOrder}
								disabled={order.choices && !order.choice}
								>{isEdit ? `Изменить` : `Добавить`}</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Overlay>
		</ContextItem.Provider>
	);
}