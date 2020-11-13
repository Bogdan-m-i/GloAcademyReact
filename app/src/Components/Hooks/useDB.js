import { useEffect, useState } from 'react';

export const useDB = (prom) => {

	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const json = await fetch('DB.json');
	// 			const res = await json.json();
	// 			setRes(res);
	// 		} catch(err) {
	// 			setErr(err);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	useEffect(() => {
		prom.then(snapshot => {
			const response = snapshot.val();
			setResponse(response);
		})
	}, []);

	return { response, error };

}