import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/posts_index'
import PostsNew from './components/post_new'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
);


/*
 * Example of nested routes
const Greeting = () => {
  return <div>Hey Theree</div>;
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route  path="greet" component={Greeting} />
    <Route  path="greet2" component={Greeting} />
    <Route  path="greet3" component={Greeting} />
  </Route>
);
*/
