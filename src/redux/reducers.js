export function posts (state = {
	error: {},
	posts: {},
	fetching: false
}, action){
	switch(action.type) {
		case "FETCH_NOTES_REQUEST": {
			return { ...state, posts: {}, fetching: true }
		}
		case "FETCH_NOTES_SUCCESS": {
			return { ...state, posts: action.payload, fetching: false }
		}
		case "FETCH_NOTES_FAILURE": {
			return { ...state, posts: {}, error: action.payload, fetching: false }
		}
		default: return state
	}
}