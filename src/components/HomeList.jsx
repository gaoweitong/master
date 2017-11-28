import React, { Component } from 'react'
import '@/static/css/homeList.css'
var datas = [
	{
    img: require('@/static/images/four_03.jpg'),
    title: '安心防癌',
    p: '低至10元/年,续保有宽期限,中青年人群专属',
    price: 10,
    sale_num: 0
	},
	{
    img: require('@/static/images/dt.png'),
    title: '安心骑车',
    p: '低至10元/年,续保有宽期限,中青年人群专属',
    price: 10,
    sale_num: 0
  },
  {
    img: require('@/static/images/dt.png'),
    title: '安心骑车',
    p: '低至10元/年,续保有宽期限,中青年人群专属',
    price: 10,
    sale_num: 0
  },
  {
    img: require('@/static/images/dt.png'),
    title: '安心骑车',
    p: '低至10元/年,续保有宽期限,中青年人群专属',
    price: 10,
    sale_num: 0
  },
  {
    img: require('@/static/images/dt.png'),
    title: '安心骑车',
    p: '低至10元/年,续保有宽期限,中青年人群专属',
    price: 10,
    sale_num: 0
	}
]
class HomeList extends Component {
  render () {
    return (
      <div className='list-bar'>
        {
          datas.map((items,index) => {
            return (
              <dl key={index} className='dl'>
                <dt><img src={items.img} alt=''/></dt>
                <dd>
                  <h3>{items.title}</h3>
                  <p>{items.p}</p>
                  <div className='bottom'>
                    <span><strong>{items.price}</strong>起购买</span>
                    <span><b>{items.sale_num}</b>人购买</span>
                  </div>
                </dd>
              </dl>
            )
				  })
        }
      </div>
    )
  }
}
export default HomeList
