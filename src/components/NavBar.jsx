import React, { Component } from 'react'
let lists= ['推荐','儿童','成人','父母','家人']
 
class NavBar extends Component {
	render () {
		return (
			<ul className="nav-bar">
        {
          lists.map((items,index) => {
            return (
              <li key={index}>{items}</li>
            )
          })
        }
      </ul>
		);
	}
}

export default NavBar