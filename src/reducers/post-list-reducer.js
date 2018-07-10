export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { name, mood, postText, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
        mood: mood,
        postText: postText,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
