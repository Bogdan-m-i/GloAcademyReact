import React from 'react';

const SliderItem = ({ imgUrl, text }) => (
	<div className="features-slider_item">
		<div className="features-img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
		<div className="features-feature">{ text }</div>
	</div>
);

export default SliderItem;