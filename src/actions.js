import axios from "axios"
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function fetchUsers(){
	return function(dispatch){
		dispatch({ type: "FETCHING_USERS" })
		dispatch(showLoading())
		window.setTimeout(function() {
			axios.get("https://jsonplaceholder.typicode.com/users")
				.then((response) => {
					dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
					dispatch(hideLoading())
				})
				.catch((err) => {
					dispatch({ type: "FETCH_USERS_REJECTED", payload: err })
					dispatch(hideLoading())
				})
		}, 1000)
	}
}

export function fetchUser(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_USER" })
		dispatch(showLoading())
		window.setTimeout(function(){
			axios.get("https://jsonplaceholder.typicode.com/users/"+params.id)
				.then((response) => {
					dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data })
					dispatch(hideLoading())
				})
				.catch((err) => {
					dispatch({ type: "FETCH_USER_REJECTED", payload: err })
					dispatch(hideLoading())
				})
		}, 1000)
	}
}

export function fetchUserPosts(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_USER_POSTS" })
		dispatch(showLoading())
		window.setTimeout(function(){
			axios.get("https://jsonplaceholder.typicode.com/posts?userId="+params.id)
				.then((response) => {
					dispatch({ type: "FETCH_USER_POSTS_FULFILLED", payload: response.data })
					dispatch(hideLoading())
				})
				.catch((err) => {
					dispatch({ type: "FETCH_USER_POSTS_REJECTED", payload: err })
					dispatch(hideLoading())
				})
		}, 1000)
	}
}

export function clearUserPosts(params){
	return function(dispatch){
		dispatch({ type: "CLEAR_USER_POSTS_FULFILLED" })
	}
}

export function fetchArticle(params){
	return function(dispatch){
		dispatch({ type: "FETCHING_ARTICLE" })
		dispatch(showLoading())
		window.setTimeout(function(){
			axios.get("/static/api/article.json?q="+params.id)
				.then((response) => {
					dispatch({ type: "FETCH_ARTICLE_FULFILLED", payload: response.data })
					dispatch(hideLoading())
				})
				.catch((err) => {
					dispatch({ type: "FETCH_ARTICLE_REJECTED", payload: err })
					dispatch(hideLoading())
				})
		}, 1000)
	}
}