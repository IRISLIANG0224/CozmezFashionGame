const setData = (content) => {
	return {
		type: "SET_DATA",
		content
	}
}

const appendData = (obj) => {
	return (dispatch) => {
		dispatch(setData(obj));
	}
}

const logout=()=>{
  localStorage.removeItem('email')
  localStorage.removeItem('id')
  return ("LOGOUT");
}

export {
	appendData,
	logout
}