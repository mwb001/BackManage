import React,{Component} from 'react';
import echarts from "../../node_modules/echarts/lib/echarts"
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/grid';



var xAxisData = ['北京', '上海', '深圳', '南京', '成都', '西安'];
var legendData= ['手机','电脑&平板','智能穿戴',"家具配件"];
var title = "华为主要产品销量各地区折线图";
var serieData = [];
var metaDate = [
    [8000, 14000, 8000, 4500, 4800, 1000],
    [12000, 16400, 6000, 6000, 8000, 6400],
    [9000,12000, 8000, 6500, 4600, 2800],
    [6000,8000,7500,2000,2000,2600]
]
for(var v=0; v < legendData.length ; v++){
    var serie = {
        name:legendData[v],
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        data: metaDate[v]
    };
    serieData.push(serie)
}
var colors = ["#036BC8","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"];
let echartsOption = {
    backgroundColor: '#0f375f',
    title : {text: title,textAlign:'left',y:'4%',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},
    legend: {
        show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14},
    },
    color:colors,
    grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
    tooltip : {
        trigger: 'axis',
        axisPointer : { type : 'line'}
    },
    xAxis: [
        {
            type: 'category',
            axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
            axisTick : {show: false},
            data:xAxisData,
        },
    ],
    yAxis: [
        {
            axisTick : {show: false},
            splitLine: {show:false},
            axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
            axisLine: { show: true,lineStyle:{ color:'#6173A3'}},
        },
    ],
    series:serieData
}
export default class Line extends Component{
    render (){
        return <div id="line" style
        ={{width:"100%",height:"100%"}}>
            {/*<h2>line</h2>*/}
        </div>
    }
    constructor(props,context) {
        super(props,context)
        this.state = {}
    }
    componentDidMount () {
        this.newGraph()
    }
    newGraph(){
        var myChart = echarts.init(document.getElementById('line'));
        myChart.setOption(echartsOption)
    }
}