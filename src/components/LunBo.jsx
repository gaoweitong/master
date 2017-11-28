import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

var datas = [
	{
		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=167311956,25038485&fm=27&gp=0.jpg'
	},
	{
		img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3088947317,3649154708&fm=27&gp=0.jpg'
	},
	{
		img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1282688632,2122741476&fm=27&gp=0.jpg'
	}
]
 
class Carousel extends Component {
	render () {
		return (
			<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
				{
					datas.map((items,index) => {
						return (
							<div key={index}><img src={items.img} alt=""/></div>
						)
					})
				}
			</ReactSwipe>
		);
	}
}

export default Carousel