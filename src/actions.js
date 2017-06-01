import axios from "axios"

export function fetchUsers(){
	return function(dispatch){
		dispatch({ type: "FETCHING_USERS" })
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: "FETCH_USERS_REJECTED", payload: err })
			})
	}
}

export function fetchUser(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_USER" })
		axios.get("https://jsonplaceholder.typicode.com/users/"+params.id)
			.then((response) => {
				dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: "FETCH_USER_REJECTED", payload: err })
			})
	}
}

export function fetchUserPosts(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_USER_POSTS" })
		axios.get("https://jsonplaceholder.typicode.com/posts?userId="+params.id)
			.then((response) => {
				dispatch({ type: "FETCH_USER_POSTS_FULFILLED", payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: "FETCH_USER_POSTS_REJECTED", payload: err })
			})
	}
}

export function clearUserPosts(params){
	return function(dispatch){
		dispatch({ type: "CLEAR_USER_POSTS_FULFILLED" })
	}
}