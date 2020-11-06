import { useState } from 'react';

export function useCount(openItem) {
	const x = openItem.count || 1;

	const [count, setCount] = useState(x);

	const onChange = e => setCount(Number(e.target.value));

	return { count, setCount, onChange }
}