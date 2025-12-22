import { useMemo } from 'react'
import { getImg } from '../../common/utils'

const ContentBanner = (props) => {
  const {src, w, h, align = 'start'} = props;

  const styles = useMemo(() => ({
    width: typeof w === 'number' ? w + 'rem' : w,
    height: typeof h === 'number' ? h + 'rem' : h,
  }), [w, h]);
  return (
    <div className="content-banner flex z-10 relative" style={{justifyContent: align}}>
      <img src={getImg(src)} alt="" style={styles}/>
    </div>
  );
};

export default ContentBanner;
