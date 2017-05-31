export function users (state = {
	error: null,
	users: []
}, action){
	switch(action.type) {
		case "FETCH_USERS_FULFILLED": {
			return { ...state, users: action.payload }
		}
		case "FETCH_USERS_REJECTED": {
			return { ...state, error: action.payload }
		}
		// no default
	}
	return state
}

export function user (state = {
	error: null,
	user: []
}, action){
	switch(action.type) {
		case "FETCH_USER_FULFILLED": {
			return { ...state, user: action.payload }
		}
		case "FETCH_USER_REJECTED": {
			return { ...state, error: action.payload }
		}
		// no default
	}
	return state
}

export function posts (state = {
	error: null,
	posts: []
}, action){
	switch(action.type) {
		case "FETCH_USER_POSTS_FULFILLED": {
			return { ...state, posts: action.payload }
		}
		case "FETCH_USER_POSTS_REJECTED": {
			return { ...state, error: action.payload }
		}
		// no default
	}
	return state
}

export default users