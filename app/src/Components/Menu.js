import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './listItem';

const MenuStyled = styled.main`
	background-color: papayawhip;
	margin-top: 80px;
`;

const SectionMenu = styled.section`
	padding: 40px;
`;

const Banner = styled.div`
	width: 100%;
	height: 300px;
	background-image: url(./img/banner.jpg);
	background-position: center;
	background-size: cover;
`;

export const Menu = () => (
	<MenuStyled>
		<Banner/>
		<SectionMenu>
			<h2>Фруктовые наборы</h2>
			<ListItem itemList={dbMenu.burger}/>
		</SectionMenu>

		<SectionMenu>
			<h2>Смузи</h2>
			<ListItem itemList={dbMenu.other}/>
		</SectionMenu>
	</MenuStyled>
);