export default (state, action) => {
	switch (action.type) {
		case 'RECEIVE_GOODS':
			return { goods: action.payload };
		case 'DELETE_GOODS':
			return { goods: action.payload };
		case 'ADD_GOODS':
			return { goods: action.payload };
		default:
			return state;
	}
};
