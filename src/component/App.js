import React, { Component } from 'react';
import {AppHeaderLeft,AppHeaderRight} from './header';
import UserShow from "./user";
import AppFoot from './foot';
import { DotChartOutlined,TeamOutlined,SettingOutlined,MailOutlined,NotificationOutlined,EditOutlined} from '@ant-design/icons';
/**
 * App 组件化 
 * App整合页面
 */
const MyContext = React.createContext({});
class App extends Component{
  constructor(props){
	super()
	/* 默认state */
    this.state={
		header_data:{
			page_list:['NEWS','LIST','SPORT','GAME','NEWS'],
			app_name:'React',
		},
		user_data:{
			id:0,
			user_level:0,
			user_img:'',
			user_name:'请先登录',
			user_friend:0,
			follow_user:0,
			user_identity:"游 客"
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
		},
		isLogin:false
    }
  }
  componentDidMount() {
	var data = {
			user_data:{
				id:1,
				user_level:6,
				user_img:'',
				user_name:'MengMianXiaiii',
				user_friend:1,
				follow_user:1,
				user_identity:"Big BOSS"
		  	},
			table_data:{
				ad:1232123
			},
			isLogin:true
	}
   this.setState(data);
  } 
  render() {
    return (
        <div className="app-Box fex-column fex-l xm10 xl12 fex-nowrap">
        	<div className="app-header fex-l fex-nowarp layout fex-items-c">
				<MyContext.Provider value={{...this.state.header_data}}>
					<AppHeaderLeft  />
					<AppHeaderRight page_list = {this.state.header_data.page_list}/>
				</MyContext.Provider>
			</div>
			<div className="app-cont fex-l layout fex-nowarp " >
				<div className="app-cont-left fex-column fex-c fex-items-c xl3 ">
					<MyContext.Provider value={{...this.state.user_data}}>
						<UserShow/>
					</MyContext.Provider>
				</div>
				<MyContext.Provider value={{...this.state.table_data}}>
					<div className="app-cont-right fex-column fex-l xl9 ">
						<MyContext.Consumer> 
							{(value)=><b>{JSON.stringify(value)}</b>}
						</MyContext.Consumer>	
					</div>
				</MyContext.Provider>
			</div>
          <AppFoot data={this.state.foot_data}/>
        </div>
    );
  }
}
export {App,MyContext};
