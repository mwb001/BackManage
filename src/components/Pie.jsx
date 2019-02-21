import React,{Component} from 'react';
import echarts from "../../node_modules/echarts/lib/echarts"
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';



let data = {
    title: '华为',
    dataSex: [{
        name: '北京',
        value: '8000.00'
    }, {
        name: '上海',
        value: '6000.00'
    }, {
        name: '深圳',
        value: '4000.00'
    }, {
        name: '南京',
        value: '2000.00'
    }, {
        name: '成都',
        value: '3000.00'
    }, {
        name: '西安',
        value: '1000.00',
    }],
    dataAge: [{
        name: '北京',
        value: '2000.00'
    }, {
        name: '上海',
        value: '1800.00'
    }, {
        name: '深圳',
        value: '1500.00'
    }, {
        name: '南京',
        value: '1000.00'
    }, {
        name: '成都',
        value: '1600.00'
    }, {
        name: '西安',
        value: '800.00'
    }],
    dataHostype: [{
        name: '北京',
        value: '8000.00'
    }, {
        name: '上海',
        value: '6000.00'
    }, {
        name: '深圳',
        value: '12000.00'
    }, {
        name: '南京',
        value: '6000.00'
    }, {
        name: '成都',
        value: '8000.00'
    }, {
        name: '西安',
        value: '4000.00'
    }],
    dataDis: [{
        name: '北京',
        value: '2000.00'
    }, {
        name: '上海',
        value: '1800.00'
    }, {
        name: '深圳',
        value: '1500.00'
    }, {
        name: '南京',
        value: '1000.00'
    }, {
        name: '成都',
        value: '1600.00'
    }, {
        name: '西安',
        value: '800.00'
    },{
        name: '其他',
        value: '1000.00'
    }],
};
let echartsOption = {
    backgroundColor: '#05274C',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    title: [{
        top: '10%',
        text: data.title + '手机销量分布',
        textStyle: {
            color: '#3494BD',
            fontSize: 18,
            align: 'center',
        },
        left: '5%',
    },
        {
            top: '10%',
            text: data.title + '电脑&平板销量分布',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '28%',
        }, {
            top: '10%',
            text: data.title + '智能穿戴',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '57%',
        },
        {
            top: '10%',
            text: data.title +'家居配件',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '82%',
        }
    ],
    tooltip: {
        show:true,
        showContent: true,
        islandFormatter: '{c}' + '（万元）',
    },
    legend: {
        show:true,
        orient: 'vertical',
        right: '7%',
        top: '13%',
        data: ["华为手机销售分布",
            "华为电脑&平板销量分布",
            "华为智能穿戴",
            "华为家居配件"],
        itemWidth: 24,   // 设置图例图形的宽
        itemHeight: 18,  // 设置图例图形的高
        textStyle: {
            color: '#666'  // 图例文字颜色
        }
    },
    series: [
        // begin
        {
            //name: '',
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: "50%",
            center: ['12%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    // show:false,
                    // formatter:  '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    // padding: [20, -150],
                    // height: 70,
                    fontSize: 10,
                    position: 'inner',
                    // align: 'center',
                    color: '#fff',
                }
            },
            data: data.dataSex,
        },
        //end
        //begin
        {
            //name:
            color: ['#76FBC0', '#2AC9FD'],
            type: 'pie',
            radius:"50%",
            center: ['37%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {

                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -90],
                    position:"inner",
                    // height: 70,
                    fontSize: 10,
                    align: 'center',
                    color: '#fff',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.dataAge,
        },
        //end
        //begin
        {
            //name: '用药性别数量',
            color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
            type: 'pie',
            radius: "50%",
            center: ['62%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    // show:false,
                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -80],
                    position:"inner",
                    // height: 75,
                    fontSize: 10,
                    align: 'center',
                    color: '#fff',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.dataHostype,
        },
        //end
        {
            color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
            type: 'pie',
            radius: "50%",
            center: ['87%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    // show:false,
                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    // padding: [0, -80],
                    position:"inner",
                    // height: 75,
                    fontSize: 10,
                    align: 'center',
                    color: '#fff',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.dataDis,
        },
        //end
    ]
}
export default class Pie extends Component{
    render (){
        return <div id="line" style
            ={{width:"80%",height:"60%",margin:"0 auto"}}>
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