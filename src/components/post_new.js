import React, { Component } from 'react';
import {reduxForm} from 'redux-form';


class PostsNew extends Component {
  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    const {fields: {title, categories, content}} = this.props;
    // const handleSubmit = this.props.handleSubmit;
    // or all together
    // const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
