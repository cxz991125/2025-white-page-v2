//电视剧
import {
  ContentWrapper,
  ContentList,
  ContentListHeader,
  ButtonComponent,
  ChartView,
  ButtonWarpper
} from "@/components";
import {
  dataList,
  chartOptions
} from "@/data/teleplay";

import { getImg, getImgPath, viewInfo } from '@/common/utils'

const imgPath = getImgPath("teleplay/");

const Wrapper = (props) => (
  <ContentWrapper headerBgColor="linear-gradient( 90deg, rgb(249,208,154) 0%, rgb(225,152,83) 100%)" {...props}></ContentWrapper>
);

const ImgComponent = (props) => {
  return <img className={`top-[-120px] left-[-10px] right-[0px] absolute`} style={{ width: '150%', maxWidth: '200%' }} src={getImg(imgPath(`bg1.png`))} alt="" />
}

const TeleplayView = () => {
  return (
    <div className="teleplay-page">
      <div className="w-full">
        <img className="w-full banner-img" src={getImg(imgPath('banner5.png'))} style={viewInfo.getRect('teleplay')} alt="" />
      </div>
      <Wrapper
        bgImg={<ImgComponent></ImgComponent>}
        headerTitle="近五年剧集拍摄备案、获发行许可证及在更数量变化"
        remark="注：备案/发行数量包含电视剧+网络剧，数据来源为广电总局，2025年备案数量更新至10月，其中8-10月统计常规剧集备案数量，全年数据为估算值；发行数量更新至第三季度，全年数据为估算值。"
        bannerOptions={{ src: imgPath("title1.png"), w: 2.19, h: 0.25, align: 'center' }}
      >
        <ChartView remark="单位:部" options={chartOptions[0]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2025年剧集热度指数TOP10"
        remark="注：剧集热度指数为反映某一影视内容播映后的综合价值，由媒体热度、用户热度、好评度、观看度等数据加权计算得出。"
        bannerOptions={{ src: imgPath("title2.png"), w: 2.74, h: 0.25, align: 'center' }}
      >
        <ContentList data={dataList[0]}></ContentList>
      </Wrapper>
      <Wrapper
        remark="注：口碑指数反映观众对于某一影视内容喜爱程度。通过对剧集播映前后在视频 /社交平台的评分变化、评分人数及正面讨论内容等综合计算。"
        bgImg={<ImgComponent className="w-full top-[-180px]" index="6"></ImgComponent>}
        headerTitle="2025年剧集口碑指数TOP10"
        bannerOptions={{ src: imgPath("title3.png"), w: 2.75, h: 0.25, align: 'center' }}
      >
        <ContentList data={dataList[1]}></ContentList>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="近三年剧集更新周期分布"
        bannerOptions={{ src: imgPath("title4.png"), w: 3.19, h: 0.62, align: 'center' }}
      >
        <ChartView height="280px" options={chartOptions[1]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-200px top-[-100px] right-0" index="4"></ImgComponent>}
        headerTitle="近三年TOP50剧集赞助品牌总量占比"
        bannerOptions={{ src: imgPath("title5.png"), w: 2.81, h: 0.62, align: 'center' }}
      >
        <ChartView options={chartOptions[2]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="近两年云包场剧集数量及占比"
        remark="注：云包场为公开数据统计。"
        bannerOptions={{ src: imgPath("title6.png"), w: 3.08, h: 0.25, align: 'center' }}
      >
        <ChartView height="300px" remark="单位:部" options={chartOptions[3]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-180px]" index="6"></ImgComponent>}
        headerTitle="近三年头部古偶及现偶用户观看热度变化"
        bannerOptions={{ src: imgPath("title7.png"), w: 2.45, h: 0.62, align: 'center' }}
      >
        <ChartView options={chartOptions[4]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-250px top-[-160px] right-20px" index="7"></ImgComponent>}
        headerTitle="2025年古偶剧内容元素词云"
        remark="注：古偶剧仅统计以男女主感情发展为主线的古装剧，不包含古装大男主、古装探案、古装历史等作品。"
        bannerOptions={{ src: imgPath("title8.png"), w: 2.75, h: 0.25, align: 'center' }}
      >
        <div className="p-20px">
          <img
            src={getImg(imgPath("img1.png"))}
            className="bg-white"
            alt=""
          />
        </div>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="近五年微短剧市场规模变化"
        remark="注：数据来源《2025年微短剧阶段性发展报告》"
        bannerOptions={{ src: imgPath("title9.png"), w: 2.68, h: 0.61, align: 'center' }}
      >
        <ChartView height="300px" options={chartOptions[5]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2025年免费短剧市场规模变化"
        remark="注：数据来源DataEye。"
        bannerOptions={{ src: imgPath("title10.png"), w: 2.31, h: 0.25, align: 'center' }}
      >
        <div className="p-20px">
          <img
            src={getImg(imgPath("img2.png"))}
            className="bg-white"
            alt=""
          />
        </div>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        headerTitle="2025年播放量破10亿短剧中网文IP改编占比"
        bannerOptions={{ src: imgPath("title11.png"), w: 3.01, h: 0.25, align: 'center' }}
      >
        <ChartView height="300px" options={chartOptions[6]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        headerTitle="2025年57部短剧播放量破10亿 "
        bannerOptions={{ src: imgPath("title12.png"), w: 3.15, h: 0.25, align: 'center' }}
      >
        <ChartView height="300px" options={chartOptions[7]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        headerTitle="2025年竖屏短剧顶流"
        remark="注：截至12月10日，结合平台、第三方公开数据统计，演员仅统计男女主演。"
      >
        <ContentList data={dataList[7]}></ContentList>
      </Wrapper>
      <Wrapper
        headerContent={<ContentListHeader data={dataList[8]}></ContentListHeader>}
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        bannerOptions={{ src: imgPath("title13.png"), w: 3.05, h: 0.62, align: 'center' }}
      >

        <ContentList isShowHeader={false} data={dataList[8]}></ContentList>
      </Wrapper>

      <Wrapper
        remark="注：综合热度指数由艺人参演剧集的热度口碑、艺人专业热度、艺人关注热度、艺人美誉度加权所得。此榜单统计演员范围为2025年所有在更剧集的前两番演员。"
        headerContent={<ContentListHeader data={dataList[9]}></ContentListHeader>}
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        bannerOptions={{ src: imgPath("title14.png"), w: 3.05, h: 0.62, align: 'center' }}
      >

        <ContentList isShowHeader={false} data={dataList[9]}></ContentList>
      </Wrapper>
      <Wrapper
        headerContent={<ContentListHeader data={dataList[10]}></ContentListHeader>}
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        bannerOptions={{ src: imgPath("title15.png"), w: 2.3, h: 0.62, align: 'center' }}
      >
        <ContentList isShowHeader={false} data={dataList[10]}></ContentList>
      </Wrapper>
      <Wrapper
        remark="注：由艺人参演作品口碑指数、艺人及角色正面讨论度、艺人美誉度等数据加权所得。此榜单统计演员范围为2025年所有在更剧集的前三番演员。"
        headerContent={<ContentListHeader data={dataList[11]}></ContentListHeader>}
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        bannerOptions={{ src: imgPath("title16.png"), w: 2.3, h: 0.62, align: 'center' }}
      >
        <ContentList isShowHeader={false} data={dataList[11]}></ContentList>
      </Wrapper>
      <Wrapper
        remark="注：数据来源自腾讯娱乐影响力排行1-11月总体表现，根据影视综作品在腾讯新闻的创作影响力、消费影响力、互动影响力、搜索影响力以及播映表现，综合计算得出。"
        headerContent={<ContentListHeader data={dataList[12]}></ContentListHeader>}
        bgImg={<ImgComponent className="w-full top-[-200px] right-[-100px]" index="5"></ImgComponent>}
        bannerOptions={{ src: imgPath("title17.png"), w: 2.54, h: 0.61, align: 'center' }}
      >
        <ContentList isShowHeader={false} data={dataList[12]}></ContentList>
      </Wrapper>
      <ButtonWarpper src={getImg(imgPath(`bg1.png`))}></ButtonWarpper>
    </div>
  );
};

export default TeleplayView;
