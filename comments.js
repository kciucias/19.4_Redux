import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

const initialState = {
	comments: [],
	users: []
};


function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state.comments];
		case REMOVE_COMMENT:
            return 
            	comments: state.comments.filter(comment => comment.id !== action.id)
        case EDIT_COMMENT:
        	return 
        		comments: state.comments.map(comment => (comment.id === action.id ? {...comment, text: action.text} : comment))
   		case THUMB_UP_COMMENT:
        	return 
        		comments: state.comments.map(comment => (comment.id === action.id ? {...comment, votes: action.votes} : comment))
        case THUMB_DOWN_COMMENT:
        	return 
        		comments: state.comments.map(comment => (comment.id === action.id ? {...comment, votes: action.votes} : comment))
		default:
			return state;
	}
}

/*Filter receives the same arguments as map, and works very similarly. The only difference is that the callback needs to return either true or false. If it returns true then the array keeps that element and if it returns false the element is filtered out.*/