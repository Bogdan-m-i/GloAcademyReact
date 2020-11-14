import React, {useContext} from 'react';
import styled from 'styled-components';
import { ListItem } from './listItem';
import { Banner } from './Banner';
import loadGif from '../../image/loading.gif';
import { Context } from '../Functions/context';
/////
//import { useFetch } from '../Hooks/useFetch';
//import dbMenu from '../DBMenu';
import { useDB } from '../Hooks/useDB';
////

const MenuStyled = styled.main`
	background-color: papayawhip;
	margin-top: 80px;
	margin-left: 420px;
`;

const SectionMenu = styled.section`
	padding: 40px;
`;

const SectionLoading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		margin: 30px;
		font-size: 30px;
	}

	img {
		max-width: 100%;
	}
`;

export const Menu = () => {
	const { openItem: { setOpenItem } } = useContext(Context);
	const {firebaseDatabase} = useContext(Context);

	////////////////Загрузка данных из файла/////////////////////////
	// const res = useFetch();
	// const dbMenu = res.response;
	/////////////////////////////////////////////////////////////////

	////////////////Загрузка данных с сервера firebase///////////////
	let firebaseRes = firebaseDatabase().ref(`goods`).once('value');
	const res = useDB(firebaseRes);
	const dbMenu = res.response;
	/////////////////////////////////////////////////////////////////

	return (
		<MenuStyled>
			<Banner/>
			{res.response ? 
				<>
					<SectionMenu>
						<h2>Фруктовые наборы</h2>
						<ListItem 
							itemList={dbMenu.fruitSet} 
						/>
					</SectionMenu>
			
					<SectionMenu>
						<h2>Смузи</h2>
						<ListItem 
							itemList={dbMenu.smoothies}
						/>
					</SectionMenu>
				</>
				: res.error ?
					<div>Ошибка загрузки</div>
				:
					<SectionLoading>
						<div>Загрузка</div>
						<div><img src={loadGif} alt="Загрузка..."/></div>
					</SectionLoading>
			}
		</MenuStyled>
	);
};