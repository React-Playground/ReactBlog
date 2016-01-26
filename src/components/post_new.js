import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index'
import {Link} from 'react-router';

class PostsNew extends Component {
  static contextTypes  = {
    router: React.PropTypes.object
  };
  //go get and find my router

  onSubmit(props){
    this.props.createPost(props)
    .then( () => {
      //blog post has been created navigate  to index
      //we navvigate by calling this.content,route,push with 
      //the new path:w
      //
      this.context.router.push('/');
      console.log(props);
    })
  }

  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    const {fields: {title, categories, content}} = this.props;
    // const handleSubmit = this.props.handleSubmit;
    // or all together
    // const {fields: {title, categories, content}, handleSubmit} = this.props;
    // console.log('title',title);

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error :  ''}
          </div>

        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error :  ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error :  ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter category';
  }

  if (!values.content) {
    errors.content = 'Enter some content'
  }

  return errors;
}

//connect:  first aargument is mapStateToProps, 2nd is mapDispatchtoProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd  is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
