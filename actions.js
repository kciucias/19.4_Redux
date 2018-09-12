import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT',
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text
    }
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: votes +1
    }
}

export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: votes -1
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUp = id => dispatch(thumbUp(id));
const boundThumbDown = id => dispatch(thumbDown(id));