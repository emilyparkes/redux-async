import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.handeChange = this.handeChange.bind(this)
  }


  handleChange(e) {
    dispatch(newSubreddit(e.target.value))
  }

  return (
    <div>
    <input type='text' name='subreddit'
    onChange={this.handleChange} />

    <button type='submit'
      onClick={() => this.props.dispatch(fetchPosts())}
    >Fetch Posts</button>
    </div >
  )
}




export default connect()(LoadSubreddit)
