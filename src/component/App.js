import React, { Component } from 'react';
import AppHeader from './header';
import AppCont from './content';
import AppFoot from './foot';
import { DotChartOutlined,TeamOutlined,SettingOutlined,MailOutlined,NotificationOutlined,EditOutlined} from '@ant-design/icons';
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
        },
      },
      foot_data:{
        option:[
          {
            type:'component',
            name:'数据视图',
            icon:<DotChartOutlined />
          },
          {
            type:'component',
            name:'好友',
            icon:<TeamOutlined />
          },
          {
            type:'component',
            name:'设置',
            icon:<SettingOutlined />
          },
          {
            type:'component',
            name:'邮件',
            icon:<MailOutlined />
          },{
            type:'component',
            name:'发布',
            icon:<EditOutlined />
          },
          {
            type:'component',
            name:'通知',
            icon:<NotificationOutlined />
          },
          ]
      }
    });
  }
  render() {
    return (
      <div className="app-Box fex-column fex-l xm10 xl12">
      <AppHeader data={this.state.header_data}/>
      <AppCont data={this.state.cont_data}/>
      <AppFoot data={this.state.foot_data}/>
    </div>
    );
  }
}
export default App;
