
  export const option = {
    color:['#4983E1','#DB69BA'],
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
    grid:{x: '7%', y: '2%', width: '93%', height: '90%'},
    dataset: {
        dimensions: ['product', '男', '女'],
        source: [
            {product: '60-90', '男': 43.3, '女': 85.8},
            {product: '70-79', '男': 83.1, '女': 73.4},
            {product: '80-89', '男': 86.4, '女': 65.2},
            {product: '90-99', '男': 72.4, '女': 53.9},
            {product: '100及以上', '男': 7.4, '女': 5.9}
        ]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: '12px',
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                fontSize: '12px',
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
    series: [
        {
            type: 'bar',
            startAngle: 300,
            minAngle: 15,
            radius: ['100%', '60%'],
            center: ['50%', '50%']
        },
        {
            type: 'bar',
            startAngle: 300,
            minAngle: 15,
            radius: ['100%', '60%'],
            center: ['50%', '50%']
        }
    ]
};
