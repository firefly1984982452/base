
  export const option = {
    color:['#69D89B','#EFB864'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            show: false
        },
        backgroundColor: '#0D2062',
        extraCssText: '#81ACF4',
        formatter: function(datas) {
            let res = '<p style="color:rgba(255,255,255,1);padding:0 5px;font-size: .14rem;">90-99</p>';
            res+='<p style="color:rgba(162,214,255,1);padding:0 5px;font-size: .14rem;">男</p>';
            return res
        }
    },
    grid:{x: '7%', y: '2%', width: '83%', height: '90%'},
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    fontSize: '.12rem',
                    color: '#fff'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml',
                textStyle: {
                    fontSize: '.12rem',
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#2A4375'
                }
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C',
                textStyle: {
                    fontSize: '.12rem',
                    color: '#fff'
                }
            },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#2A4375'
            }
        }
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'line',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            lineStyle:{
                type:'dashed'
            }
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
