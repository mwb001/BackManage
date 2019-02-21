import React,{Component} from "react"

export default class NewsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lists:[
                { "title":"幸福中国年：五福临门度春节 六六大顺开启新征程"},
                { "title":"中国使馆驳斥立陶宛渲染中国威胁报告:非常荒谬和可笑"}
            ],

            newsInfo:[]
        }
    }

    componentWillMount(){
        let {id} = this.props.match.params;
        this.setState({
            newsInfo :this.state.lists[id]
        })
    }

    render(){
        return  <div>
            <h1>列表二</h1>

        </div>
    }

}
