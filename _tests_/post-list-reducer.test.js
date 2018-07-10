import postListReducer from './../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    name: 'Joseph',
    mood: 'excited',
    postText: 'React is grrrrrreeeaaaaat!',
    timeOpen: 1500000000000,
    id: 0
  }

  test('Should return defualt state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({})
  })

  test('Should successfully add new post data to masterPostList', () => {
    const { name, mood, postText, timeOpen, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      name: name,
      mood: mood,
      postText: postText,
      timeOpen: timeOpen,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        mood: mood,
        postText: postText,
        timeOpen: timeOpen,
        id: id
      }
    });
  });

});
