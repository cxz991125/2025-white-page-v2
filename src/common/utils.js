import { merge, assign } from "lodash";
import { configUrl } from './config'

export const getImg = (url) =>  configUrl + `images/${url}`;

export const getWidth = (width) =>
  typeof width === "number" ? width + "%" : width;

export const getImgPath = (namesapce) =>
  (url) => namesapce + url

export const mergetChartOptions = (defaultOptions) => (options) =>
  merge(
    {
      data: {
        value: options.value,
      },
    },
    defaultOptions,
    options
  );

  export const getEchartsOptions = (options) => {
    const defaultEchartsOptions = {
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "shadow",
        //   },
        // },
        tooltip: false,
        legend: {
          itemHeight: 6,
          itemWidth: 6,
          left: 10,
          top: 10,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "8%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: options.nameList,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },

            splitLine: {
              show: false,
            },
            axisLabel: {
              fontWeight: 'bold',
              color: '#595959'
            }
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [],
      };
      return options._isMerge ? merge(defaultEchartsOptions, options) : assign(defaultEchartsOptions, options);
  }

  export const getBarSeries = (color = 'blue', data = [], args) => {
    return {
        type: 'bar',
        barWidth: 20,
        itemStyle: {
          color: color,
          borderRadius: [20, 20, 0, 0]
        },
        label: {
          show: true,
          position: 'top',
        },
        data,
        ...args
      }
  }

  export const viewInfo = {
    rect: {
      movie: [1080, 1913],
      teleplay: [1080, 1993],
      variety: [1080, 1761],
      music: [1080, 1883],
      star: [1080, 2012]
    },
    getRect: function(name) {
      try {
        const item = this.rect[name]
        const w = document.body.clientWidth
        return {
          width: w + 'px',
          height: w / item[0] * item[1] + 'px'
        }
      } catch (error) {
        return {
          minHeight: '100vh'
        }
      }
    }
  }
