//电影
import {
  ContentWrapper,
  ContentList,
  ContentListHeader,
  ButtonComponent,
  ChartView,
} from "@/components";
import { chartOptions, dataList } from "@/data/movie";

import { getImg, getImgPath, viewInfo } from "@/common/utils";

const imgPath = getImgPath("movie/");

const Wrapper = (props) => (
  <ContentWrapper
    headerBgColor="linear-gradient( 90deg, rgb(158,143,166) 0%, rgb(148,127,160) 40%, rgb(138,111,153) 100%)"
    {...props}
  ></ContentWrapper>
);

const ImgComponent = (props) => {
  return <img className={`top-[-120px] left-[-10px] right-[0px] absolute`} style={{ width: '150%', maxWidth: '200%' }} src={getImg(imgPath(`bg1.png`))} alt="" />
}

const MovieView = () => {
  return (
    <div className="movie-page">
      <div className="w-full">
        <img className="w-full banner-img" src={getImg(imgPath('banner5.png'))} style={viewInfo.getRect('movie')} alt="" />
      </div>
      <Wrapper
        remark="注：2025年票房截至12月18日。"
        bgImg={<ImgComponent className="w-full top-[-80px]" index="1"></ImgComponent>}
        headerTitle="22019-2025年中国电影总票房及增幅"
        bannerOptions={{ src: imgPath("title1.png"), w: 2.6, h: 0.24, align: 'center' }}
      >
        <ChartView height="300px" options={chartOptions[0]}></ChartView>
      </Wrapper>

      <Wrapper
        remark="注：影片票房数据统计日期截至2025年12月18日。"
        bgImg={<ImgComponent className="w-full top-[-210px] left-0" index="5"></ImgComponent>}
        headerTitle="2025年电影票房TOP10"
        bannerOptions={{ src: imgPath("title2.png"), w: 2.6, h: 0.24, align: 'center' }}
      >
        <ContentList data={dataList[0]}></ContentList>
      </Wrapper>

      <Wrapper
        remark="注：影片票房数据统计日期截至2025年12月18日。"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2025年《哪吒之魔童闹海》单片票房占比"
        bannerOptions={{
          src: imgPath("title3.png"),
          w: 2.6,
          h: 0.24,
          align: "center",
        }}
      >
        <ChartView height="300px" options={chartOptions[1]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-200px top-[-100px] right-0" index="4"></ImgComponent>}
        headerTitle="2025年各票房量级影片数量分布"
      >
        <ChartView options={chartOptions[2]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-200px top-[-100px] right-0" index="4"></ImgComponent>}
        headerTitle="全球影史票房TOP10"
        bannerOptions={{ src: imgPath("title4.png"), w: 2.4, h: 0.6, align: 'center' }}
      >
        <ContentList data={dataList[1]}></ContentList>
      </Wrapper>

      <Wrapper
        remark="注：影片票房数据统计日期截至2025年12月18日。"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2021-2025年动画电影票房、票房占比及上映数量"
        bannerOptions={{
          src: imgPath("title5.png"),
          w: 2.4,
          h: 0.6,
          align: "center",
        }}
      >
        <ChartView height="300px" options={chartOptions[3]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-240px] left-40px" index="5"></ImgComponent>}
        headerTitle="2019-2025年影院数及银幕数"
        bannerOptions={{
          src: imgPath("title6.png"),
          w: 2.6,
          h: 0.24,
          align: "center",
        }}
      >
        <ChartView options={chartOptions[4]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-240px] left-40px" index="5"></ImgComponent>}
        headerTitle="2019-2025年观影人次及增幅"
        bannerOptions={{
          src: imgPath("title7.png"),
          w: 1.8,
          h: 0.26,
          align: "center",
        }}
      >
        <ChartView height="300px" options={chartOptions[5]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-240px] left-40px" index="5"></ImgComponent>}
        headerTitle="2019-2025年电影相关话题讨论用户年龄分布"
        bannerOptions={{
          src: imgPath("title8.png"),
          w: 1.8,
          h: 0.26,
          align: "center",
        }}
      >
        <ChartView height="260px" options={chartOptions[6]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        headerTitle="2019-2025年分线城市贡献率"
        bannerOptions={{
          src: imgPath("title9.png"),
          w: 2.6,
          h: 0.6,
          align: "center",
        }}
      >
        <ChartView height="260px" width="110%" options={chartOptions[7]}></ChartView>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        className="movie-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title10.png"),
          w: 2.2,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[2]}></ContentList>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        className="movie-header"
        remark="注：电影演员热度综合指数，根据社媒热议度、知名度、美誉度进行加权汇总获得；其中社媒热议度为核心计算指标。"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title11.png"),
          w: 2.2,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[3]}></ContentList>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        className="movie-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title12.png"),
          w: 2.2,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[4]}></ContentList>
      </Wrapper>
      <Wrapper
        remark="注：电影演员口碑指数，根据演员美誉度、主演电影作品口碑指数、主演电影作品票房贡献进行加权汇总获得；其中美誉度为核心计算指标。"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        className="movie-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title13.png"),
          w: 2.2,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[5]}></ContentList>
      </Wrapper>
      <Wrapper
        remark="注：电影角色喜爱度，筛选自2025年头部影片中知名度较高角色，根据角色的口碑指数、声量、互动量进行加权汇总获得；其中口碑指数为核心计算指标。"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        showHeader={false}
        className="movie-header"
        bannerOptions={{
          src: imgPath("title14.png"),
          w: 2,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[6]}></ContentList>
      </Wrapper>
      <Wrapper
        remark="注：新生代演员统计出生年份为1997年之后的电影演员，根据选定时间范围内演员主要参演作品的评分、个人美誉度和票房号召力综合计算得出，其中作品评分为核心计算指标。"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        showHeader={false}
        className="movie-header"
        bannerOptions={{
          src: imgPath("title15.png"),
          w: 2.2,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[7]}></ContentList>
      </Wrapper>
      <Wrapper
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        showHeader={false}
        className="movie-header"
        bannerOptions={{
          src: imgPath("title16.png"),
          w: 2.4,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[8]}></ContentList>
      </Wrapper>
       <Wrapper
        remark="注：腾讯娱乐影响力数据来源自腾讯娱乐影响力排行1-11月总体表现，根据影视综作品在腾讯新闻的创作影响力、消费影响力、互动影响力、搜索影响力以及播映表现，综合计算得出。"
        bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
        className="movie-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title17.png"),
          w: 2.4,
          h: 0.6,
          align: "center",
        }}
      >
        <ContentList data={dataList[9]}></ContentList>
      </Wrapper>
      <div className="text-center">
        <p className="text-10px" style={{color: '#595959', fontStyle: 'italic'}}>*注：除特殊说明外，本文数据均截至2025年12月10日。</p>
      </div>
      <ButtonComponent></ButtonComponent>
      <div className="w-150vw">
        <img src={getImg(imgPath(`bg1.png`))} alt="" />
      </div>
    </div>
  );
};

export default MovieView;
