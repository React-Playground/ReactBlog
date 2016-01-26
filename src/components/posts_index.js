import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id} >
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
        </li>
      )
    })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        <h3>Post</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }
// you can just pass {fetch} object straigt into the connect function

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);
