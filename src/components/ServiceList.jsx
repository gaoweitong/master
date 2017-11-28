import React, { Component } from 'react';

class ServiceList extends Component{
  constructor(props){
      super(props)
      this.state={
          services:[],
          view:"type_a"
      }
  }
  
  render(){
      const serviceShows = this.state.services.map((service,index)=>{
          if(service.type === this.state.view){
              return <div className="one-service" key={index}>{service}</div>
          }
          return 'success';
      })
      return(
          <div>
              {serviceShows}
          </div>
      )
  }
  
  componentDidMount(){
      const xhr = new XMLHttpRequest()
      xhr.open("GET", "http://{{host}}/api/product/list", true)
      xhr.withCredentials = true
      xhr.send()

      xhr.onreadystatechange = () => {
          if(xhr.readyState === XMLHttpRequest.DONE){
              if(xhr.status === 200){
                  let gotServices = JSON.parse(xhr.responseText)
                  this.setState({
                      services : gotServices
                  })
              }
          }else{
              alert("ajax失败了")
          }
      }
  }
}

export default ServiceList