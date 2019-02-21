import React, {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import user from "../pages/user"
import {Route} from "react-router-dom"
import Line from "../components/Line"
import Pie from "../components/Pie"
export default class Index extends Component {
       render(){
            return <div style={styles.bigbox}>
                 <Header/>
                  <div style={styles.ydiv}>
                    <Route path="/liu" component={Pie}/>
                      <Route path="/" component={user}/>
                  </div>
            </div>
       }
}
const styles={
    bigbox:{width:"100%",height:"100%",position:"relative"},
    divz:{float:"left",width:"200px"},
    ydiv:{float: "left",height:"88%",width:"90%",position:"absolute",left:"180px",top:"100px",overflowY:"auto"},
    img:{width:"100px",height: "50px"}
}