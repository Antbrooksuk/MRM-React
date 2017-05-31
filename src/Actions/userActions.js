import axios from "axios"

export function fetchUsers(){
	return function(dispatch){
		dispatch({ type: "FETCHING_USERS" })
		window.setTimeout(function(){
			axios.get("https://jsonplaceholder.typicode.com/users")
				.then((response) => {
					dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
				})
				.catch((err) => {
					dispatch({ type: "FETCH_USERS_REJECTED", payload: err })
				})
		}, 2000)
	}
}

export function fetchUser(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_USER" })
		window.setTimeout(function(){
			axios.get("https://jsonplaceholder.typicode.com/users/"+params.id)
				.then((response) => {
					dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data })
				})
				.catch((err) => {
					dispatch({ type: "FETCH_USER_REJECTED", payload: err })
				})
		}, 2000)
	}
}

export function fetchUserPosts(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_USER_POSTS" })
		window.setTimeout(function(){
			axios.get("https://jsonplaceholder.typicode.com/posts?userId="+params.id)
				.then((response) => {
					dispatch({ type: "FETCH_USER_POSTS_FULFILLED", payload: response.data })
				})
				.catch((err) => {
					dispatch({ type: "FETCH_USER_POSTS_REJECTED", payload: err })
				})
		}, 2000)
	}
}

export function clearUserPosts(params){
	return function(dispatch){
		dispatch({ type: "CLEAR_USER_POSTS_FULFILLED" })
	}
}