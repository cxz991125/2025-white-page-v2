import "./ContentWrapper.scss";
import ContentBanner from "./ContentBanner";

const ContentWrapper = (props) => {
  const { headerTitle, headerContent, headerBgColor = '#9f6daf', bannerOptions, remark, subContent, className, bgImg, showHeader=true, headerStyle = {} } = props;
  return (
    <div className={`content-wrapper${className ? ' ' + className : '' }`}>
      {bannerOptions ? <ContentBanner {...bannerOptions}></ContentBanner> : null}
      {subContent ? <p className="sub-content relative z-10" dangerouslySetInnerHTML={{__html: subContent}}></p> : null}
      {showHeader ? (<div className="header-content z-10 relative" style={{background: headerBgColor, ...headerStyle}}>
        {headerContent ?? <span className="header-title whitespace-nowrap relative">{headerTitle}</span>}
      </div>) : null}
      <div className="content z-10 relative">
        {props.children}
        {remark ? <div className="content-remark" dangerouslySetInnerHTML={{__html: remark}}></div> : null}
      </div>
      {bgImg ? bgImg : null}
    </div>
  );
};

export default ContentWrapper;
