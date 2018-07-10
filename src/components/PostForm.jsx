import React from 'react';
import Moment from 'moment';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function PostForm(props) {
  let _name = null;
  let _mood = null;
  let _postText = null;

  function handleNewPost(e) {
    const { dispatch } = props;
    e.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      name: _name.value,
      mood: _mood.value,
      postText: _postText.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    _name.value = '';
    _mood.value = '';
    _postText.value = '';
  }

  return (
    <div>
      <style jsx>{`
        button {
          border-bottom: 1px solid gray;
        }
      `}</style>
      <div>
        <form onSubmit={handleNewPost}>
          <input type="text" id="name" placeholder="Name Please" ref={(input) => {_name = input;}}/>
          <br />
          <br />
          <input type="text" id="mood" placeholder="Current Mood" ref={(input) => {_mood = input;}}/>
          <br />
          <br />
          <textarea type="textarea" id="postText" placeholder="Post Please" ref={(textarea) => {_postText = textarea;}}/>
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default connect()(PostForm);
