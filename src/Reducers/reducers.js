export function users (state = {
	error: null,
	fetching: false,
	users: {}
}, action){
	switch(action.type) {
		case "FETCHING_USERS": {
			return { ...state, fetching: true, users: {} }
		}
		case "FETCH_USERS_FULFILLED": {
			return { ...state, fetching: false, users: action.payload }
		}
		case "FETCH_USERS_REJECTED": {
			return { ...state, fetching: false, error: action.payload }
		}
		default: return state
	}
}

export function user (state = {
	error: null,
	fetching: false,
	user: {}
}, action){
	switch(action.type) {
		case "FETCHING_USER": {
			return { ...state, fetching: true, user: {} }
		}
		case "FETCH_USER_FULFILLED": {
			return { ...state, fetching: false, user: action.payload }
		}
		case "FETCH_USER_REJECTED": {
			return { ...state, fetching: false, error: action.payload }
		}
		default: return state
	}
}

export function posts (state = {
	error: null,
	fetching: false,
	posts: []
}, action){
	switch(action.type) {
		case "FETCHING_USER_POSTS": {
			return { ...state, fetching: true, posts: [] }
		}
		case "FETCH_USER_POSTS_FULFILLED": {
			return { ...state, fetching: false, posts: action.payload }
		}
		case "FETCH_USER_POSTS_REJECTED": {
			return { ...state, fetching: false, error: action.payload }
		}
		case "CLEAR_USER_POSTS_FULFILLED": {
			return { ...state, posts: [] }
		}
		default: return state
	}
}

export function article (state = {
	error: null,
	fetching: false,
	article: []
}, action){
	switch(action.type) {
		case "FETCHING_ARTICLE": {
			return { ...state, fetching: true, article: [] }
		}
		case "FETCH_ARTICLE_FULFILLED": {
			return { ...state, fetching: false, article: action.payload }
		}
		case "FETCH_ARTICLE_REJECTED": {
			return { ...state, fetching: false, error: action.payload }
		}
		default: return state
	}
}