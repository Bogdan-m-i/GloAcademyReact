import styled from 'styled-components';

export const Button = styled.button`
	font-family: inherit;
	font-size: 0.8rem;
	color: #0F570F;
	border: 1px solid #0F570F;
	border-radius: 6px 34px 0px 30px;
	padding: 7px 16px;
	background-color: transparent;

	&:hover {
		background-color: #40AB4030;
	}
	&:active, &:focus {
		outline: none;
	}
	&:disabled {
		background-color: #FADBD8;
		cursor: not-allowed;
	}
`;