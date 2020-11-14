import React, {useContext} from 'react';
import { ContextItem } from '../Functions/contextItem';
import {Context} from '../Functions/context';
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

export function Choices () {
	const {choices: { choice, changeChoices }} = useContext(ContextItem);
	const {openItem: { openItem }} = useContext(Context);

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