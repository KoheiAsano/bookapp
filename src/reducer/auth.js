const auth = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_ANNONYMOUS':
      return action.uid
    default:
      return state
  }
}

export default auth
