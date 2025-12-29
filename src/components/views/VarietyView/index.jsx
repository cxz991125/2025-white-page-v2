//综艺
import {
  ContentWrapper,
  ContentList,
  ContentListHeader,
  ButtonComponent,
  ChartView,
  ButtonWarpper
} from "@/components";

import { getImg, getImgPath, viewInfo } from "@/common/utils";

import { chartOptions, dataList } from "@/data/variety";

const imgPath = getImgPath("variety/");

const Wrapper = (props) => (
  <ContentWrapper headerBgColor="linear-gradient( 0deg, rgb(167,203,169) 0%, rgb(146,196,149) 40%, rgb(125,188,128) 100%" {...props}></ContentWrapper>
);

const ImgComponent = (props) => {
  return <img className={`top-[-160px] left-[-10px] right-[0px] h-[360px] absolute`} style={{ width: '180%', maxWidth: '200%' }} src={getImg(imgPath(`bg1.png`))} alt="" />
}

const VarietyView = () => {
  return (
    <div className="variety-page">
      <div className="w-full">
        <img className="w-full banner-img" style={viewInfo.getRect('variety')} src={getImg(imgPath('banner5.png'))} alt="" />
      </div>
      <Wrapper
        remark="注：数据截止时间为各年12月10日。"
        headerTitle="2023-2025年国产季播综艺数量"
        bgImg={<ImgComponent className="w-full top-[-120px] left-20px" index="8"></ImgComponent>}
        bannerOptions={{ src: imgPath("title1.png"), w: 2.62, h: 0.25, align: 'center' }}
      >
        <ChartView remark="单位:部" options={chartOptions[0]}></ChartView>
      </Wrapper>

      <Wrapper
        remark="注：TOP60、TOP61-120、TOP121-182为2025年播出综艺的品牌赞助数量由高到低的排名区间"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2025年品牌赞助数量分布"
        bannerOptions={{ src: imgPath("title2.png"), w: 2.72, h: 0.61, align: 'center' }}
      >
        <ChartView height="240px" options={chartOptions[1]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-60px] left-0" index="9"></ImgComponent>}
        headerTitle="2025年综艺热度TOP10"
        bannerOptions={{ src: imgPath("title3.png"), w: 2.65, h: 0.25, align: 'center' }}
      >
        <ContentList data={dataList[0]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-200px top-[-100px] right-0" index="4"></ImgComponent>}
        headerTitle="2025年综艺口碑TOP10"
        bannerOptions={{ src: imgPath("title4.png"), w: 2.45, h: 0.25, align: 'center' }}
      >
        <ContentList data={dataList[1]}></ContentList>
      </Wrapper>

      <Wrapper
        bannerOptions={{ src: imgPath("title5.png"), w: 2.45, h: 0.25, align: 'center' }}
        headerTitle="2023-2025年综艺新IP播出数量">

        <ChartView remark="单位:部" options={chartOptions[2]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2025年热度TOP30综艺热门话题"
        bannerOptions={{ src: imgPath("title6.png"), w: 2.88, h: 0.25, align: 'center' }}
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
        bannerOptions={{ src: imgPath("title7.png"), w: 2.35, h: 0.25, align: 'center' }}
        headerTitle="2025年女性脱口秀演员热门话题">
        <div className="p-20px">
          <img
            src={getImg(imgPath("img2.png"))}
            className="bg-white"
            alt=""
          />
        </div>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-120px] left-20px" index="8"></ImgComponent>}
        headerTitle="2023-2025年国外录制综艺数量"
        bannerOptions={{ src: imgPath("title8.png"), w: 2.01, h: 0.25, align: 'center' }}
      >
        <ChartView remark="单位:部" options={chartOptions[3]}></ChartView>
      </Wrapper>

      <Wrapper
        headerStyle={{ height: '50px' }}
        remark="注：团体IP热度为2025年团体IP中两个及以上成员担任固定嘉宾的综艺的热度指数均值；团体IP口碑为团体IP社媒讨论净情感度（NSR），社媒净情感度NSR=(正面占比-负面占比)/（正面占比+负面占比）*100；"
        bannerOptions={{ src: imgPath("title9.png"), w: 2.54, h: 0.25, align: 'center' }}
        headerContent={<span className="text-center p-10px">2023-2025年十个勤天、院人、0713团体IP<br/>综艺热度、舆情口碑</span>}>
        <ChartView height="40px" options={chartOptions[6]}></ChartView>
        <ChartView height="100px" options={chartOptions[7]}></ChartView>
        <ChartView height="100px" options={chartOptions[8]}></ChartView>
        <ChartView height="100px" options={chartOptions[9]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-120px] left-20px" index="1"></ImgComponent>}
        bannerOptions={{ src: imgPath("title10.png"), w: 3.09, h: 0.25, align: 'center' }}
        headerTitle="2025年综艺男艺人热度TOP10">
        <ContentList data={dataList[2]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-200px top-[-100px] right-0" index="4"></ImgComponent>}
        bannerOptions={{ src: imgPath("title11.png"), w: 3.1, h: 0.25, align: 'center' }}
        headerTitle="2025年综艺女艺人热度TOP10">
        <ContentList data={dataList[3]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-200px top-[-100px] right-0" index="4"></ImgComponent>}
        bannerOptions={{ src: imgPath("title12.png"), w: 3.1, h: 0.25, align: 'center' }}
        headerTitle="2025年综艺男艺人口碑TOP10">
        <ContentList data={dataList[4]}></ContentList>
      </Wrapper>


      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        bannerOptions={{ src: imgPath("title14.png"), w: 3.1, h: 0.24, align: 'center' }}
        headerTitle="2025年综艺女艺人口碑TOP10">
        <ContentList data={dataList[5]}></ContentList>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        bannerOptions={{ src: imgPath("title15.png"), w: 2.82, h: 0.61, align: 'center' }}
        headerTitle="2025年腾讯娱乐影响力综艺作品TOP10">
        <ContentList data={dataList[6]}></ContentList>
      </Wrapper>
      <ButtonWarpper src={getImg(imgPath(`bg1.png`))}></ButtonWarpper>
    </div>
  );
};

export default VarietyView;
