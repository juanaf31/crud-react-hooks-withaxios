export default (state, action) => {
	switch (action.type) {
		case 'RECEIVE_GOODS':
			return { goods: action.payload, agoods: '' };
		case 'RECEIVE_AGOODS':
			return { ...state, agoods: action.payload };
		case 'DELETE_GOODS':
			return { goods: action.payload, agoods: '' };
		case 'ADD_GOODS':
			return { goods: action.payload, agoods: '' };
		case 'UPDATE_GOODS':
			return { goods: action.payload, agoods: '' };
		default:
			return state;
	}
};
