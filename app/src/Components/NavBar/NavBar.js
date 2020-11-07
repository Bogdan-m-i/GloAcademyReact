import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import { Button } from '../Style/Button';

const NavBarStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	height: 80px;
	width: 100%;
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

export const NavBar = ({ authentication, logIn, logOut }) => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt='logo'/>
			<H1>JuiceFruit</H1>
		</Logo>
		{authentication ?
		<Button onClick={logOut}>{authentication.displayName} <br/> Выйти</Button>
		:
		<Button onClick={logIn}>Войти</Button>}
	</NavBarStyled>
);