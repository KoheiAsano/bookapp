



const onebook = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ONE_BOOK':
      return action.oneBook
    default:
      return state
  }
}

export default onebook
