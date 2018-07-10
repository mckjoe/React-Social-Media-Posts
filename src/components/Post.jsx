import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  console.log(props.timeOpen);
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.postText}</p>
      <h4><em>{props.mood}</em> | {props.formattedTimeOpen} </h4>
      <button>Upvote</button>
      <button>DownVote</button>
      <hr />
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
  formattedTimeOpen: PropTypes.string.isRequired,
};

export default Post;
