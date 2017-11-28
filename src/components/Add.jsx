import React, { Component } from 'react'
import '@/static/css/Add.css';

class Add extends Component {
  constructor(props){
    super(props)
    this.state={
        data: [],
        data2: ['上海', '广州' ,'深圳', '厦门', '香港', '澳门', '大连', '淄博', '唐山', '邯郸']
    }
    this.addFn = this.addFn.bind(this)
    this.delFn = this.delFn.bind(this)
    this.addAllFn = this.addAllFn.bind(this)
    this.oLisFn = this.oLisFn.bind(this)
  }

  // 添加
  addFn() {
    let txt = this.refs.txtcont.value;
    txt && this.state.data.length < 5 && this.state.data.push(
      txt
    )
    this.refs.txtcont.value = '';
    this.setState({data:this.state.data});
  }

  // 删除
  delFn(e) {
    var delCont = e.target.getAttribute("data-id");
    var lists = this.state.data;
    console.log(delCont)
    lists.splice(delCont,1);
    this.setState({data:lists})
  }

  // 删除全部
  addAllFn() {
    console.log(this.state.data)
    this.setState({
      data: this.state.data.filter(() => false)
    });
  }

  //点击添加
  oLisFn(e) {
    var txt = e.target.getAttribute("data-txt")
    txt && this.state.data.length < 5 && this.state.data.push(
      txt
    )
    this.refs.txtcont.value = '';
    this.setState({data:this.state.data});
  }

  render () {
    return (
      <div className="box">
        <ul className="contentBox">
          <li>北京</li>
          {
            this.state.data.map((i,index) => {
              return (
                <li key={index} className="oLi">{i} 
                  <b className="del" 
                     onClick={this.delFn} 
                     data-id={index}>X
                  </b>
                </li>
              )
            })
          }
        </ul>
        <form className="fromBox">
          <input type="text" 
                 ref="txtcont" 
                 className="txt"/>
          <input type="button" 
                onClick={this.addFn} 
                value="点击添加" 
                className="buttonbox" 
                id="btn"/>
          <input type="button" 
                 onClick={this.addAllFn} 
                 value="清除全部" 
                 className="buttonbox" 
                 id="btnAll"/>
        </form>
        <ul className="labelBox">
          {
            this.state.data2.map((i,index) => {
              return <li key={index} 
                         className="oLis" 
                         onClick={this.oLisFn}
                         data-id={index}
                         data-txt={i}
                         >{i} <b>+</b></li> 
            })
          }
        </ul>
      </div>
    )
  }
}

export default Add