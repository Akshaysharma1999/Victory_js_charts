import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'
import HorSideBar from './HorSideBar'

class FixedMenuLayout extends React.Component{
  constructor()
  {
    super()
    this.state={visible:false}
  }

  onClick = (e,data)=>{
    this.setState({visible:!this.state.visible})
  }
  
  render(){
  return(<div>
    <Navbar onClick={this.onClick} />
    <HorSideBar visible={this.state.visible}/>
    <Main />
    <Footer />

  </div>)
  }
}

export default FixedMenuLayout