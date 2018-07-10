import React from 'react';
import Header from './Header';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import { v4 } from 'uuid';
import PostList from './PostList';
import PostForm from './PostForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    this.postTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedTime(),
      60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.postTimeUpdateTimer);
  }

//   updatePostElapsedTime() {
//   console.log('check');
//   let newMasterPostList = this.state.masterPostList.slice();
//   newMasterPostList.forEach((ticket) =>
//     post.formattedPostTime = (post.timeOpen).fromNow(true)
//   );
//   this.setState({masterPostList: newMasterPostList});
// }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.props.masterPostList}/>} />
          <Route path='/newpost' render={()=><PostForm />}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));
