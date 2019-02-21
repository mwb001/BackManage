import React, {Component} from "react"
import {Link} from "react-router-dom"
import Api from "../common/Api";
 import Newapis from "../apis/NewsApis"
 // import data from "../datas/news"
  import rukoui from "../apis/fasongduan"
export default class User extends Component {
ceshi(){
    // rukoui.get(data=>{});
   Newapis.getNewsList(data=>{
       console.log(data)
   })
}


            render(){
                 return <div>
                      <h1> user yemian </h1>
                      <button onClick={this.ceshi.bind(this)}>测试按钮</button>
                 </div>
            }
}