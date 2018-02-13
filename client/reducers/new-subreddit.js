import {NEW_SUBREDDIT} from '../actions'

function newSubreddit (state = '', action) {
  switch (action.type) {
    case NEW_SUBREDDIT:
      return action.newSubreddit

    default:
      return state
  }
}

export default newSubreddit