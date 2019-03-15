const userFavorites = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER_FAVORITE_BOOK':
      return action.userFavorites
    default:
      return state
  }
}

export default userFavorites
