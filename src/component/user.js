import React, { Component } from 'react';
import touxiang from '../img/self.jpg'
import { UserAddOutlined,TeamOutlined} from '@ant-design/icons';
/**
 * app内容部分 左边个人信息部分
 * 
 */
class UserShow extends Component{
    render() {
        if(this.props.data!=null){ 
            const data = this.props.data;
            return(
                <div className="app-cont-userShow fex-column fex-c fex-items-c xl3 " >
                    <div className='user-box '>
                        <div className='userShow-level-circle'>
                             <ul className='pie'>
                                    <li className='pieMask fex-c fex-items-c'>
                                        <div className='user-img webupimg'>
                                            <img src={data.user_img?data.user_img:touxiang} alt={data.user_name} />
                                        </div>
                                    </li>
                                    <li className='slice-3 slice' style={{background:data.user_level>=1?'yellow':'#2E36C9'}}> </li> 
                                    <li className='slice-4 slice' style={{background:data.user_level>=2?'yellow':'#2E36C9'}}> </li>
                                    <li className='slice-2 slice' style={{background:data.user_level>=3?'yellow':'#2E36C9'}}> </li>
                                    <li className='slice-1 slice' style={{background:data.user_level>=4?'yellow':'#2E36C9'}}> </li>
                                    <li className='slice-10 slice' style={{background:data.user_level>=5?'yellow':'#2E36C9'}}> </li>
                                    <li className='slice-9 slice' style={{background:data.user_level>=6?'yellow':'#2E36C9'}}> </li>
                                    <li className='slice-8 slice' style={{background:data.user_level>=7?'yellow':'#2E36C9'}}> </li>
                                    <li className='slice-7 slice' style={{background:data.user_level>=8?'yellow':'#2E36C9'}}> </li>
                                </ul>
                        </div>
                    </div>
                    <span className='user-name'>
                        {data.user_name}
                    </span>
                    <span className='user-introduce'>
                        {data.user_identity} · {data.user_level} level
                    </span>
                    <UserOperation data={data}/>
                </div>
            )
        }else{ 
            return(
                <div className="app-cont-userShow fex-column fex-c fex-items-c layout " >
                <div className='user-box '>
                    <div className='userShow-level-circle'>
                         <ul className='pie'>
                                <li className='pieMask fex-c fex-items-c'>
                                    <div className='user-img webupimg'>
                                        <img src={touxiang} alt='头像' />
                                    </div>
                                </li>
                                <li className='slice-3 slice' > </li> 
                                <li className='slice-4 slice' > </li>
                                <li className='slice-2 slice' > </li>
                                <li className='slice-1 slice' > </li>
                                <li className='slice-10 slice'> </li>
                                <li className='slice-9 slice' > </li>
                                <li className='slice-8 slice' > </li>
                                <li className='slice-7 slice' > </li>
                            </ul>
                    </div>
                </div>
                <span className='user-name'>
                    未登录
                </span>
                <span className='user-introduce'>
                    游客 · 0 level
                </span>
            </div>
            )
        }
    } 
}
class UserOperation extends Component{
    render() {
        const data = this.props.data;
        return(
            <div className="user-operation  fex-items-c layout " >
                <div className='xl6 fex-c fex-items-c' >
                    <TeamOutlined />
                    <div className='fex-column jus-cnt-spa' style={{fontSize:'0.6rem',marginLeft:10}}>
                      <div className='layout t-c'>
                            {data.user_friend}
                      </div>  
                      <div className='layout t-c' >
                            朋友
                      </div> 
                    </div>
                </div>
                <div className='xl6 fex-c fex-items-c'>
                    <UserAddOutlined style={{verticalAlign:'baseline'}}/>
                    <div className='fex-column jus-cnt-spa' style={{fontSize:'0.6rem',marginLeft:10}}>
                      <div className='layout t-c'>
                            {data.follow_user}
                      </div>  
                      <div className='layout t-c' >
                            关注
                      </div> 
                    </div>
                </div>
            </div> 
        )
    }
}
export default UserShow;