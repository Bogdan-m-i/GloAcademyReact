import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './listItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
	background-color: papayawhip;
	margin-top: 80px;
	margin-left: 380px;
`;

const SectionMenu = styled.section`
	padding: 40px;
`;

export const Menu = ({ setOpenItem }) => (
	<MenuStyled>
		<Banner/>
		<SectionMenu>
			<h2>Фруктовые наборы</h2>
			<ListItem 
				itemList={dbMenu.burger} 
				setOpenItem={setOpenItem}
			/>
		</SectionMenu>

		<SectionMenu>
			<h2>Смузи</h2>
			<ListItem 
				itemList={dbMenu.other}
				setOpenItem={setOpenItem}
			/>
		</SectionMenu>
	</MenuStyled>
);