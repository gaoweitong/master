import React, { Component } from 'react'

class FooterBar extends Component {
  render () {
    return (
      <div className="footer-bar">
        <span><i><img src={require('@/static/images/icons/home.png')} alt=''/></i><b>首页</b></span>
        <span><i><img src={require('@/static/images/icons/share.png')} alt=''/></i><b>发现</b></span>
        <span><i><img src={require('@/static/images/icons/zoom.png')} alt=''/></i><b>我的</b></span>
      </div>
    )
  }
}

export default FooterBar
