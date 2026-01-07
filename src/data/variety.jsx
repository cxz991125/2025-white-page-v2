import { render } from "@antv/g2";
import { mergetChartOptions, getBarSeries, getImg } from "../common/utils";
import {icon1} from './icon'

export const dataList = [
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "剧名",
        width: 110,
        render: function (item) {
          const n = item[1]
          return <span style={{ color: n != '地球超新鲜' && n != '一路繁花' ? '#81bd84' : '#595959' }}>{n}</span>
        }
      },
      {
        title: "热度指数",
        width: 60,
      },
      {
        title: "播出平台",
        width: 70,
      },
    ],
    data: [
      ["1", "现在就出发第三季", "85.62 ", "腾讯视频"],
      ["2", "地球超新鲜", "82.39 ", "腾讯视频"],
      ["3", "花儿与少年同心季", "82.09 ", "芒果TV"],
      ["4", "喜人奇妙夜第二季", "81.58 ", "腾讯视频"],
      ["5", "歌手2025", "81.44 ", "芒果TV"],
      ["6", "脱口秀和Ta的朋友们第二季", "81.38 ", "腾讯视频"],
      ["7", "喜剧之王单口季第二季", "81.15 ", "爱奇艺"],
      ["8", "一路繁花", "80.77 ", "爱奇艺"],
      ["9", "乘风2025", "80.76 ", "芒果TV"],
      ["10", "哈哈哈哈哈第五季", "80.40 ", "腾讯视频,爱奇艺"],
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
        title: "剧名",
        width: 120,
      },
      {
        title: "口碑指数",
        width: 40,
      },
      {
        title: "播出平台",
        width: 90,
        render: function (item) {
          return <span>{item[3]}</span>
        }
      },
    ],
    data: [
      ["1", "现在就出发第三季", "88.35 ", "腾讯视频"],
      ["2", "花儿与少年同心季", "86.94 ", "芒果TV"],
      ["3", "开始推理吧第三季", "86.19 ", "腾讯视频"],
      ["4", "地球超新鲜", "86.17 ", "腾讯视频"],
      ["5", "快乐再出发山海季", "85.30 ", "芒果TV"],
      ["6", "脱口秀和Ta的朋友们第二季", "84.79 ", "腾讯视频"],
      ["7", "喜剧之王单口季第二季", "84.10 ", "爱奇艺"],
      ["8", "哈哈哈哈哈第五季", "81.26 ", "腾讯视频,爱奇艺"],
      ["9", "奔跑吧第九季", "81.11 ", "腾讯视频,爱奇艺,优酷"],
      ["10", "五十公里桃花坞第五季", "81.09", "腾讯视频"],
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
        title: "姓名",
        width: 60,
      },
      {
        title: "热度指数",
        width: 60,
      },
      {
        title: "代表综艺",
        width: 120,
      },
    ],
    data: [
      ["1", "范丞丞", "83.31", "现在就出发第三季</br>奔跑吧第九季"],
      ["2", "刘宇宁", "82.99", "地球超新鲜</br>开始推理吧第三季"],
      ["3", "沈腾", "81.64", "现在就出发第三季"],
      ["4", "龚俊", "81.16", "地球超新鲜</br>花儿与少年同心季"],
      ["5", "黄子韬", "80.12", "新说唱2025</br>小伙小妹换游记"],
      ["6", "陈楚生", "79.55", "歌手2025</br>快乐再出发山海季"],
      ["7", "陈赫", "79.53", "地球超新鲜</br>哈哈哈哈哈第五季"],
      ["8", "李乃文", "79.07", "地球超新鲜</br>哈哈哈哈哈第五季"],
      ["9", "张晚意", "78.51", "花儿与少年同心季"],
      ["10", "徐志胜", "78.30", "五十公里桃花坞第五季</br>令人心动的offer第七季"],
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
        title: "姓名",
        width: 60,
      },
      {
        title: "热度指数",
        width: 60,
      },
      {
        title: "代表综艺",
        width: 120,
      },
    ],
    data: [
      ["1", "孟子义", "79.36", "奔跑吧第九季</br>五十公里桃花坞第五季"],
      ["2", "王玉雯", "78.72", "地球超新鲜"],
      ["3", "金晨", "78.56", "现在就出发第三季"],
      ["4", "单依纯", "77.72", "歌手2025"],
      ["5", "那英", "77.47", "花儿与少年同心季</br>声鸣远扬2025"],
      ["6", "李沁", "76.77", "花儿与少年同心季"],
      ["7", "金靖", "76.21", "开始推理吧第三季</br>盒子里的猫第二季"],
      ["8", "谢娜", "75.91", "姐姐当家</br>这是我的西游"],
      ["9", "李雪琴", "75.24", "毛雪汪</br>五十公里桃花坞第五季"],
      ["10", "董璇", "74.26", "姐姐当家"],
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
        title: "姓名",
        width: 60,
      },
      {
        title: "口碑指数",
        width: 60,
      },
      {
        title: "代表综艺",
        width: 120,
      },
    ],
    data: [
      ["1", "沈腾", "81.50", '现在就出发第三季'],
      ["2", "范丞丞", "81.30", '奔跑吧第九季</br>现在就出发第三季'],
      ["3", "刘宇宁", "81.18", '地球超新鲜</br>开始推理吧第三季'],
      ["4", "胡先煦", "80.84", '现在就出发第三季</br>喜人奇妙夜第二季'],
      ["5", "陈楚生", "80.19", '歌手2025</br>快乐再出发山海季'],
      ["6", "龚俊", "80.18", '地球超新鲜</br>花儿与少年同心季'],
      ["7", "王安宇", "80.03", '现在就出发第三季'],
      ["8", "徐志胜", "79.94", '五十公里桃花坞第五季</br>令人心动的offer第七季'],
      ["9", "李乃文", "79.91", '地球超新鲜</br>哈哈哈哈哈第五季'],
      ["10", "陈赫", "79.67", '地球超新鲜</br>哈哈哈哈哈第五季'],
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
        title: "姓名",
        width: 60,
      },
      {
        title: "口碑指数",
        width: 60,
      },
      {
        title: "代表综艺",
        width: 120,
      },
    ],
    data: [
      ["1", "那英", "81.17", '花儿与少年同心季</br>声鸣远扬2025'],
      ["2", "孟子义", "79.73", '奔跑吧第九季</br>五十公里桃花坞第五季'],
      ["3", "陈鲁豫", "78.89", '脱口秀和Ta的朋友们第二季</br>令人心动的offer第七季'],
      ["4", "王玉雯", "78.77", '地球超新鲜'],
      ["5", "李沁", "78.57", '花儿与少年同心季'],
      ["6", "谢娜", "77.76", '姐姐当家</br>这是我的西游'],
      ["7", "单依纯", "77.43", '歌手2025'],
      ["8", "戚薇", "77.38", '妻子的浪漫旅行2025</br>姐姐妹妹抓娃娃'],
      ["9", "李宇春", "76.77", '脱口秀和Ta的朋友们第二季'],
      ["10", "李雪琴", "76.39", '毛雪汪</br>五十公里桃花坞第五季'],
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
        title: "剧名",
        width: 80,
      },
      {
        title: "分数",
        width: 70,
      },
    ],
    data: [
      ["1", "乘风2025", "145996 "],
      ["2", "演员请就位第三季", "82866 "],
      ["3", "歌手2025", "79211 "],
      ["4", "五十公里桃花坞第五季", "77494 "],
      ["5", "脱口秀和Ta的朋友们第二季", "73172 "],
      ["6", "再见爱人第五季", "69952 "],
      ["7", "一路繁花", "56965 "],
      ["8", "地球超新鲜", "50553 "],
      ["9", "现在就出发第三季", "46905 "],
      ["10", "喜人奇妙夜第二季", "42299 "],
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
  barWidth: 14,
  barGap: 0
}

const getChartData = () => {
  const data = [
    {
      name: '十个勤天',
      data: [
        [56.6, 59.6, 62.5],
        [46.6, 70.1, 82.5]
      ]
    },
    {
      name: '院人',
      data: [
        [40.9, 50.2, 49.9],
        [48.6, 55.9, 70.7]
      ]
    },
    {
      name: '0713',
      data: [
        [55.5, 69.1, 64.8],
        [81.2, 81.4, 93.4]
      ]
    }
  ]
  return data.map((item) => {
    return {
      color: ['#bedcf0', '#a7cba9'],
      legend: {
        show: false,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        top: '8%',
        left: '18%',
        textStyle: {
          fontSize: 10
        }
      },
      yAxis: {
        type: "category",
        data: ['2025', '2024', '2023'],
        axisLabel: {
          fontWeight: 'bold',
          fontSize: 12,
          show: true
        },
        name: item.name,
        nameLocation: 'center',
        nameGap: 50,
        nameRotate: 90,
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 'bold',
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
        left: '30%',
        top: '0%',
        right: '20%',
        bottom: '10%',
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        data: ["团体IP热度", "团体IP口碑"],
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          name: "团体IP热度",
          data: item.data[0],
          itemStyle: {
            borderRadius: [0, 10, 10, 0],
          },
          label: {
            show: true,
            position: 'right',
            fontSize: 8
          }
        },
        {
          type: 'bar',
          name: "团体IP口碑",
          data: item.data[1],
          itemStyle: {
            borderRadius: [0, 10, 10, 0],
          },
          label: {
            show: true,
            position: 'right',
            fontSize: 8
          }
        }
      ],
    }
  })
}

export const chartOptions = [
  {
    yAxis: {
      type: "category",
      // data: ["2021", "2022", "2023", "2024"],
      data: ["2025年", "2024年", "2023年"],
      axisLabel: {
        fontWeight: 'bold',
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
      left: '18%',
      top: '22%',
      right: '20%',
      bottom: '5%',
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [getBarSeries("#a7cba9", [182, 205, 183], {
      markPoint: {
        symbol: icon1,
        symbolSize: [80, 35],
        symbolOffset: [50, -5],
        label: {
          show: false
        },
        data: [
          {
            type: 'min'
          }
        ]
      },
      itemStyle: {
        color: "#a7cba9",
        borderRadius: [0, 10, 10, 0]
      },
      label: {
        show: true,
        position: 'insideRight',
        color: 'white',
        offset: [-20, 0]
      },
      barWidth: 18,
    })]
  },
  {
    color: ['#a7cba9', '#bedcf0'],
    legend: {
      show: false
    },
    grid: {
      left: '14%',
      top: '20%',
      // bottom: '20%',
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 80, name: 'TOP60' },
          { value: 19, name: 'TOP61-120', label: { position: 'outside', color: '#595959' } },
          { value: 1, name: 'TOP121-182', label: { position: 'outside', color: '#595959' } }
        ],
        label: {
          formatter: '{b},\n{d}%',
          overflow: 'break',
          position: 'inside',
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 20,
          textAlign: 'center',
          width: 120
        },
        labelLayout: {
          hideOverlap: false
        },
        center: ['60%', '60%']
      }
    ]
  },
  {
    yAxis: {
      type: "category",
      // data: ["2021", "2022", "2023", "2024"],
      data: ["2025年", "2024年", "2023年"],
      axisLabel: {
        fontWeight: 'bold',
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
      left: '30%',
      top: '22%',
      bottom: '5%',
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [getBarSeries("#a7cba9", [91, 114, 101], {
      itemStyle: {
        color: "#a7cba9",
        borderRadius: [0, 10, 10, 0]
      },
      label: {
        show: true,
        position: 'insideRight',
        color: 'white',
        offset: [-20, 0]
      },
      barWidth: 18,
    })],
  },
  {
    yAxis: {
      type: "category",
      // data: ["2021", "2022", "2023", "2024"],
      data: ["2025年", "2024年", "2023年"],
      axisLabel: {
        fontWeight: 'bold',
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
      left: '30%',
      top: '22%',
      bottom: '5%',
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [getBarSeries("#a7cba9", [16, 4, 2], {
      itemStyle: {
        color: "#a7cba9",
        borderRadius: [0, 10, 10, 0]
      },
      label: {
        show: true,
        position: 'insideRight',
        color: 'white',
        offset: [0, 0]
      },
      barWidth: 18,
    })],
  },
  {
    yAxis: {
      type: "category",
      // data: ["2021", "2022", "2023", "2024"],
      data: ["2025年", "2024年", "2023年"],
      axisLabel: {
        fontWeight: 'bold',
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
      left: '30%',
      top: '22%',
      bottom: '5%',
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: function () {
      const getOpt = () => {
        return {
          type: 'bar',
          barWidth: 20,
          data: [1, 2, 3, 4],
          // itemStyle: {
          //   color: color,
          //   borderRadius: [20, 20, 0, 0]
          // },
          label: {
            show: true,
            position: 'top',
          },
        }
      }
      return [getOpt()]
    }(),
  },
  {
    color: ['#5e88d3', '#85beeb', '#cec6a5', '#d67d65', '#a570c4', '#e8cd95'],
    legend: {
      show: false
    },
    grid: {
      left: '10%',
      top: '20%',
      bottom: '20%',
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          {
            value: 42.7, name: '歌手', label: {
              position: 'inside'
            }
          },
          {
            value: 41.9, name: '演员', label: {
              position: 'inside'
            }
          },
          { value: 6.2, name: '主持人' },
          { value: 3.8, name: '喜剧/脱口秀演员' },
          { value: 3.5, name: '网红' },
          { value: 1.9, name: '其他' }
        ],
        label: {
          formatter: '{b}{d}%',
          overflow: 'break'
        },
        // labelLayout: function (params) {
        //   console.log(params)
        //   const points = params.labelLinePoints;
        //   return {
        //     labelLinePoints: points
        //   };
        // },
        labelLayout: {
          hideOverlap: false
        },
        center: ['66%', '55%']
      }
    ]
  },

  {
    color: ['#bedcf0', '#a7cba9'],
    legend: {
      show: true,
      data: ["团体IP热度", "团体IP口碑"],
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      top: '8%',
      left: '18%',
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        name: '团体IP热度',
        type: 'bar',
        data: []
      },
      {
        name: '团体IP口碑',
        type: 'bar',
        data: []
      },
    ]
  }
].concat(getChartData())