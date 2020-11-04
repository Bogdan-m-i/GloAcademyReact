import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ToppingLabel = styled.label`
	cursor: pointer;
	width: 50%;
`;

const ToppingCheckbox = styled.input`
	cursor: pointer;
`;

export function Topings({ toppings, checkToppings }) {

	return (
		<>
			<h3>Добавки</h3>
			<ToppingWrap>
				{toppings.map((item, i) => (
					<ToppingLabel key={i}>
						<ToppingCheckbox 
							type='checkbox'
							checked={item.checked}
							onChange={() => checkToppings(i)}/>
						{item.name}
					</ToppingLabel>
				))}
			</ToppingWrap>
		</>
	)
}