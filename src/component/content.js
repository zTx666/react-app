import React, { Component } from 'react';
import UserShow from "./user";

/* 主内容 */
function AppContLeft(props){
    return (
      <div className="app-cont-left fex-column fex-c fex-items-c xl3 ">
        <UserShow data={props.userData} />
      </div>
    );
  }
function AppContRight(){
    return (
        <div className="app-cont-right fex-column fex-l xl9 ">
        11321
        </div>
    );
}


class AppCont extends Component{
    render() {
    return(
        <div className="app-cont fex-l layout fex-nowarp " >
            <AppContLeft userData = {this.props.data.userData} option={this.props.data.option}/>
            <AppContRight />
        </div>
    )};
}
export default AppCont;