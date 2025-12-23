//音乐
import {
  ContentWrapper,
  ContentList,
  ContentListHeader,
  ButtonComponent,
  ChartView,
} from "@/components";
import { chartOptions, dataList } from "@/data/music";
import { getImg, getImgPath, viewInfo } from "@/common/utils";

const imgPath = getImgPath("music/");

const Wrapper = (props) => (
  <ContentWrapper headerBgColor="linear-gradient( 90deg, rgb(135,200,220) 0%, rgb(105,191,217) 40%, rgb(75,181,213) 100%)" {...props}></ContentWrapper>
);

const ImgComponent = (props) => {
  return <img className={`left-0 absolute `.concat(props.className || '')} style={{ maxWidth: '200%' }} src={getImg(imgPath(`bg1.png`))} alt="" />
}

const MusicView = () => {
  return (
    <div className="music-page">
      <div className="w-full">
        <img className="w-full banner-img" src={getImg(imgPath('banner5.png'))} style={viewInfo.getRect('music')} alt="" />
      </div>
      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="1"></ImgComponent>}
        bannerOptions={{ src: imgPath("title1.png"), w: 2.6, h: 0.6, align: 'center' }}
        remark="注：2023年和2024年数据来源于中国音数协数字音乐工委发布《中国数字音乐产业报告（2024）》；2025年数据综合行业统计数据所得，截至2025年12月10日。"
        headerTitle="2023-2025年中国数字音乐市场规模"
      >
        <ChartView options={chartOptions[0]}></ChartView>
      </Wrapper>

      <Wrapper
        remark="注：2024年数据来源于中国音数协数音乐工委发布《中国数字音乐产业报告（2024）》；2025年数据综合行业统计数据所得，截至2025年12月10日。"
        headerTitle="2024-2025年数字音乐市场各板块规模"
      >
        <ChartView remark="单位：亿元" options={chartOptions[1]}></ChartView>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="3"></ImgComponent>}
        bannerOptions={{
          src: imgPath("title2.png"),
          w: 2.6,
          h: 0.26,
          align: "center",
        }}
        remark="注：线下演出场次根据网络公开数据收集，数据截至2025年12月10日；2023-2024年演唱会&音乐节票房数据根据中国演出行业协会X灯塔专业推出的《竞逐升级、多元发展——2024大型营业性演出市场趋势及特点分析》计算得出，2025年演唱会&音乐节票房数据为收集灯塔专业版演出数据推算得出。"
        headerTitle="2023-2025年线下演唱会&音乐节表现"
      >
        <ChartView options={chartOptions[2]}></ChartView>
      </Wrapper>

      <Wrapper
        remark="注：线下演唱会热度根据演唱会在全网的舆情声量计算所得；</br>数据截止日期：2025年12月10日。"
        headerTitle="2025年度演唱会热度TOP10"
      >
        <ContentList data={dataList[0]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="10"></ImgComponent>}
        bannerOptions={{ src: imgPath("title3.png"), w: 2.4, h: 0.6, align: 'center' }}
        remark="注：根据歌曲在由你榜的得分、排名及在榜时长等计算得出的综合得分进行排序，数据截至2025年11月30日。 "
        headerTitle="22025年新曲热度TOP10"
      >
        <ContentList data={dataList[1]}></ContentList>
        <div className="flex justify-center">
          <img
            src={getImg(imgPath("logo1.png"))}
            className="w-80px mt-16px mr-10px"
            alt=""
          />
          <img
            src={getImg(imgPath("logo2.png"))}
            className="w-80px mt-16px"
            alt=""
          />
        </div>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="11"></ImgComponent>}
        remark="注：根据歌曲在浪潮榜得分得出，数据截至2025年11月。 "
        bannerOptions={{ src: imgPath("title4.png"), w: 2.4, h: 0.6, align: 'center' }}
        headerTitle="2025年新曲专业口碑TOP10"
      >
        <ContentList data={dataList[2]}></ContentList>
        <div className="flex justify-center">
          <img
            src={getImg(imgPath("logo1.png"))}
            className="w-80px mt-16px mr-10px"
            alt=""
          />
          <img
            src={getImg(imgPath("logo3.png"))}
            className="w-80px mt-16px"
            alt=""
          />
        </div>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="11"></ImgComponent>}
        remark="注：抽象指数根据抽象事件关键词在全网的舆情声量计算所得；</br>数据截止日期：2025年12月10日。 "
        bannerOptions={{ src: imgPath("title5.png"), w: 2.4, h: 0.6, align: 'center' }}
        headerTitle="2025年华语乐坛抽象排行榜TOP10"
      >
        <ContentList data={dataList[3]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="3"></ImgComponent>}
        className="music-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title6.png"),
          w: 2.4,
          h: 0.24,
          align: "center",
        }}
      >
        <ContentList data={dataList[4]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="3"></ImgComponent>}
        className="music-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title7.png"),
          w: 2.4,
          h: 0.24,
          align: "center",
        }}
        headerTitle="2024年度热门女歌手"
      >
        <ContentList data={dataList[5]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="3"></ImgComponent>}
        className="music-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title8.png"),
          w: 2.4,
          h: 0.54,
          align: "center",
        }}
        headerTitle="2024年度热门女歌手"
      >
        <ContentList data={dataList[6]}></ContentList>
      </Wrapper>

      <Wrapper
        bgImg={<ImgComponent className="w-1000px top-[-220px] h-500px" index="3"></ImgComponent>}
        className="music-header"
        showHeader={false}
        bannerOptions={{
          src: imgPath("title9.png"),
          w: 2.4,
          h: 0.54,
          align: "center",
        }}
        headerTitle="2024年度热门女歌手"
      >
        <ContentList data={dataList[7]}></ContentList>
      </Wrapper>
      <ButtonComponent></ButtonComponent>
      <div className="w-150vw">
        <img src={getImg(imgPath(`bg1.png`))} alt="" />
      </div>
    </div>
  );
};

export default MusicView;
