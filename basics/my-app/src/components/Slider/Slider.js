import React from 'react';
import SliderItem from './SliderItem';

const Slider = () => (
	<div className="features-slider">
		<div className="features-slider_items">
			<SliderItem imgUrl='./images/1.svg' text='Первое целевое приемущество' />
			<SliderItem imgUrl='./images/2.svg' text='Второе целевое приемущество' />
			<SliderItem imgUrl='./images/3.svg' text='Третье целевое приемущество' />
			<SliderItem imgUrl='./images/4.svg' text='Четвертое целевое приемущество' />
		</div>
		<button className="features-slider-arrow features-slider-prev">
			<svg width="9" height="16"
				xmlns="http://www.w3.org/2000/svg">
				<path
					// eslint-disable-next-line max-len
					d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
				</path>
			</svg>
		</button>
		<button className="features-slider-arrow features-slider-next">
			<svg width="9"
				height="16" xmlns="http://www.w3.org/2000/svg">
				<path
					// eslint-disable-next-line max-len
					d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
				</path>
			</svg>
		</button>
	</div>
);

export default Slider;