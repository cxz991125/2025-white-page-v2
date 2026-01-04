import { mergetChartOptions, getBarSeries } from "../common/utils";

export const dataList = [
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "演唱会名称",
        width: 120,
      },
      {
        title: "热度指数",
        width: 40,
      },
    ],
    data: [
      ["1", "时代少年团「加冠礼」演唱会", "98.89"],
      ["2", "2025华晨宇火星演唱会", "97.42"],
      ["3", "周深2025「深深的」巡回演唱会", "94.47"],
      ["4", "「刘宇宁的」2025巡演", "93.51"],
      ["5", "2025年TOP登陆少年组合·无所畏计划·演唱会", "89.05"],
      ["6", "2025张杰未·LIVE—「开往1982」世界巡回演唱会", "87.16"],
      ["7", "王源2025宇宙超级无敌大狂欢巡回演唱会", "83.82"],
      ["8", "汪苏泷2025演唱会「十万伏特2.0」", "77.98"],
      ["9", "2025张艺兴「大航海5·闹天宫」巡回演唱会", "71.31"],
      ["10", "易烊千玺2025演唱会「礐嶨」", "70.74"]
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "歌曲名称",
        width: 80,
      },
      {
        title: "歌手",
        width: 80,
      },
      {
        title: '热度指数',
        width: 40
      }
    ],
    data: [
      ["1", "来啊", "周深", "94.29"],
      ["2", "Deadman", "蔡徐坤", "94.01"],
      ["3", "spr.", "宋亚轩", "93.90"],
      ["4", "第57次取消发送", "菲菲公主（陆绮菲）", "92.78"],
      ["5", "Jasmine", "蔡徐坤", "92.33"],
      ["6", "世界赠予我的", "王菲", "92.30"],
      ["7", "趁黎明来临前说爱吧", "梓渝", "91.90"],
      ["8", "君子了然", "十个勤天", "91.14"],
      ["9", "好风起", "周深", "90.70"],
      ["10", "泥潭", "梓渝", "90.62"],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "歌曲名称",
        width: 80,
      },
      {
        title: "歌手",
        width: 80,
      },
      {
        title: '浪潮得分',
        width: 40
      }
    ],
    data: [
      ["1", "珠玉", "单依纯", "8.95"],
      ["2", "世界赠予我的", "王菲", "8.79"],
      ["2", "一念之间－在水中", "齐豫,吴青峰", "8.79"],
      ["4", "Let   Loose", "王嘉尔", "8.69"],
      ["5", "冰山男孩与火焰少女", "许哲珮,裘德", "8.65"],
      ["5", "Fruit   Fly", "窦靖童,The Black Skirts", "8.65"],
      ["7", "我管不住我自己", "单依纯", "8.64"],
      ["8", "春日部", "林家谦", "8.60"],
      ["8", "用背脊唱情歌", "Gareth.T", "8.60"],
      ["8", "楔木", "易烊千玺", "8.60"],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "艺人",
        width: 60,
      },
      {
        title: "抽象事件",
        width: 140,
        render: function (item) {
          return <span style={{ color: '#57b7d6' }}>{item[2]}</span>
        }
      },
      {
        title: "抽象指数",
        width: 60,
      }
    ],
    data: [
      ['1', "陶喆", "“陶喆宇宙”", "99.19"],
      ['2', "单依纯", "改编版《李白》", "93.00"],
      ['3', "那艺娜", "观众齐喊“退票”", "86.32"],
      ['4', "小沈阳", "被抬下舞台", "85.77"],
      ['5', "陶喆", "哦啊啊欸欸啊啊", "85.27"],
      ['6', "徐子未", "演唱会抽象舞台设计", "77.76"],
      ['7', "那艺娜", "假唱《苹果香》", "76.19"],
      ['8', "黄誉博", "工作室发了偷拍视频", "76.11"],
      ['9', "庞麦郎", "我的父亲是瓦匠", "71.03"],
      ['10', "沈佳润", "美美桑内", "65.73"],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "歌手",
        width: 80,
      },
      {
        title: '热度指数',
        width: 40
      }
    ],
    data: [
      ["1", "周深", "88.58"],
      ["2", "宋亚轩", "88.18"],
      ["3", "严浩翔", "85.69"],
      ["4", "刘耀文", "85.24"],
      ["5", "蔡徐坤", "83.39"],
      ["6", "丁程鑫", "83.24"],
      ["7", "肖战", "83.00"],
      ["8", "刘宇宁", "82.80"],
      ["9", "贺峻霖", "82.49"],
      ["10", "张艺兴", "81.23"],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "歌手",
        width: 80,
      },
      {
        title: '热度指数',
        width: 40
      }
    ],
    data: [
      // ["1", "王菲", "80.98"],
      // ["2", "赵露思", "78.30"],
      // ["3", "鞠婧祎", "76.77"],
      // ["4", "单依纯", "75.33"],
      // ["5", "喻言", "75.30"],
      // ["6", "宋雨琦", "74.64"],
      // ["7", "刘雨昕", "74.20"],
      // ["8", "蔡依林", "74.19"],
      // ["9", "李宇春", "72.49"],
      // ["10", "白鹿", "72.46"],
      ["1", "王菲", "80.98"],
      ["2", "单依纯", "75.33"],
      ["3", "宋雨琦", "74.64"],
      ["4", "蔡依林", "74.19"],
      ["5", "李宇春", "72.49"],
      ["6", "邓紫棋", "68.63"],
      ["7", "张碧晨", "67.79"],
      ["8", "张靓颖", "67.63"],
      ["9", "刘雨昕", "67.51"],
      ["10", "那英", "67.37"],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "歌手",
        width: 80,
      },
      {
        title: '口碑指数',
        width: 40
      }
    ],
    data: [
      ["1", "周深", "88.05"],
      ["2", "陈楚生", "86.68"],
      ["3", "张艺兴", "86.25"],
      ["4", "刘宇宁", "85.19"],
      ["5", "肖战", "84.88"],
      ["6", "刘耀文", "84.32"],
      ["7", "汪苏泷", "84.19"],
      ["8", "周杰伦", "84.09"],
      ["9", "林俊杰", "83.69"],
      ["10", "檀健次", "83.17"],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "歌手",
        width: 80,
      },
      {
        title: '口碑指数',
        width: 40
      }
    ],
    data: [
      ["1", "单依纯", "86.26"],
      ["2", "王菲", "83.99"],
      ["3", "蔡依林", "81.55"],
      ["4", "邓紫棋", "81.34"],
      ["5", "张韶涵", "79.91"],
      ["6", "孙燕姿", "79.81"],
      ["7", "张靓颖", "79.47"],
      ["8", "那英", "79.38"],
      ["9", "李宝焘", "78.07"],
      ["10", "莫文蔚", "76.89"]
    ],
  },
]

const barSeriesOption = {
  label: {
    show: true,
    align: 'center',
    position: 'top',
    color: 'black',
    fontSize: 10
  },
  barWidth: 30,
  barGap: 0
}

export const chartOptions = [
  {
    legend: [
      {
        data: ['市场规模(亿元)'],
        itemWith: 8,
        itemHeight: 8,
        icon: 'circle',
        top: '10%',
        left: '20%',
      },
      {
        data: ['增幅'],
        top: '10%',
        left: '55%',
        itemWith: 10,
        itemHeight: 10,
      }
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: 'bold',
        show: false
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    grid: {
      left: '10%',
      top: '40%',
      bottom: '10%',
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2023年", "2024年", "2025年"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: 'bold',
        color: '#595959'
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [getBarSeries("#87c8dc", [1907.5, 2113.5, 2230.1], {
      name: '市场规模(亿元)',
      itemStyle: {
        color: "#87c8dc",
        borderRadius: [10, 10, 0, 0]
      },
      label: {
        show: true,
        position: 'top',
        color: 'black',
        offset: [0, -10]
      },
      barWidth: 26,
    }), {
      name: '增幅',
      type: 'line',
      data: [1900, 800, 400],
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        color: '#c1d1b6'
      },
      itemStyle: {
        color: '#c1d1b6'
      },
      label: {
        show: true,
        position: 'left',
        offset: [-6, 10],
        formatter: function (params) {
          const i = params.dataIndex
          switch (i) {
            case 0:
              return '22.68%'
            case 1:
              return '10.80%'
            case 2:
              return '5.52%'
          }
        }
      }
    }],
  },
  {
    color: ['#a570c4', '#85beeb', '#5e88d3'],
    legend: {
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      top: '8%',
      left: '10%',
      textStyle: {
        fontSize: 10
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: 'bold',
        show: false
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    grid: {
      left: '10%',
      top: '30%',
      bottom: '10%',
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["在线k歌", "在线音乐", "音乐短视频", "音乐直播"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: 'bold',
        interval: 0,
        color: '#595959'
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      getBarSeries("#c1d1b6", [{
        value: 130,
        label: {
          offset: [0, -10],
        }
      }, 293.5, 538.5, 1192.3], Object.assign(
        barSeriesOption, 
        { name: '2024年', 
          barWidth: 16, 
          label: { 
            show: true, 
            fontSize: 10, 
            position: 'top', 
            formatter: function ({dataIndex}) { return [89.2, 293.5, 538.5, 1192.3][dataIndex] }} })),
      getBarSeries("#87c8dc", [{
        value: 74.9,
        label: {
          offset: [0, 0],
        }
      }, 352.8, 566.0, 1236.4], Object.assign(barSeriesOption, { name: '2025年', barWidth: 16, label: { offset: [0, -12], show: true, position: 'top', fontSize: 10,formatter: function ({value}) { return value.toFixed(1) }  } })),
    ],
  },
  {
    legend: [
      {
        data: ['票房(亿)'],
        itemWith: 8,
        itemHeight: 8,
        icon: 'circle',
        top: '10%',
        left: '24%'
      },
      {
        data: ['场次'],
        top: '10%',
        left: '50%',
        icon: '',
        itemWith: 10,
        itemHeight: 10,
      }
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: 'bold',
        show: false
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    grid: {
      left: '10%',
      top: '40%',
      bottom: '10%',
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2023年", "2024年", "2025年"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: 'bold',
        color: '#595959'
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [getBarSeries("#87c8dc", [157.0, 286.0, 362.3], {
      name: '票房(亿)',
      itemStyle: {
        color: "#87c8dc",
        borderRadius: [10, 10, 0, 0]
      },
      label: {
        show: true,
        formatter: function ({value}) { return value.toFixed(1) },
        position: 'top',
        color: '#585858'
      },
      barWidth: 26,
    }), {
      name: '场次',
      type: 'line',
      data: [400, 580, 700],
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        color: '#c1d1b6'
      },
      itemStyle: {
        color: '#c1d1b6'
      },
      label: {
        show: true,
        position: 'top',
        color: '#585858',
        formatter: function (params) {
          const i = params.dataIndex
          switch (i) {
            case 0:
              return '2823'
            case 1:
              return '3552'
            case 2:
              return '4694'
          }
        }
      }
    }],
  },
]

