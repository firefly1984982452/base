
  export const option = {
    color:['#ee6d70'],
    legend: {
    },
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
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                fontSize: '.12rem',
                color: '#fff'
            }
        },
        data: ['养老顾问', '家庭医生', '社工', '专业服务', '生活照料', '其它']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
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
    series: [{
        data: [120, 200, 150, 80, 70, 110],
        type: 'bar',
    }
    ]
};
;
