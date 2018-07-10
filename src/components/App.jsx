import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import { v4 } from 'uuid';
import PostList from './PostList';
import PostForm from './PostForm';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList />} />
          <Route path='/newpost' render={()=><PostForm />}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
