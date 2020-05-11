
  export const option = {
    color:['#EFB864'],
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
    grid:{x: '20%', y: '5%', width: '65%', height: '90%'},
    xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                fontSize: '.12rem',
                color: '#fff'
            }
        },
    },
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ['xx类服务', 'xx类服务', 'xx类服务', 'xx类服务', 'xx类服务', 'xx类服务', 'xx类服务', 'xx类服务'],
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: '.12rem',
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
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
                show: false
            }
        }
    ],
    series: [
        {
            name: '2011年',
            type: 'bar',
            barWidth: 10,
            data: [18203, 23489, 29034, 104970, 131744, 630230, 131744, 630230]
        },
    ]
};
