import React from 'react';
const btnstyle = {
  marginRight: "250px",
  marginLeft: "250px",
  marginBottom: "10px",
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 40,
  width: 200,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}

const disablestyle = {
  marginRight: "250px",
  marginLeft: "250px",
  marginBottom: "10px",
  height: 40,
  width: 200,
  backgroundColor: "grey",
  "color": "white",
  borderRadius: 3,
  border: 0,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}

const responsiveHeader = (history,match) => {
  return (
    <div>
      <button style={match.params.cPath === "home" ? disablestyle:btnstyle} disable={match.params.cPath === "home"} onClick={() => {history.push(`/home`)}}>Home</button>
      <button style={match.params.cPath === "all" ? disablestyle:btnstyle} disable={match.params.cPath === "all"} onClick={() => history.push(`/all`)}>AllBooks</button>
    </div>
  )
}



class Header extends React.Component {
  componentDidMount(){
    this.props.loginAsAnnonymous();
  }
  render(){
    return responsiveHeader(this.props.history, this.props.match);
  }
}


export default Header
