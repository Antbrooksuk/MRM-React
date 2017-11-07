export function posts(
	state = {
		errored: false,
		fetched: false,
		posts: {}
	},
	action
) {
	switch (action.type) {
		case 'FETCH_POSTS_REQUEST': {
			return { ...state, fetched: false };
		}
		case 'FETCH_POSTS_SUCCESS': {
			return { ...state, posts: action.payload, fetched: true };
		}
		case 'FETCH_POSTS_FAILURE': {
			return {
				posts: {},
				errored: action.payload,
				fetched: true
			};
		}
		default:
			return state;
	}
}
