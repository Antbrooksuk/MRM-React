export function posts(
	state = {
		errored: false,
		fetched: false,
		posts: {}
	},
	action
) {
	switch (action.type) {
		case 'FETCH_NOTES_REQUEST': {
			return { ...state, posts: {}, fetched: false };
		}
		case 'FETCH_NOTES_SUCCESS': {
			return { ...state, posts: action.payload, fetched: true };
		}
		case 'FETCH_NOTES_FAILURE': {
			return {
				...state,
				posts: {},
				errored: action.payload,
				fetched: true
			};
		}
		default:
			return state;
	}
}
