
  export const option = {
    color:['#4983E1','#DB69BA','#fe09'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            show: false
        },
        backgroundColor: '#0D2062',
        extraCssText: '#81ACF4',
        formatter: function(datas) {
            let res = '<p style="color:rgba(255,255,255,1);padding:0 5px;font-size: .28rem;">90-99</p>';
            res+='<p style="color:rgba(162,214,255,1);padding:0 5px;font-size: .28rem;">男</p>';
            return res
        }
    },
    grid:{x: '7%', y: '-7%', width: '100%', height: '100%'},
    series: [
        {
            name: '养老模式',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '机构'},
                {value: 310, name: '居家'},
                {value: 234, name: '其它'}
            ],
            itemStyle:{
                lineStyle:{
                    color:'#0D2062',
                }
            },
            label:{
              normal: {
                formatter: '{b}:{d}%',
                textStyle: {
                  color: '#fff',
                  fontSize: '.14rem'
                }
              }
            },
            emphasis: {
                label:{
                    color:'#1C7CC9'
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: '#1C7CC9'
                }
            }
        }
    ]
}