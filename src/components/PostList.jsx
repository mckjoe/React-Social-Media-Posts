import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList (props) {
  return (
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(id) {
        var post = props.postList[id];
        return <Post name={post.name}
          mood={post.mood}
          postText={post.postText}
          formattedTimeOpen={ticket.formattedTimeOpen}
          key={id}
          id={id}
        />;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object
};

export default PostList;
