import axios from 'axios';

export function fetchPosts(offset) {
	return dispatch => {
		dispatch({ type: 'FETCH_POSTS_REQUEST' });
		return axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response) {
				if (response) {
					dispatch({
						type: 'FETCH_POSTS_SUCCESS',
						payload: response.data.slice(offset, offset + 10)
					});
				} else {
					dispatch({
						type: 'FETCH_POSTS_FAILURE',
						payload: 'None Found'
					});
				}
			})
			.catch(function(err) {
				dispatch({ type: 'FETCH_POSTS_FAILURE', payload: err });
			});
	};
}
