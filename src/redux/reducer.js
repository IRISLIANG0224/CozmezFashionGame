const INITIAL_STATE = {
	email: '',
	id: ''
}

export default (state = INITIAL_STATE, action={}) => {
	switch(action.type) {
		case "SET_DATA":
			return {
				...state,
				...action.content
			};
			case "LOGOUT":
				return {
				};
		default:
			return state;
	}
};