import React, { Component } from 'react';
import UserShow from "./user";
/* 主内容 */
function AppContLeft(props){
    return (
      <div className="app-cont-left fex-column fex-l layout ">
        <UserShow data={props.userData} />
      </div>
    );
  }
function AppContRight(){
    return (
        <div className="app-cont-right fex-column fex-l xl9">
        
        </div>
    );
}
class AppCont extends Component{
    render() {
    return(
        <div className="app-cont  fex-l layout " style={{fontSize:0}}>
            <AppContLeft userData = {this.props.data.userData} />
            <AppContRight/>
        </div>
    )};
}
export default AppCont;