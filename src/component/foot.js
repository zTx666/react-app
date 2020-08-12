import React, { Component } from 'react';
import $ from 'jquery'
function AppFootLeft(props){
  return(
    <div className="xl3 app-foot-left fex-l">
      <OptionFunction data={props.data} />
    </div>
  )
}

function Option(props){
  if(props.list){
      return props.list.option.map((item,index) =>  <li key={index} className='option-li fex-items-c fex-c fex-column xl5'>
      <span className='option-icon'>{item.icon}</span>
      <span className='option-name'>{item.name}</span>
      </li>);
  }else{
      return (
          <li>123</li>
      )
  }

}
class OptionFunction extends Component{
  render() {
      return(
          <div className="app-option-box  fex-l layout " >
              <ul className='layout fex-l jus-cnt-spa option-list fex-items-c'>
                  <Option list={this.props.data}/>
                  <li class='option-active'></li>
              </ul>
          </div>
      )};
}
class AppFoot extends Component{
  componentDidUpdate(){
  let Xpos = $('.option-li:first-child').offset().left,
      Ypos = $('.option-li:first-child').offset().top,
      w = $('.option-li:first-child').outerWidth(),
      h = $('.option-li:first-child').outerHeight();
      $('.option-active').animate({
            'left':Xpos,
            'top':Ypos,
            'width':w,
            'height':h
      })
    $('.option-li').hover(function(){
      let Xpos = $(this).offset().left,
      Ypos = $(this).offset().top,
      _this = this;
      $(this).siblings().css({
        "color":'#6A758A'
      })
      $('.option-active').animate({
        'left':Xpos,
        'top':Ypos,
      },"fast",function(){
        $(_this).css({
          "color":'white'
        })
      })
    },function(){
      $(this).siblings().css({
        "color":'#6A758A'
      })
    })
  }
    render() {
        return(
            <div className="app-foot  fex-l layout ">
                <AppFootLeft data={this.props.data} />
            </div>
        )};

}

export default AppFoot;