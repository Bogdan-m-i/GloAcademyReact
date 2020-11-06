import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ChoiceLabel = styled.label`
	cursor: pointer;
	width: 50%;
`;

const ChoiceRadio = styled.input`
	cursor: pointer;
`;

export function Choices ({ openItem, choice, changeChoices }) {
	return (
		<>
			<h3>Выберите объем:</h3>
			<ChoiceWrap>
				{openItem.choices.map((item, i) => (
					<ChoiceLabel key={i}>
						<ChoiceRadio 
							type='radio'
							name='choices'
							checked={choice === item}
							value={item}
							onChange={changeChoices}/>
						{item}
					</ChoiceLabel>
				))}
			</ChoiceWrap>
		</>
	)
}