import React, { Component } from 'react';
import AppHeader from './header';
import AppCont from './content';
/**
 * App 组件化 
 * App整合页面
 */
class App extends Component{
  constructor(props){
    super()
    this.state={
      header_data:{
        time:123,
        page_list:[]
      },
      cont_data:{
        userData:null
      }
    }
  }
  componentDidMount() {
   this.setState({
      header_data:{
        time:new Date(),
        page_list:['NEWS','LIST','SPORT','GAME','NEWS']
      },
      cont_data:{
        userData:{
          id:1,
          user_level:6,
          user_img:'',
          user_name:'MengMianXiaiii',
          user_friend:1,
          follow_user:1,
          user_identity:"Big BOSS"
        }
      }
    });
  }
  render() {
    return (
      <div className="app-Box fex-column fex-l xm10 xl12">
      <AppHeader data={this.state.header_data}/>
      <AppCont data={this.state.cont_data}/>
    </div>
    );
  }
}
export default App;
