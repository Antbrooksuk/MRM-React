import axios from 'axios';

export function fetchPosts() {
	return dispatch => {
		dispatch({ type: 'FETCH_NOTES_REQUEST' });
		return axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response) {
				if (response) {
					dispatch({
						type: 'FETCH_NOTES_SUCCESS',
						payload: response
					});
				} else {
					dispatch({
						type: 'FETCH_NOTES_FAILURE',
						payload: 'None Found'
					});
				}
			})
			.catch(function(err) {
				dispatch({ type: 'FETCH_NOTES_FAILURE', payload: err });
			});
	};
}
