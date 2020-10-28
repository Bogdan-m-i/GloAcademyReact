import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import { Button } from './Button';

const NavBarStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	height: 80px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
	background-color: #FFD5EA;
	color: #0F570F;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
`;

const H1 = styled.h1`
	font-size: 24px;
	margin-left: 15px;
`;

const ImgLogo = styled.img`
	width: 50px;
`;

const Btn = styled.button`
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
`;

export const NavBar = () => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt='logo'/>
			<H1>JuiceFruit</H1>
		</Logo>
		<Button>Войти</Button>
	</NavBarStyled>
);