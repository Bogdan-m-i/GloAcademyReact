// choices: ['300 мл.', '500 мл.', '700 мл.'],
// toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],

const dbMenu = {
	burger: [
		{
			name: 'Отпуск рядом',
			img: '/img/menu/nab-1.jpg',
			id: 1,
			price: 500,
			toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],
			composition: ['Манго Cat Chu', 'Маракуйя', 'Драконфрукт белый', 'Черемойя '],
		},
		{
			name: 'Чемодан во фрутнам',
			img: '/img/menu/nab-2.jpg',
			id: 2,
			price: 900,
			toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],
			composition: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Драконфрукт красный', 'Кокос', 'Гуава'],
		},
		{
			name: 'Коренной фрутнамец',
			img: '/img/menu/nab-3.jpg',
			id: 3,
			price: 1300,
			toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],
			composition: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава'],
		},
		{
			name: 'Корзина Малая',
			img: '/img/menu/kor-3.jpg',
			id: 4,
			price: 2000,
			toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],
			composition: ['Манго', 'Драконфрукт белый', 'Маракуйя', 'Лонган'],
		},
		{
			name: 'Корзина средняя',
			img: '/img/menu/kor-1.jpg',
			id: 5,
			price: 2800,
			toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],
			composition: ['Манго', 'Рамбутан', 'Драконфрукт белый', 'Маракуйя', 'Лонган', 'Кокос', 'Черимойя', 'Драконфрукт красный', 'Гуава'],
		},
		{
			name: 'Корзина большая',
			img: '/img/menu/kor-2.jpg',
			id: 6,
			price: 3500,
			toppings: ['Манго', 'Маракуйя', 'Драконфрукт белый', 'Арбуз', 'Кокос', 'Драконфрукт красный', 'Гуава', 'Черимойя', 'Лонган', 'Рамбутан'],
			composition: ['Манго', 'Рамбутан', 'Драконфрукт белый', 'Маракуйя', 'Лонган', 'Кокос', 'Черимойя', 'Драконфрукт красный', 'Арбуз/Дыня/Папайя'],
		},
	],
	other: [
		{
			name: 'Смузи ягодный',
			img: '/img/menu/s-1.jpg',
			id: 1,
			price: 180,
			choices: ['300 мл.', '500 мл.', '700 мл.'],
			composition: ['Черника', 'Малина', 'Бананы', 'Молоко', 'Натуральный обезжиренный йогурт', 'Лед'],
		},
		{
			name: 'Смузи из сухофруктов',
			img: '/img/menu/s-2.jpg',
			id: 2,
			price: 150,
			choices: ['300 мл.', '500 мл.', '700 мл.'],
			composition: ['Курага', 'Темный изюм', 'Мед', 'Овсяные хлопья', 'Миндальное молоко'],
		},
		{
			name: 'Ананасовый смузи',
			img: '/img/menu/s-3.jpg',
			id: 3,
			price: 190,
			choices: ['300 мл.', '500 мл.', '700 мл.'],
			composition: ['Апельсиновый сок', 'Ананасовый сок', 'Ананас', 'Овсяные хлопья', 'Бананы'],
		},
		{
			name: 'Бананово-овсяный смузи',
			img: '/img/menu/s-4.jpg',
			id: 4,
			price: 140,
			choices: ['300 мл.', '500 мл.', '700 мл.'],
			composition: ['Бананы', 'Овсяные хлопья быстрого приготовления', 'Натуральный йогурт', 'Миндаль', 'Мед'],
		},
		{
			name: 'Зеленый смузи со шпинатом и ананасом',
			img: '/img/menu/s-5.jpg',
			id: 5,
			price: 160,
			choices: ['300 мл.', '500 мл.', '700 мл.'],
			composition: ['Яблоки «голден»', 'Шпинат', 'Стебель сельдерея', 'Огурцы', 'Лайм', 'Ананас', 'Авокадо', 'Лед'],
		},
		{
			name: 'Оранжевый смузи с бананами',
			img: '/img/menu/s-6.jpg',
			id: 6,
			price: 170,
			choices: ['300 мл.', '500 мл.', '700 мл.'],
			composition: ['Морковь', 'Зеленые яблоки', 'Имбирь', 'Бананы', 'Свежая мята', 'Апельсины'],
		},
	]
};

export default dbMenu;
