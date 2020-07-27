import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducer/AppReducer';
import axios from 'axios';
const initialState = {
	goods: []
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	function getGoods() {
		const tes = axios
			.get('/goods')
			.then((response) => {
				dispatch({ type: 'RECEIVE_GOODS', payload: response.data.data });
			})
			.catch((error) => {
				throw error;
			});
	}

	function removeGoods(id) {
		const tes = axios
			.delete(`/goods/delete/${id}`)
			.then((response) => {
				if (response.status == 200) {
					axios.get('/goods').then((response) => {
						dispatch({ type: 'DELETE_GOODS', payload: response.data.data });
					});
				}
			})
			.catch((error) => {
				throw error;
			});
	}

	function addGoods(body) {
		const tes = axios
			.post('/goods/add', body)
			.then((response) => {
				if (response.status == 200) {
					console.log('masuk');
					axios.get('/goods').then((response) => {
						dispatch({ type: 'ADD_GOODS', payload: response.data.data });
					});
				}
			})
			.catch((error) => {
				throw error;
			});
	}

	// function editEmployee(employees) {
	// 	dispatch({
	// 		type: 'EDIT_EMPLOYEE',
	// 		payload: employees
	// 	});
	// }

	return (
		<GlobalContext.Provider
			value={{
				goods: state.goods,
				getGoods,
				removeGoods,
				addGoods
				// editEmployee
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
