import { getBarSeries } from "@/common/utils";

const test = [
  ['1', '', ''],
  ['2', '', ''],
  ['3', '', ''],
  ['4', '', ''],
  ['5', '', ''],
  ['6', '', ''],
  ['7', '', ''],
  ['8', '', ''],
  ['9', '', ''],
  ['10', '', ''],
]

export const dataList = [
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "影片名称",
        width: 120,
      },
      {
        title: "票房(亿元)",
        width: 60,
      },
    ],
    data: [
      ["1", "哪吒之魔童闹海", "154.5"],
      ["2", "疯狂动物城2", "36.3"],
      ["3", "唐探1900", "36.2"],
      ["4", "南京照相馆", "30.2"],
      ["5", "731", "19.5"],
      ["6", "浪浪山小妖怪", "17.2"],
      ["7", "捕风追影", "12.7"],
      ["8", "封神第二部：战火西岐", "12.4"],
      ["9", "熊出没·重启未来", "8.2"],
      ["10", "长安的荔枝", "6.9"],
    ],
    color: {
      '01': '#8e769c',
      '11': '#8e769c',
      '51': '#8e769c',
      '81': '#8e769c',
      '02': '#8e769c',
      '12': '#8e769c',
      '52': '#8e769c',
      '82': '#8e769c',
    }
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "影片名称",
        width: 120,
      },
      {
        title: "总票房(亿元)",
        width: 60,
      },
      {
        title: '国家/上映年份',
        width: 80
      }
    ],
    data: [
      ["1", "阿凡达", "212.0", "美国	/2009年 "],
      ["2", "复仇者联盟4：终局之战", "203.0", "美国	/2019年 "],
      ["3", "阿凡达：水之道", "168.3", "美国	/2022年 "],
      ["4", "泰坦尼克号", "164.2", "美国	/1997年 "],
      ["5", "哪吒之魔童闹海", "159.5", "中国	/2025年 "],
      ["6", "星球大战：原力觉醒", "150.2", "美国	/2015年 "],
      ["7", "复仇者联盟3：无限战争", "148.8", "美国	/2018年 "],
      ["8", "蜘蛛侠：英雄无归", "141.6", "美国	/2021年 "],
      ["9", "头脑特工队2", "123.2", "美国	/2024年 "],
      ["10", "侏罗纪世界", "121.2", "美国	/2015年 "],
    ],
    color: {
      '41': '#8e769c',
      '42': '#8e769c',
      '43': '#8e769c'
    }
  },
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true
      },
      {
        title: "电影演员",
        width: 120,
      },
      {
        title: "综合指数",
        width: 60,
      }
    ],
    data: [
      ["1", "刘昊然", "81.8"],
      ["2", "黄渤", "80.6"],
      ["3", "成龙", "80.3"],
      ["4", "肖战", "80.0"],
      ["5", "易烊千玺", "79.3"],
      ["6", "于适", "79.1"],
      ["7", "王宝强", "79.0"],
      ["8", "朱一龙", "78.8"],
      ["9", "陈佩斯", "78.8"],
      ["10", "吴磊", "78.6"],
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
        title: "电影演员",
        width: 120,
      },
      {
        title: "综合指数",
        width: 60,
      }
    ],
    data: [
      ["1", "马丽", "80.7"],
      ["2", "杨幂", "76.5"],
      ["3", "赵丽颖", "76.1"],
      ["4", "张子枫", "75.8"],
      ["5", "高叶", "75.7"],
      ["6", "章子怡", "75.7"],
      ["7", "宋佳", "75.1"],
      ["8", "张小斐", "75.0"],
      ["9", "庄达菲", "74.9"],
      ["10", "兰西雅", "74.6"],
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
        title: "电影演员",
        width: 120,
      },
      {
        title: "口碑指数",
        width: 60,
      }
    ],
    data: [
      ["1", "梁家辉", "82.2"],
      ["2", "成龙", "81.2"],
      ["3", "刘昊然", "79.7"],
      ["4", "黄渤", "79.1"],
      ["5", "陈佩斯", "78.9"],
      ["6", "肖央", "78.3"],
      ["7", "董成鹏", "77.6"],
      ["8", "王宝强", "75.8"],
      ["9", "王传君", "75.7"],
      ["10", "白客", "75.4"],
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
        title: "电影演员",
        width: 120,
      },
      {
        title: "口碑指数",
        width: 60,
      }
    ],
    data: [
      ["1", "宋佳", "79.7"],
      ["2", "张子枫", "76.7"],
      ["3", "马丽", "75.3"],
      ["4", "章子怡", "74.9"],
      ["5", "高叶", "74.7"],
      ["6", "赵丽颖", "74.1"],
      ["7", "兰西雅", "73.6"],
      ["8", "张小斐", "73.2"],
      ["9", "庄达菲", "73.0"],
      ["10", "倪妮", "72.3"],
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
        title: "角色",
        width: 40,
      },
      {
        title: "演员/配音/作品",
        width: 100,
      },
      {
        title: '喜爱度',
        width: 40
      }
    ],
    data: [
      ["1","哪吒","吕艳婷/囧森瑟夫</br>哪吒之魔童闹海", "93.9"],
      ["2","敖丙","瀚墨</br>哪吒之魔童闹海", "87.5"],
      ["3","熊大","张伟</br>熊出没·重启未来", "85.9"],
      ["4","敖光","雨辰</br>哪吒之魔童闹海", "84.1"],
      ["5","郭靖","肖战</br>射雕英雄传：侠之大者", "83.9"],
      ["6","尼克","杰森·贝特曼/张震</br>疯狂动物城2", "83.7 "],
      ["7","朱迪","金妮弗·古德温/季冠霖</br>疯狂动物城2", "83.6 "],
      ["8","申公豹","杨卫</br>哪吒之魔童闹海", "82.8 "],
      ["9","刘春和","易烊千玺</br>小小的我", "81.9 "],
      ["10","毕正明","王安宇</br>毕正明的证明", "81.7 "],
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
        title: "电影演员",
        width: 120,
      },
      {
        title: "热度",
        width: 60,
      }
    ],
    data: [
      ["1","范丞丞","75.0"],
      ["2","丁程鑫","74.8"],
      ["3","王安宇","73.0"],
      ["4","此沙","68.7"],
      ["5","张婧仪","68.2"],
      ["6","庄达菲","67.9"],
      ["7","兰西雅","66.0"],
      ["8","张艺凡","65.4"],
      ["9","周政杰","63.2"],
      ["10","王圣迪","62.9"],
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
        title: "作品",
        width: 120,
      },
      {
        title: "分数",
        width: 60,
      }
    ],
    data: [
      ["1","哪吒之魔童闹海","235670"],
      ["2","731 ","113448"],
      ["3","南京照相馆","96694"],
      ["4","酱园弄·悬案","94224"],
      ["5","射雕英雄传：侠之大者","68328"],
      ["6","唐探1900","63814"],
      ["7","长安的荔枝","61296"],
      ["8","封神第二部：战火西岐","38634"],
      ["9","捕风追影","37181"],
      ["10","浪浪山小妖怪","36414"],
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
        title: "角色",
        width: 40,
      },
      {
        title: "演员/作品",
        width: 100,
      },
      {
        title: '分数',
        width: 40
      }
    ],
    data: [
      ["1","哪吒","吕艳婷、囧森瑟夫</br>哪吒之魔童闹海", "224974"],
      ["2","毓秀","高叶</br>南京照相馆", "19661"],
      ["3","詹周氏","章子怡</br>酱园弄·悬案", "18909"],
      ["4","郭靖","肖战</br>射雕英雄传：侠之大者", "18685"],
      ["5","李善德","董成鹏</br>长安的荔枝", "17746"],
      ["6","李淇","檀健次</br>震耳欲聋", "16910"],
      ["7","高月香","赵丽颖</br>向阳·花", "16514"],
      ["8","臧健和","马丽</br>水饺皇后", "16458"],
      ["9","王许梅","杨幂</br>酱园弄·悬案", "15646"],
      ["10","黄蓉","庄达菲</br>射雕英雄传：侠之大者", "14873"],
    ],
  },
];

const barSeriesOption = {
  label: {
    show: true,
    align: "center",
    position: "top",
    color: "black",
    fontSize: 10,
  },
  barWidth: 14,
  barGap: 0,
};

const getLineOption = (data, color, name) => {
  return {
    name,
    type: "line",
    data,
    symbol: "circle",
    symbolSize: 8,
    lineStyle: {
      color: color
    },
    itemStyle: {
      color: color
    },
  };
};

export const chartOptions = [
  {
    color: ["#a570c4", "#85beeb", "#5e88d3"],
    legend: [
      {
        data: ["总票房(亿元)"],
        icon: "circle",
        itemWidth: 8,
        itemHeight: 8,
        top: "6%",
        left: "26%",
        textStyle: {
          fontSize: 10,
        },
      },
      {
        data: ["总票房增幅"],
        top: "6%",
        itemHeight: 8,
        left: "50%",
        textStyle: {
          fontSize: 10,
        },
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: "bold",
        show: false,
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
      left: "10%",
      top: "20%",
      bottom: "10%",
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: "bold",
        interval: 0,
        color: "#595959",
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      getBarSeries(
        "#9f8fa6",
        [642.7, 204.2, 472.6, 300.7, 549.2, 425.0, 504.5],
        Object.assign(barSeriesOption, { name: "总票房(亿元)" })
      ),
      {
        name: "总票房增幅",
        type: "line",
        symbol: "emptyCircle",
        data: [1100, 950, 1400, 1000, 1300, 900, 1000].map((item, index) => {
          const val = [6, -68.2, 131.5, -36.4, 82.6, -22.6, 18.7][index]
          return {
            value: item,
            label: {
              position: val >= 0 ? 'top' : 'bottom',
              color: val >= 0 ? '#595959' : 'red'
            }
          }
        }),
        symbolSize: 8,
        lineStyle: {
          color: "#b0dce8",
        },
        itemStyle: {
          color: "#b0dce8",
        },
        label: {
          show: true,
          distance: 5,
          fontSize: 10,
          // position: 'top',
          position: function (params) {
            console.log(params)
            return 'top'
          },
          formatter: function ({ dataIndex }) {
            return ['6%', '-68.2%', '131.5%', '-36.4%', '82.6%', '-22.6%', '18.7%'][dataIndex]
          }
        },
      },
    ],
  },
  {
    color: ['#e08f85', '#9f8fa6'],
    legend: {
      show: false,
    },
    grid: {
      left: '10%',
      top: '30%',
      // bottom: '0%',
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
          { value: 30.6, name: '40亿+影片票房\n《哪吒之魔童闹海》' },
          { value: 69.4, name: '40亿以下影片票房' },
        ],
        label: {
          formatter: '{b},\n{d}%',
          overflow: 'break',
          position: 'inside',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 20,
          textAlign: 'center',
        },
        labelLayout: {
          hideOverlap: false
        },
        center: ['50%', '55%']
      }
    ]
  },
  {
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
      top: '10%',
      bottom: '14%',
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["1-10亿票房", "10-20亿票房", "20-30亿票房", "30-40亿票房", "40亿+票房"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: 'bold',
        fontSize: 8,
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
    series: [getBarSeries("#9f8fa6", [42, 4, 0, 3, 1], {

      itemStyle: {
        color: "#9f8fa6",
        borderRadius: [10, 10, 0, 0]
      },
      barGap: '30%',
      label: {
        show: true,
        position: 'top',
        fontSize: 10,
        color: '#585858'
      },
      barWidth: 20,
    })],
  },
  {
    color: ["#b0dce8", "#df8e84", "#9f8fa6"],
    legend: {
      show: true,
      itemWidth: 20,
      itemHeight: 8,
      left: 'center',
      top: "4%",
      textStyle: {
        fontSize: 10
      },
      data: ["动画电影票房(亿元)", "动画电影数量(部)", "动画电影票房占比"]
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: "bold",
        show: false,
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
      left: "10%",
      top: "30%",
      bottom: "10%",
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2021", "2022", "2023", "2024", "2025"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: "bold",
        interval: 0,
        color: "#595959",
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
        name: "动画电影数量(部)",
        type: "line",
        data: [1100, 1080, 1090, 1085, 1070],
        symbolSize: 8,
        label: {
          show: true,
          fontSize: 10,
          formatter: function ({ dataIndex }) {
            return [61, 46, 62, 60, 56][dataIndex]
          }
        }
      },
      {
        name: "动画电影票房占比",
        type: "line",
        data: [600, 610, 620, 630, 750],
        symbolSize: 8,
        label: {
          show: true,
          fontSize: 10,
          formatter: function ({ dataIndex }) {
            return ['8.8%', '11.5%', '14.7%', '16.7%', '50.2%'][dataIndex]
          }
        }
      },
      {

        name: "动画电影票房(亿元)",
        type: "line",
        data: [100, 80, 120, 80, 290],
        symbolSize: 8,
        label: {
          show: true,
          fontSize: 10,
          formatter: function ({ dataIndex }) {
            return [41.8, 34.7, 80.5, 70.8, 253.4][dataIndex]
          }
        }
      },
    ],
  },
  {
    color: ["#a570c4", "#85beeb", "#5e88d3"],
    legend: [
      {
        data: ["影院数（家）"],
        icon: "circle",
        itemWidth: 8,
        itemHeight: 8,
        top: "6%",
        left: "28%",
        textStyle: {
          fontSize: 10,
        },
      },
      {
        data: ["银幕数（块）"],
        top: "6%",
        itemHeight: 8,
        left: "50%",
        textStyle: {
          fontSize: 10,
        },
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: "bold",
        show: false,
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
      left: "10%",
      top: "30%",
      bottom: "20%",
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: "bold",
        interval: 0,
        color: "#595959",
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      getBarSeries(
        "#9f8fa6",
        [100, 130, 140, 150, 150, 170, 180],
        Object.assign(barSeriesOption, {
          name: "影院数（家）", label: {
            show: true,
            position: 'top',
            fontSize: 10,
            color: '#585858',
            formatter: function ({ dataIndex }) {
              return [11494, 12057, 12318, 12638, 12792, 13331, 13565][dataIndex]
            }
          }
        })
      ),
      {
        name: "银幕数（块）",
        type: "line",
        data: [200, 230, 240, 250, 250, 270, 280],
        symbolSize: 8,
        lineStyle: {
          color: "#b0dce8",
        },
        itemStyle: {
          color: "#b0dce8",
        },
        label: {
          show: true,
          distance: 5,
          fontSize: 10,
          position: 'top',
          formatter: function ({ dataIndex }) {
            return [68950, 72889, 75472, 77255, 78005, 81465, 83268][dataIndex]
          }
        },
      },
    ],
  },
  {
    color: ["#a570c4", "#85beeb", "#5e88d3"],
    legend: [
      {
        data: ["人次(亿人)"],
        icon: "circle",
        itemWidth: 8,
        itemHeight: 8,
        top: "6%",
        left: "28%",
        textStyle: {
          fontSize: 10,
        },
      },
      {
        data: ["增幅"],
        top: "6%",
        itemHeight: 8,
        left: "50%",
        textStyle: {
          fontSize: 10,
        },
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        fontWeight: "bold",
        show: false,
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
      left: "10%",
      top: "15%",
      right: '10%',
      bottom: "10%",
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: "bold",
        fontSize: 10,
        color: "#595959",
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      getBarSeries(
        "#9f8fa6",
        [642.7, 204.2, 472.6, 300.7, 549.2, 425.0, 504.5],
        Object.assign(barSeriesOption, {
          name: "人次(亿人)", label: {
            show: true,
            position: 'top',
            fontSize: 10,
            color: '#585858',
            formatter: function ({ dataIndex }) {
              return [17.2, 5.5, 11.7, 7.1, 13.0, 10.1, 11.9][dataIndex]
            }
          }
        })
      ),
      {
        name: "增幅",
        type: "line",
        data: [1100, 950, 1400, 1000, 1300, 1100, 1200].map((item, index) => {
          const val = [0.2, -68.1, 112.7, -39.0, 82.5, -22.1, 17.4][index]
          return {
            value: item,
            label: {
              position: val >= 0 ? 'top' : 'bottom',
              color: val >= 0 ? '#595959' : 'red'
            }
          }
        }),
        symbolSize: 8,
        lineStyle: {
          color: "#b0dce8",
        },
        itemStyle: {
          color: "#b0dce8",
        },
        label: {
          show: true,
          distance: 5,
          // position: 'top',
          fontSize: 10,
          formatter: function ({ dataIndex }) {
            return ['0.2%', '-68.1%', '112.7%', '-39.0%', '82.5%', '-22.1%', '17.4%'][dataIndex]
          }
        },
      },
    ],
  },
  {
    legend: {
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      left: 'center',
      top: "4%",
      textStyle: {
        fontSize: 10
      },
      data: ['30岁以下', '30 - 34岁', '35 - 39岁', '40岁及以上']
    },
    yAxis: {
      type: "category",
      data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      axisLabel: {
        fontWeight: 'bold',
        fontSize: 10
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
      left: '13%',
      top: '15%',
      bottom: '5%',
      right: '4%'
    },
    xAxis: {
      type: "value",
      min: 30,
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
    series: [getBarSeries("#9f8fa6", [62.5, 59.0, 61.3, 58.5, 56.0, 55.0, 50.8], {
      name: '30岁以下',
      stack: 'total',
      itemStyle: {
        color: "#9f8fa6",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    }),
    getBarSeries("#df8e84", [12.5, 14.0, 13.0, 13.5, 13.0, 12.0, 14.2], {
      name: '30 - 34岁',
      stack: 'total',
      itemStyle: {
        color: "#df8e84",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    }),
    getBarSeries("#b0dce8", [15.0, 17.0, 18.0, 18.0, 20.0, 22.0, 22.6], {
      name: '35 - 39岁',
      stack: 'total',
      itemStyle: {
        color: "#b0dce8",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'black',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    }),
    getBarSeries("#b1c0d3", [10.0, 10.0, 7.7, 10.0, 11.0, 11.0, 12.4], {
      name: '40岁及以上',
      stack: 'total',
      barMinHeight: 40,
      itemStyle: {
        color: "#b1c0d3",
        borderRadius: [0, 10, 10, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    })],
  },
  {
    legend: {
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      left: 'center',
      top: "4%",
      textStyle: {
        fontSize: 10
      },
      data: ['1线城市', '2线城市', '3线城市', '4线城市', '5线城市']
    },
    yAxis: {
      type: "category",
      data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      axisLabel: {
        fontWeight: 'bold',
        fontSize: 10,
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
      left: '13%',
      top: '15%',
      bottom: '5%',
      right: '4%'
    },
    xAxis: {
      type: "value",
      min: 30,
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
    series: [getBarSeries("#9f8fa6", [19.1, 17.6, 16.7, 14.9, 16.5, 16.3, 15.2], {
      name: '1线城市',
      stack: 'total',
      itemStyle: {
        color: "#9f8fa6",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    }),
    getBarSeries("#df8e84", [39.1, 38.8, 37.1, 37.0, 37.7, 37.0, 35.5], {
      name: '2线城市',
      stack: 'total',
      itemStyle: {
        color: "#df8e84",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    }),
    getBarSeries("#b0dce8", [19.2, 19.4, 20.1, 20.7, 20.2, 20.5, 20.9], {
      name: '3线城市',
      stack: 'total',
      itemStyle: {
        color: "#b0dce8",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'black',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 18,
    }),
    getBarSeries("#b1c0d3", [15.3, 16.4, 17.7, 18.9, 17.6, 18.0, 19.2], {
      name: '4线城市',
      stack: 'total',
      itemStyle: {
        color: "#b1c0d3",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 24,
    }),
    getBarSeries("#d6d6d6", [7.3, 7.8, 8.4, 8.6, 8.1, 8.2, 9.3], {
      name: '5线城市',
      stack: 'total',
      barMinHeight: 30,
      itemStyle: {
        color: "#d6d6d6",
        borderRadius: [0, 10, 10, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'black',
        fontSize: 10,
        formatter: '{c}%'
      },
      barWidth: 24,
    })],
  },
];
