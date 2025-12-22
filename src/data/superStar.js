import { merge } from "lodash";
import { getBarSeries } from "@/common/utils";

export const data1 = {
  columns: [
    {
      title: "姓名",
      width: 30,
    },
    {
      title: "2023年高热度代表作品",
      width: 70,
    },
  ],
  data: [
    [
      "成毅",
      "《莲花楼》(播映指数TOP7) ",
    ],
    [
      "迪丽热巴",
      "《安乐传》(播映指数TOP9)</br>《花儿与少年第五季》（播映指数TOP4）",
    ],
    [
      "王一博",
      "《无名》(票房TOP13)</br>《热烈》(票房TOP15)</br>《长空之王》(票房TOP17)",
    ],
    [
      "肖战",
      "《梦中的那片海》(播映指数TOP1)</br>《玉骨遥》(播映指数TOP5)</br>《骄阳伴我》(播映指数TOP13)",
    ],
    ["杨幂", "《密室大逃脱第五季》（播映指数TOP15）"],
    ["杨紫", "《长相思第一季》（播映指数TOP3）"],
  ],
};

export const data2 = {
  columns: [
    {
      title: "排名",
      width: 14,
      isRank: true,
    },
    {
      title: "姓名",
      width: 30,
    },
    {
      title: "专业认可度指数",
      width: 30,
    },
    {
      title: "2023年出演作品数量",
      width: 24,
    },
  ],
  data: [
    ["1", "李雪健", "99.40", "2"],
    ["2", "张颂文", "99.08", "4"],
    ["3", "王传君", "91.49", "2"],
    ["4", "王阳", "87.82", "6"],
    ["5", "张译", "82.50", "6"],
    ["6", "秦昊", "81.48", "2"],
    ["7", "张鲁一", "80.69", "2"],
    ["8", "于和伟", "80.05", "3"],
    ["9", "赵又廷", "78.42", "2"],
    ["10", "陈晓", "76.76", "4"],
  ],
};

export const data3 = {
  columns: [
    {
      title: "排名",
      width: 30,
      isRank: true,
    },
    {
      title: "姓名",
      width: 30,
    },
    {
      title: "专业热度",
      width: 40,
    },
  ],
  data: [
    ["1", "黄晓明", "82.18"],
    ["2", "沈腾", "81.85"],
    ["3", "张译", "81.40"],
    ["4", "黄渤", "79.65"],
    ["5", "张颂文", "74.62"],
    ["6", "吴京", "74.46"],
    ["7", "范伟", "87.88"],
    ["8", "王耀庆", "66.84"],
    ["9", "于和伟", "65.43"],
    ["10", "秦昊", "64.17"],
  ],
};

export const getPieOptions = (obj, data) => {
  const option = {
    title: {
      text: data + "%",
      left: "center",
      top: "center",
      textStyle: {
        color: "#E8A564",
      },
    },
    color: ["#E8A564", "#d9d9d9"],
    legend: {
      show: false,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: data,
            selected: true,
          },
          {
            value: 100 - data,
          },
        ],
        itemStyle: {
          borderWidth: 2,
          borderColor: "white",
        },
      },
    ],
  };

  return merge(option, obj);
};

export const chartOptions1 = getPieOptions({}, 60);

const getBarOptions = (data, nameList = ["团体作品", "个人作品"]) => {
  return {
    nameList,
    grid: {
      bottom: "10%",
    },
    series: [
      getBarSeries("#E8A564", data, {
        barCategoryGap: "80%",
        barGap: "20%",
      }),
    ],
  };
};

export const chartOptions2 = getBarOptions([425, 323]);

export const chartOptions3 = getBarOptions([250, 159]);

export const chartOptions4 = getBarOptions([171, 129]);

export const chartOptions5 = getBarOptions([125, 96]);
