//第一部分
//chart 1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel1'),'vintage');
    //2.指定配置项和数据

  var  option = {
			title: {
				text: '2008-2018年中国结婚率离婚率统计',
				subtext: '数据来源：国家统计局'
			},
			tooltip: {
				trigger: 'axis'
			},
	  		grid: {
            left: '0.5%',
            right: '6%',
            bottom: '3%',
            containLabel: true
        },
			legend: {
				data: ['结婚人数', '离婚人数']
			},
	
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} 万对'
				}
			},
			series: [
				{
					name: '结婚人数',
					type: 'line',
					data: [1098.3, 1212.4, 1241, 1302.36, 1323.59, 1346.93, 1306.74, 1224.71, 1142.82, 1063.1, 1010.8],
					markPoint: {
						data: [
							{type: 'max', name: '最大值'},
							{type: 'min', name: '最小值'}
						]
					},
					markLine: {
						data: [
							{type: 'average', name: '平均值'}
						]
					}
				},
				{
					name: '离婚人数',
					type: 'line',
					data: [226.9, 246.8, 267.8, 287.4, 310.38, 350.01, 363.7,384.14,415.82,437.4,446.1],
					markPoint: {
						data: [
							{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
						]
					},
					markLine: {
						data: [
							{type: 'average', name: '平均值'},
							[{
								symbol: 'none',
								x: '90%',
								yAxis: 'max'
							}, {
								symbol: 'circle',
								label: {
									position: 'start',
									formatter: '最大值'
								},
								type: 'max',
								name: '最高点'
							}]
						]
					}
				}
			]
		};
    myChart.setOption(option);
})();

//第二部分
//chart 2.1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel21'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title:{text:'单身族交友渠道',
		   subtext:'数据来自极光'
		  },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['人数比例%']
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['通过相亲平台认识', '通过线上兴趣社区接触', '通过线下兴趣圈子认识', '通过父母，亲戚介绍', '通过身边的同学，同事']
    },
    series: [
        {
            name: '人数比例%',
            type: 'bar',
            data: [16,24,29,39,56]
        },
       
    ]
};
    myChart.setOption(option);
})();

//chart 2.2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel22'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title:{text:'单身族选择恋爱对象的考虑因素',
		   subtext:'数据来自极光'
		  },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['人数比例%']
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['收入', '年龄', '兴趣爱好', '生活自理能力', '颜值','性格']
    },
    series: [
        {
            name: '人数比例%',
            type: 'bar',
            data: [16,22,31,32,33,66]
        },
       
    ]
};
    myChart.setOption(option);
})();

//chart 2.3
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel23'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title: {
        text: '90后单身原因',
        subtext: '数据来源珍爱网',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
	   grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 660, name: '其他'},
                {value:800, name: '圈子小'},
                {value:300, name: '工作忙'},
                {value:240, name: '对爱情幻想过于完美'},
               
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    myChart.setOption(option);
})();

//chart 2.4.1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel241'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title: {
        text: '一线、新一线城市（TGI）',
        textStyle: {
            color: '#235894'
        }
    },
	   grid: {top:'6%',
            left: '6%',
            right: '6%',
            bottom: '3%',
            containLabel: true
        },
    tooltip: {},
    series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            fontSize: 18,
            color: '#235894'
        },
        labelLine: {
            lineStyle: {
                color: '#235894'
            }
        },
        data: [
            {value: 109, name: '性格'},
            {value: 106, name: '颜值'},
            {value: 106, name: '家庭背景'},
          
        ],
        itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }]
};
    myChart.setOption(option);
})();

//chart 2.4.2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel242'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title: {
        text: '二线、三线城市（TGI）',
        textStyle: {
            color: '#235894'
        }
    },
	   grid: {top:'30%',
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    tooltip: {},
    series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            fontSize: 18,
            color: '#235894'
        },
        labelLine: {
            lineStyle: {
                color: '#235894'
            }
        },
        data: [
            {value: 163, name: '行业'},
            {value: 123, name: '学历水平'},
            {value: 110, name: '收入'},
          
        ],
        itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }]
};
    myChart.setOption(option);
})();

//chart 2.4.3
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel243'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title: {
        text: '四线及以下城市（TGI）',
        textStyle: {
            color: '#235894'
        }
    },
	   grid: {top:'30%',
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    tooltip: {},
    series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            fontSize: 18,
            color: '#235894'
        },
        labelLine: {
            lineStyle: {
                color: '#235894'
            }
        },
        data: [
            {value: 125, name: '身高'},
            {value: 118, name: '家庭背景'},
            {value: 116, name: '生活能力'},
          
        ],
        itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }]
};
    myChart.setOption(option);
})();

//chart 2.5
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel25'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title:{text:'单身族交友渠道',
		   subtext:'数据来自极光'
		  },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['人数比例%']
    },
     grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['通过相亲平台认识', '通过线上兴趣社区接触', '通过线下兴趣圈子认识', '通过父母，亲戚介绍', '通过身边的同学，同事']
    },
    series: [
        {
            name: '人数比例%',
            type: 'bar',
            data: [16,24,29,39,56]
        },
       
    ]
};
    myChart.setOption(option);
})();

//chart 2.6
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel26'),'vintage');
    //2.指定配置项和数据

  var  option = {title: { 
        text: '单身族对婚姻和生育的态度',
        subtext: '数据来自极光调研',
        left: 'center'
    },
		 grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },		 
    series: [{
        type: 'treemap',
        data: [{
            name: '期待婚姻生活，对生育有恐惧感',            // First tree
            value: 16,
            children: [{
                name: '期待婚姻生活，对生育有恐惧感 \n单身女性（26%）',       // First leaf of first tree
                value: 26
            }, {
                name: '期待婚姻生活，对生育有恐惧感 \n单身男性（74%）',       // Second leaf of first tree
                value: 74
            }]
        }, {
            name: '孩子是爱情的结晶',            
            value: 50,
            children:[{
                name:'孩子是爱情的结晶 \n单身男性（56%）',
                value:56
            },{
                name:'孩子是爱情的结晶 \n单身女性（44%）',
                value:44,
            }],
        },
        {
            name: '期待婚姻生活\n但不想被孩子打扰',            
            value: 13,
        },
         {
            name: '对婚姻没什么期待\n但想要小孩',            
            value: 7,
        },
         {
            name: '恐惧婚姻和生育',            
            value: 12,
        },
        
        
        ]
    }]
};
    myChart.setOption(option);
})();

//chart 2.7
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel27'),'vintage');
    //2.指定配置项和数据

  var  option = {
     title: {
        text: '单身族未来一年人生目标top 5',
        subtext: '数据来源极光调研',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['恋爱/结婚/生子', '培养业余专长', '去想去的地方旅行', '身体更加健康', '考一个证书']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [30,31,41,41,32],
        type: 'bar'
    }]
};
    myChart.setOption(option);
})();

//chart 2.8.1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel281'),'vintage');
    //2.指定配置项和数据
  var option = {
    title: {
        text: '业余时间喜欢做的运动',
        subtext: '数据来自珍爱网'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['人数比例%']
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['其他', '打游戏', '参与活动', '交友聚会', '烹饪美食', '躺尸','旅游','逛街','吃东西','运动健身','看剧','看书']
    },
    series: [
        {
            name: '人数比例%',
            type: 'bar',
            data: [11.9,12.3,21.3,25.7,28.7,35.1,37.3,40.3,49.6,53.0,64.6,72.0]
        },
       
    ]
};
    myChart.setOption(option);
})();

//chart 2.8.2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel282'),'vintage');
    //2.指定配置项和数据
  var option = {
    title: {
        text: '脱单的信心',
        subtext: '数据来自珍爱网',
        left: 'center'
    },
	   grid: {
            left: '5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '脱单的信心',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 240, name: '非常自信 48%'},
                {value: 20, name: '没有信心 4%'},
                {value: 50, name: '一丝信心 10%'},
                {value: 190, name: '很有信心 38%'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    myChart.setOption(option);
})();

//chart 2.9.1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel291'),'vintage');
    //2.指定配置项和数据
  var option = {
    title: {
        text: '单身时长调查',
        subtext: '数据来自极光',
        left: 'center'
    },

    xAxis: {
        type: 'category',
        data: ['半年内', '1年', '2年', '3年', '4年', '5~10年', '10年以上']
    },
    yAxis: {
        type: 'value',
        axisLabel:{formatter:'{value} %'}
    },
    series: [{
        data: [23.9, 17.2, 17.5, 11.6, 6.7, 11.1, 13.1],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
        }
    }]
};
    myChart.setOption(option);
})();

//chart 2.9.2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel292'),'vintage');
    //2.指定配置项和数据
  var option = {
    title: {
        text: '恋爱次数调查',
        subtext: '数据来自极光',
        left: 'center'
    },

    xAxis: {
        type: 'category',
        data: ['母胎solo（0次）', '1次', '2次', '3次', '4次', '5~10次', '10次以上']
    },
    yAxis: {
        type: 'value',
        axisLabel:{formatter:'{value} %'}
    },
    series: [{
        data: [10.4, 22.4,27.2,20.9, 9.7, 8.6, 0.7],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
        }
    }]
};
    myChart.setOption(option);
})();

//第三部分
//chart 3.1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel31'),'vintage');
    //2.指定配置项和数据

  var  option = {
		title: {
        text: '对独居生活的态度',
        subtext: '数据来自网易数独'
    },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            },
			formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%'
        },
        legend: {
            data: ['男', '女']
        },
        grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['其它', '不喜欢独居', '态度中立', '独居只是一种暂时过渡状态', '我很享受']
        },
        series: [
            {
                name: '男',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
						formatter: '{c}%'
                    }
                },
                data: [2.0,5.0 , 29.9,24.3, 28.9]
            },
            {
                name: '女',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
						formatter: '{c}%'
                    }
                },
                data: [2.7, 2.1, 23.5, 21.1, 50.6]
            }
        ]
    };
    myChart.setOption(option);
})();


//chart3.2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel32'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title:{
        text: '单身“汪”选择恋爱对象的考虑因素',
        subtext: '数据来自极光'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer : {       
            type : 'shadow'  
        },
		formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%'
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },

    xAxis: {
        type: 'category',
        data: ['性格', '颜值', '生活能力', '兴趣爱好', '年龄', '收入']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
        },
         
    },
    series: [{
        data: [66, 33, 32, 31,22,16],
        
        type: 'bar'
    }]
};
    myChart.setOption(option);
})();

//chart3.3
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel33'),'vintage');
    //2.指定配置项和数据

  var  option = {
    title:{
        text: '单身族认为结婚必要条件',
        subtext: '数据来自搜狐'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer : {       
            type : 'shadow'  ,
        },
    },
    grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },

    xAxis: {
        type: 'category',
        data: ['性格合适', '感情基础','能接受对方的生活习惯','双方家庭的认可']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
        },
         
    },
    series: [{
        data: [58,49,42,35],
        
        type: 'bar'
    }]
};
    myChart.setOption(option);
})();

//chart 3.4.1
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel341'),'vintage');
    //2.指定配置项和数据
 var  option = {
    title:{
        text: '女性最钟意男性职业排名',
        subtext: '数据来自搜狐'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer : {       
            type : 'shadow'  ,
        },
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },

    xAxis: {
        type: 'category',
        data: ['医生', '金融从业者','程序员','律师','建筑师','公务员','设计师','摄影师','警察','国企员工']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
        },
         
    },
    series: [{
        data: [35.4,24.3,21.4,19.4,18.2,17.0,17.0,15.1,12.8,12.2],
        
        type: 'bar'
    }]
};
    myChart.setOption(option);
})();

//chart 3.4.2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel342'),'vintage');
    //2.指定配置项和数据
   option = {
    title:{
        text: '男性最钟意男性职业排名',
        subtext: '数据来自搜狐'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer : {       
            type : 'shadow'  ,
        },
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },

    xAxis: {
        type: 'category',
        data: ['教师', '公务员','医生','设计师','画家','金融从业者','律师','摄影师','心理咨询师','会计']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
        },
         
    },
    series: [{
        data: [42.6,27.7,18.1,16.4,10.5,10.5,8.7,8.3,7.6,7.4],
        
        type: 'bar'
    }]
};
    myChart.setOption(option);
})();

//chart 3.4.3
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel343'),'vintage');
    //2.指定配置项和数据
   option = {
    title: {
        text: '在一起后最影响感情的因素',
        subtext: '数据来自网易',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 49.3, name: '加班时间'},
                {value: 26.7, name: '职业环境接触异性可能性'},
                {value: 6.6, name: '职业安全性'},
                {value: 6.4, name: '收入'},
                {value: 5.9, name: '职业稳定性'},
                {value: 2.6, name: '他人对职业看法'},
                {value: 2.6, name: '其他'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    myChart.setOption(option);
})();

//chart 3.4.4
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pannel344'),'vintage');
    //2.指定配置项和数据
  var option = {
    title: {
        text: '不愿结婚的因素',
        subtext: '数据来自网易',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    grid: {
            left: '0.5%',
            right: '0.5%',
            bottom: '3%',
            containLabel: true
        },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 72.6, name: '经济压力'},
                {value: 13.3, name: '找不到对象'},
                {value: 11.8, name: '享受生活'},
                {value: 2.4, name: '其他'},
                
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    myChart.setOption(option);
})();
