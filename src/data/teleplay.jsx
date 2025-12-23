import { getBarSeries, getImg, getImgPath } from "@/common/utils";

const imgPath = getImgPath("teleplay/");

const getLineOption = (data, color, name) => {
  return {
    name,
    type: "line",
    data,
    // symbol: "pin",
    symbolSize: 8,
    lineStyle: {
      color: color,
      width: 4
    },
    label: {
      show: true,
    },
    itemStyle: {
      color: color
    },
  };
};

export const dataList = [
  {
    columns: [
      {
        title: "排名",
        width: 40,
        isRank: true,
      },
      {
        title: "剧名",
        width: 120,
      },
      {
        title: "热度指数",
        width: 60,
      },
    ],
    data: [
      ["1", "藏海传", "81.12"],
      ["2", "许我耀眼", "79.55"],
      ["3", "国色芳华", "78.60"],
      ["4", "雁回时", "77.48"],
      ["5", "生万物", "77.24"],
      ["6", "折腰", "76.36"],
      ["7", "书卷一梦", "75.81"],
      ["8", "凡人修仙传", "75.70"],
      ["9", "赴山海", "75.51"],
      ["10", "难哄", "75.26"],
    ],
    color: {
      '01': '#e2a365',
      '21': '#e2a365',
      '31': '#e2a365',
      '51': '#e2a365',
      '61': '#e2a365',
      '71': '#e2a365',
      '81': '#e2a365'
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
        title: "剧名",
        width: 120,
      },
      {
        title: '口碑指数',
        width: 60
      }
    ],
    data: [
      ['1', '无尽的尽头', '88.49'],
      ['2', '国色芳华', '87.77'],
      ['3', '藏海传', '87.63'],
      ['4', '唐朝诡事录之长安', '86.33'],
      ['5', '沙尘暴', '84.97'],
      ['6', '沉默的荣耀', '84.56'],
      ['7', '归队', '84.39'],
      ['8', '生万物', '84.10'],
      ['9', '扫毒风暴', '83.65'],
      ['10', '异人之下之决战！碧游村', '83.62'],
    ],
    color: {
      '01': '#e2a365',
      '31': '#e2a365',
      '41': '#e2a365',
      '51': '#e2a365',
      '61': '#e2a365',
      '81': '#e2a365'
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
        title: "剧名",
        width: 120,
      },
      {
        title: '热度指数',
        width: 60
      }
    ],
    data: [
      ['1', '玫瑰的故事', '81.7'],
      ['2', '承欢记', '78.1'],
      ['3', '在暴雪时分', '77.4'],
      ['4', '你比星光美丽', '75.7'],
      ['5', '春色寄情人', '74.7'],
      ['6', '半熟男女', '74.1'],
      ['7', '要久久爱', '73.6'],
      ['8', '舍不得星星', '73.5'],
      ['9', '你也有今天', '68.3'],
      ['10', '迎风的青春', '68.1'],
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
        title: '女性TGI指数',
        width: 60
      }
    ],
    data: [
      ['1', '玫瑰的故事', '128.0'],
      ['2', '永夜星河', '126.7'],
      ['3', '长相思第二季', '125.1'],
      ['4', '颜心记', '124.8'],
      ['5', '在暴雪时分', '124.7'],
      ['6', '七夜雪', '123.6'],
      ['7', '小巷人家', '123.4'],
      ['8', '珠帘玉幕', '122.2'],
      ['9', '墨雨云间', '121.9'],
      ['10', '度华年', '121.0']

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
        title: '男性TGI指数',
        width: 60
      }
    ],
    data: [
      ['1', '走向大西南', '210.0'],
      ['2', '塞上迷情', '201.3'],
      ['3', '边水往事', '189.2'],
      ['4', '庆余年第二季', '184.1'],
      ['5', '梦想城', '180.5'],
      ['6', '我们的队伍向太阳', '178.8'],
      ['7', '前途无量', '178.3'],
      ['8', '西北岁月', '172.0'],
      ['9', '暗夜与黎明', '171.5'],
      ['10', '新生', '169.7']
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
        width: 120,
      },
      {
        title: '综合热度',
        width: 60
      }
    ],
    data: [
      ['1', '张若昀', '81.2'],
      ['2', '王一博', '80.0'],
      ['3', '李光洁', '78.0'],
      ['4', '林更新', '77.8'],
      ['5', '吴镇宇', '77.4'],
      ['6', '胡歌', '77.3'],
      ['7', '丁禹兮', '77.1'],
      ['8', '王安宇', '76.3'],
      ['9', '王星越', '76.2'],
      ['10', '檀健次', '76.0'],
    ],
  },
  {
    columns: [
      {
        title: "排名",
        width: 100,
        isRank: true
      },
      {
        title: "姓名",
        width: 120,
      },
      {
        title: '综合热度',
        width: 60
      }
    ],
    data: [
      ['1', '刘亦菲', '82.4'],
      ['2', '赵丽颖', '81.2'],
      ['3', '杨紫', '79.5'],
      ['4', '李沁', '79.2'],
      ['5', '虞书欣', '79.1'],
      ['6', '唐嫣', '78.1'],
      ['7', '宋佳', '77.7'],
      ['8', '马伊琍', '77.2'],
      ['9', '辛芷蕾', '76.9'],
      ['10', '吴谨言', '76.8'],
    ],
  },
  {
    columns: [
      {
        title: "姓名",
        width: 70,
        render: (item, index) => {
          return (<div className="flex items-center">
            <img className="w-30px h-30px mr-10px" src={getImg(imgPath(`tou${index}.png`))}></img>
            <span className="block w-30px">{item[0]}</span>
          </div>)
        }
      },
      {
        title: "2025年破10亿短剧数量",
        width: 70,
      },
      {
        title: '关联短剧数量',
        width: 60
      }
    ],
    data: [
      ['韩雨彤', '7', '30'],
      ['李柯以', '5', '37'],
      ['郭宇欣', '5', '36'],
      ['王培延', '4', '29'],
      ['曾辉 ', '4', '27'],
      ['刘萧旭', '4', '26'],
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
        width: 120,
      },
      {
        title: '综合热度',
        width: 60
      }
    ],
    data: [
      ['1', '肖战', '81.23'],
      ['2', '李现', '78.20'],
      ['3', '刘宇宁', '77.84'],
      ['4', '成毅', '77.68'],
      ['5', '檀健次', '76.80'],
      ['6', '白敬亭', '75.36'],
      ['7', '张凌赫', '74.75'],
      ['8', '杨洋', '74.72'],
      ['9', '侯明昊', '74.53'],
      ['10', '陈伟霆', '73.23'],
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
        width: 120,
      },
      {
        title: '综合热度',
        width: 60
      }
    ],
    data: [
      ['1', '杨紫', '80.34'],
      ['2', '赵露思', '78.14'],
      ['3', '杨幂', '78.06'],
      ['4', '白鹿', '77.67'],
      ['5', '迪丽热巴', '77.46'],
      ['6', '李一桐', '76.70'],
      ['7', '张婧仪', '76.20'],
      ['8', '田曦薇', '75.17'],
      ['9', '陈都灵', '74.77'],
      ['10', '陈妍希', '74.43']
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
        width: 120,
      },
      {
        title: '口碑指数',
        width: 60
      }
    ],
    data: [
      ['1', '李现', '84.28'],
      ['2', '彭昱畅', '83.75'],
      ['3', '李乃文', '83.51'],
      ['4', '肖战', '80.08'],
      ['5', '张译', '79.52'],
      ['6', '王宝强', '78.96'],
      ['7', '秦昊', '78.52'],
      ['8', '欧豪', '78.32'],
      ['9', '倪大红', '77.81'],
      ['10', '黄轩', '77.74']
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
        width: 120,
      },
      {
        title: '口碑指数',
        width: 60
      }
    ],
    data: [
     ['1', '杨紫', '86.81'],
    ['2', '赵丽颖', '83.79'],
    ['3', '杨幂', '81.32'],
    ['4', '孙俪', '80.70'],
    ['5', '蒋欣', '79.99'],
    ['6', '任素汐', '79.45'],
    ['7', '张婧仪', '79.37'],
    ['8', '高叶', '78.89'],
    ['9', '赵露思', '78.61'],
    ['10', '李庚希', '77.81']
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
        width: 60,
      },
    {
      title: '演员/作品',
      width: 120
    },
      {
        title: '分数',
        width: 60
      }
    ],
    data: [
      ['1', '藏海', '肖战《藏海传》', '76235'],
      ['2', '许妍', '赵露思《许我耀眼》', '48051'],
      ['3', '宁绣绣', '杨幂《生万物》', '43864'],
      ['4', '胡曼黎', '孙俪《蛮好的人生》', '29949'],
      ['5', '吴石', '于和伟《沉默的荣耀》', '28944'],
      ['6', '许七安', '于和伟《沉默的荣耀》', '27543'],
      ['7', '何家丽', '梅婷/沈月《六姊妹》', '27205'],
      ['8', '萧秋水/李沉舟/肖明明', '成毅《赴山海》', '26661'],
      ['9', '何惟芳', '杨紫《国色芳华》', '26575'],
      ['10', '魏劭', '刘宇宁《折腰》', '25427']
    ],
  },
];

const barSeriesOption = {
  label: {
    show: true,
    align: 'center',
    position: 'inside',
    color: 'white',
    fontSize: 10
  },
  barWidth: 20,
  barGap: 0.1
}

const barSeriesOption2 = {
  label: {
    show: true,
    align: 'center',
    position: 'right',
    color: 'black',
    fontSize: 10,
    offset: [14, 0]
  },
  barWidth: 14,
  barGap: 0,
  itemStyle: {
    borderRadius: [0, 20, 20, 0]
  },
}

const barSeriesOption3 = {
  label: {
    show: true,
    align: 'center',
    position: 'top',
    color: 'black',
    fontSize: 8
  },
  barWidth: 16,
  barGap: 0
}

export const chartOptions = [
  {
    color: ['#a570c4', '#85beeb', '#5e88d3'],
    legend: {
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      top: '14%',
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
      }
    },
    grid: {
      left: '10%',
      top: '30%',
      bottom: '10%',
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0],
      data: ["2021年", '2022年', '2023年', '2024年', '2025年'],
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
      getBarSeries("#f9d09a", [1671, 1132, 1099, 1102, 897], Object.assign(barSeriesOption3, { name: '备案数量' })),
      getBarSeries("#efbfac", [426, 411, 355, 281, 214], Object.assign(barSeriesOption3, { name: '发行数量' })),
      getBarSeries("#c6c4b9", [330, 298, 283, 249, 251], Object.assign(barSeriesOption3, { name: '在更数量' })),
    ],
  },

  {
    color: ['#efbfac', '#f9d09a', '#c6c4b9'],
    legend: {
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      top: '10%',
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
      }
    },
    grid: {
      left: '10%',
      top: '14%',
      bottom: '20%',
      height: '70%'
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0],
      data: ['2023年', '2024年', '2025年'],
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
    series: function () {
      const getOpt = (name, data, radius) => {
        return {
          name,
          stack: 'total',
          label: {
            show: true,
            align: 'center',
            position: 'inside',
            color: 'white',
            fontSize: 10,
            offset: [0, 0],
            formatter: '{c}%'
          },
          zlevel: 1,
          barWidth: 26,
          barGap: 0,
          itemStyle: {
            borderRadius: radius || [0, 0, 0, 0]
          },
          markLine: {
            label: {
              show: false
            },
            symbol: 'none',
            lineStyle: {
              type: 'dashed',
              color: '#a6a6a6'
            },
            z: 1,
            // data: [[{ type: 'average' }, { type: 'median' }]]
            data
          }
        }
      }
      return [
        getBarSeries("#efbfac", [27, 33, 33], getOpt("两周以内", [[{ xAxis: '2023年', yAxis: 27 }, { xAxis: '2024年', yAxis: 33 }], [{ xAxis: '2024年', yAxis: 33 }, { xAxis: '2025年', yAxis: 33 }]])),
        getBarSeries("#f9d09a", [40, 40, 43], getOpt("两周以上 - 三周以内", [[{ xAxis: '2023年', yAxis: 66 }, { xAxis: '2024年', yAxis: 68 }], [{ xAxis: '2024年', yAxis: 68 }, { xAxis: '2025年', yAxis: 72 }]])),
        getBarSeries("#c6c4b9", [33, 28, 24], getOpt("三周以上", [[{ xAxis: '2023年', yAxis: 90 }, { xAxis: '2024年', yAxis: 90 }], [{ xAxis: '2024年', yAxis: 90 }, { xAxis: '2025年', yAxis: 90 }]], [20, 20, 0, 0])),
      ]
    }()
  },
  {
    legend: {
      show: true,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      top: '10%',
      textStyle: {
        fontSize: 10
      }
    },
    yAxis: {
      type: "category",
      // data: ["2021", "2022", "2023", "2024"],
      data: ["2023年", "2024年", "2025年"],
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
      left: '26%',
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
    series: [getBarSeries("#f9d09a", [54.9, 52.2, 69.1], {
      stack: 'total',
      name: 'TOP50剧集品牌总量占比',
      itemStyle: {
        color: "#f9d09a",
        borderRadius: [0, 0, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        offset: [2, 0],
        formatter: '{c}%'
      },
      barWidth: 22,
    }),
    getBarSeries("#c6c4b9", [45.1, 47.8, 30.9], {
      stack: 'total',
      name: '其他',
      itemStyle: {
        color: "#c6c4b9",
        borderRadius: [0, 20, 20, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        offset: [2, 0],
        formatter: '{c}%'
      },
      barWidth: 22,
    })],
  },
  {
    legend: [
      {
        data: ['云包场剧集数量'],
        itemWith: 8,
        itemHeight: 8,
        icon: 'circle',
        top: '10%',
        left: '12%',
        textStyle: {
          color: '#595959'
        }
      },
      {
        data: ['云包场剧集数量占比'],
        top: '10%',
        left: '50%',
        itemWith: 10,
        itemHeight: 10,
         textStyle: {
          color: '#595959'
        }
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
      data: ["2024年", "2025年"],
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
    series: [getBarSeries("#f9d09a", [90, 173], {
      name: '云包场剧集数量',
      itemStyle: {
        color: "#f9d09a",
        borderRadius: [10, 10, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'white',
        offset: [0, -10]
      },
      barWidth: 26,
    }), {
      name: '云包场剧集数量占比',
      type: 'line',
      data: [120, 190],
      symbolSize: 8,
      lineStyle: {
        color: '#c6c4b9'
      },
      itemStyle: {
        color: '#c6c4b9'
      },
      label: {
        show: true,
        position: 'top',
        offset: [0, 0],
        formatter: function (params) {
          const i = params.dataIndex
          switch (i) {
            case 0:
              return '36.1%'
            case 1:
              return '68.9%'
          }
        }
      }
    }],
  },
  {
    legend: {
      show: true,
      itemHeight: 8,
      itemGap: 10,
      left: '24%',
      top: '4%',
      textStyle: {
        fontSize: 10,
      },
    },
    yAxis: {
      show: false,
      type: "value",
      axisLabel: {
        fontWeight: "bold",
        show: true,
        formatter: '{value}%'
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
      min: 60
    },
    grid: {
      left: "14%",
      top: "45%",
      bottom: "14%",
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2023年", "2024年", "2025年"],
      axisLine: {
        lineStyle: {
          color: '#d9d9d9'
        }
      },
      axisLabel: {
        fontWeight: "bold",
        color: "#595959",
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      }
    },
    series: [
      getLineOption([83.8, 81.3, 85.4], '#f9d09a', '综合热度TOP10古偶剧均值'),
      Object.assign(getLineOption([74.9, 80.3, 75.2], '#c6c4b9', '综合热度TOP10现偶剧均值'), { label: { show: true, position: 'bottom' }})
    ],
  },
  {
    legend: [
      {
        data: ['市场规模(亿)'],
        itemWith: 8,
        itemHeight: 8,
        icon: 'circle',
        top: '10%',
        left: '20%',
        fontSize: 10
      },
      {
        data: ['同比增长'],
        top: '10%',
        left: '55%',
        itemWith: 10,
        itemHeight: 10,
        fontSize: 10
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
      top: '30%',
      bottom: '10%',
      height: '60%'
    },
    xAxis: {
      type: "category",
      boundaryGap: [0, 0.01],
      data: ["2021年", "2022年", "2023年", "2024年", "2025年e"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontWeight: 'bold',
        color: '#595959',
        fontSize: 10
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [getBarSeries("#f9d09a", [36.8, 101.7, 373.9, 504.4, 634.3], {
      name: '市场规模(亿)',
      barWith: 14,
      itemStyle: {
        color: "#f9d09a",
        borderRadius: [10, 10, 0, 0]
      },
      label: {
        show: true,
        position: 'inside',
        color: 'black',
        position: ['0', '60%'],
        fontSize: 10,
        color: 'white'
      },
      barWidth: 26,
      barMinHeight: 30
    }), {
      name: '同比增长',
      type: 'line',
      data: [800, 600, 700, 300, 280],
      symbolSize: 8,
      smooth: true,
      lineStyle: {
        color: '#c6c4b9'
      },
      itemStyle: {
        color: '#c6c4b9'
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        fontSize: 10,
        formatter: function (params) {
          const i = params.dataIndex
          switch (i) {
            case 0:
              return '291.5%'
            case 1:
              return '176.4%'
            case 2:
              return '267.6%%'
            case 3:
              return '34.9%'
            case 4:
              return '25.8%'
          }
        }
      }
    }],
  },
  {
    color: ['#f9d09a', '#c6c4b9'],
    legend: {
      show: false
    },
    grid: {
      left: '10%',
      top: '20%',
      bottom: '20%',
      width: '70%'
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
          { value: 82.4, name: '网文IP改编' },
          { value: 17.6, name: '非改编' }
        ],
        label: {
          formatter: '{b}\n{d}%',
          overflow: 'break',
          position: 'inside',
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 20
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
        center: ['50%', '50%']
      }
    ]
  },
  {
    color: ['#f9d09a', '#c6c4b9'],
    legend: {
      show: false
    },
    grid: {
      left: '10%',
      top: '20%',
      bottom: '20%',
      width: '70%'
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
          { value: 65, name: '其他厂牌,37部' },
          { value: 35, name: '花岛,20部' }
        ],
        label: {
          formatter: '{b}\n{d}%',
          overflow: 'break',
          position: 'inside',
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 20
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
        center: ['50%', '50%']
      }
    ]
  }
];
