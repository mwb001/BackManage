import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom"
import "./css/iconfont.css"
import "./css/public.css"
import Login from "./pages/Login"
// import {withRouter} from "react-router"
// import Header from "./components/Header"
import Index from "./pages/Index"
class App extends Component {
    render(){
        return <BrowserRouter>
            <Fragment>
                {/*<Header></Header>*/}
                 <div style={styles.bboy}>
                     <Route exact path="/" component={Index}/>
                     <Route  path="/login" component={Login}/>
                     {/*<Route  path="/Nes3" component={MmpMmp}/>*/}
                 </div>

            </Fragment>
        </BrowserRouter>
    }
}
const styles={
    bboy:{width:"100%",height:"100%",overflowX:"hidden",margin:0},
   divz:{float:"left",width:"200px"},
   ydiv:{float: "left",height:"80%",width:"90%",marginLeft:"180px"},
    img:{width:"100px",height: "50px"}
}

export default App;
