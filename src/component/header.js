/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Menu, Dropdown,Input} from 'antd';
import { DownOutlined,SendOutlined} from '@ant-design/icons';
import {MyContext} from './App'
const { Search } = Input;
/**
 * app头部 Nav内容
 * 
 */
  /* 用户选项 */
  class UserControll extends Component{
      constructor(props){
          super(props)
          this.state = {isLogin: false,user_name:'Login in'}
        }
          /* 初始化用户信息 判断本地或者登录状态 */
      componentDidMount() {
          console.log('开始加载用户信息')
          console.log(this.context)
      }
      /* 生命周期 卸载 */
      componentWillUnmount() {
        console.log('退出')
      }
      render() {
        if(!this.state.isLogin){
          return (
              <a  className='userControll'>
              <SendOutlined style={{transform:"rotate(-35deg)",marginRight:'5px',verticalAlign:'baseline'}}/>
                {this.state.user_name}
              </a>
          )
        }else{
          /* 头部 */
            const menu = (
              <Menu>
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="">
                  </a>
                </Menu.Item>
              </Menu>
            );
          return (
            <Dropdown overlay={menu} >
                <a className="ant-dropdown-link userControll" onClick={e => e.preventDefault()}>
                {this.state.userName} 
                <DownOutlined />
                </a>
            </Dropdown>
          )
        }
      }
  }
  /* 头部全局搜索 */
  class HearderSearchIpt extends Component{
      constructor(props){
          super()
          this.state={
              hideIpt:true
          };
      }
      render(){
          return(
              <div className="HearderSearchIpt" >
                            <Search
                  placeholder="搜索..."
                  onSearch={value => console.log(value)}
                  style={{background:'rgba(0,0,0,0)',transform: 'translateY(-1px)',width:150,borderColor:'rgba(255,255,255,.5)'}}
                />
              </div> 
          )
      }
  }
  /* 左头 */
  function AppHeaderLeft(props){
    return (
      <MyContext.Consumer>
          {(value)=>
            (<div className="app-header-left  fex-c xl3 fex-nowrap fex-items-c">
            <span className="logo ">
                {value.app_name}
            </span>
            <span className='xiexian'></span>
            <UserControll/>
          </div>)
          }
      </MyContext.Consumer>
    );
  }
    /* 右头 */
  function AppHeaderRight(props){
    var list =props.page_list;
    const nav_list = list.map((item,index)=>
      <li  key={index}>
        <a href={item.toLocaleLowerCase()} className={('/'+item.toLocaleLowerCase())===window.location.pathname?'active':''}>{item}</a>
      </li>
    );
    const menu = (
        <Menu>
            <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="">
              中文
            </a>
            </Menu.Item>
            <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="">
              English
            </a>
            </Menu.Item>
        </Menu>
    );
    return (
      <div className="app-header-right  xl9 fex-items-c fex-l fex-nowrap "> 
        <ul className='header-page-list fex-c fex-items-c jus-cnt-spa xl7'>
          {nav_list}
        </ul>
        <div className="xl5 jus-cnt-spa fex-r height fex-items-c fex-nowrap" >
              <Dropdown overlay={menu} >
              <a className="ant-dropdown-link language-change-btn" onClick={e => e.preventDefault()} >
                  Language
              <DownOutlined style={{verticalAlign:'middle',marginLeft:'5px'}}/>
              </a>
          </Dropdown>
            <HearderSearchIpt />
        </div>
      </div>
    );
  }
export {AppHeaderLeft,AppHeaderRight};