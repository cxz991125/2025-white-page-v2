import {
    ContentWrapper,
    ContentList,
    ContentListHeader,
    ButtonComponent,
    ChartView,
  } from "@/components";

  import {
    dataList,
    chartOptions
  } from "@/data/star";

  import {getImg, getImgPath, viewInfo} from '@/common/utils'

const imgPath = getImgPath("star/");

  const Wrapper = (props) => (
    <ContentWrapper headerBgColor="linear-gradient( 90deg, rgb(232,163,163) 0%, rgb(211,104,102) 100%)" {...props}></ContentWrapper>
  );


const ImgComponent = (props) => {
  return <img className={`top-[-120px] left-[-10px] right-[0px] absolute`} style={{ width: '150%', maxWidth: '200%' }} src={getImg(imgPath(`bg1.png`))} alt="" />
}
  
  const StarView = () => {
    return (
        <div className="star-page">
          <div className="w-full">
            <img className="w-full banner-img" src={getImg(imgPath('banner5.png'))} style={viewInfo.getRect('star')} alt="" />
          </div>
           <Wrapper
            bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
            headerTitle="2025年男明星综合热度TOP10"
            remark="注：代表作选取明星近一年在播的主演作品中播映指数或票房最高的作品。</br>注：综合热度是明星评价的综合指标，由明星的专业热度、关注热度、预测热度和带货力加权计算获得"
            bannerOptions={{ src: imgPath("title1.png"), w: 2.8, h: 0.24, align: 'center' }}
          >
          <ContentList data={dataList[0]}></ContentList>
          </Wrapper>
          <Wrapper
            bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
            headerTitle="2025年女明星综合热度TOP10"
            remark="注：代表作选取明星近一年在播的主演作品中播映指数或票房最高的作品。</br>注：综合热度是明星评价的综合指标，由明星的专业热度、关注热度、预测热度和带货力加权计算获得。"
            bannerOptions={{ src: imgPath("title2.png"), w: 2.4, h: 0.24, align: 'center' }}
          >
          <ContentList data={dataList[1]}></ContentList>
          </Wrapper>
          <Wrapper
            remark="注：代表作选取明星近一年在播的出演作品中播映指数或票房最高的作品。</br>注：潜力指数反映明星整体热度上升速度，基于明星全网热度、热度上升趋势、粉丝增量加权计算得出。"
            bgImg={<ImgComponent className="w-full top-[-200px] right-[-120px]" index="2"></ImgComponent>}
            headerTitle="2025年95后潜力男明星TOP10"
            bannerOptions={{ src: imgPath("title3.png"), w: 2.8, h: 0.7, align: 'center' }}
          >
          <ContentList data={dataList[2]}></ContentList>
          </Wrapper>
          <Wrapper
            remark="注：代表作选取明星近一年在播的出演作品中播映指数或票房最高的作品。</br>注：潜力指数反映明星整体热度上升速度，基于明星全网热度、热度上升趋势、粉丝增量加权计算得出。"
            bgImg={<ImgComponent className="w-full top-[-40px] left-0" index="3"></ImgComponent>}
            headerTitle="2025年95后潜力女明星TOP10"
            bannerOptions={{ src: imgPath("title4.png"), w: 2.8, h: 0.24, align: 'center' }}
          >
          <ContentList data={dataList[3]}></ContentList>
          </Wrapper>
          <Wrapper
            remark="注：歌手综合价值基于歌手线下演出的热度、商业价值加权计算得出。"
            bgImg={<ImgComponent className="w-full top-[-180px]" index="6"></ImgComponent>}
            headerTitle="2025年举办线下演出的歌手价值TOP10"
            bannerOptions={{ src: imgPath("title5.png"), w: 2.4, h: 0.7, align: 'center' }}
          >
          <ContentList data={dataList[4]}></ContentList>
          </Wrapper>
           <Wrapper
            remark="注：KOL热度指数基于KOL在全网的声量、互动量加权计算得出。"
            bgImg={<ImgComponent className="w-full top-[-180px]" index="6"></ImgComponent>}
            headerTitle="2025年KOL热度指数TOP10"
            bannerOptions={{ src: imgPath("title6.png"), w: 2.8, h: 0.6, align: 'center' }}
          >
          <ContentList data={dataList[5]}></ContentList>
          </Wrapper>
            <Wrapper
            remark="注：短剧演员热度指数基于短剧演员在全网的声量、互动量粉丝规模及作品播放量/播放热度加权计算得出。"
            bgImg={<ImgComponent className="w-full top-[-180px]" index="6"></ImgComponent>}
            headerTitle="2025年短剧演员热度指数TOP10"
            bannerOptions={{ src: imgPath("title7.png"), w: 2.6, h: 0.24, align: 'center' }}
          >
          <ContentList data={dataList[6]}></ContentList>
          </Wrapper>
            <Wrapper
            remark="注：人气指数基于游戏角色在全网的声量、互动量加权计算得出。"
            bgImg={<ImgComponent className="w-full top-[-180px]" index="6"></ImgComponent>}
            headerTitle="2025年乙女恋爱游戏角色人气TOP10"
            bannerOptions={{ src: imgPath("title8.png"), w: 2.8, h: 0.7, align: 'center' }}
          >
          <ContentList data={dataList[7]}></ContentList>
          </Wrapper>

           <div className="w-full h-300px relative">
            <img className="absolute w-150vw h-full" style={{maxWidth:'200%'}} src={getImg(imgPath(`bg1.png`))} alt="" />
            <ButtonComponent></ButtonComponent>
          </div>
        </div>
    )
  }

  export default StarView