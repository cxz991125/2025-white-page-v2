import { getWidth } from '@/common/utils'

const ContentListHeader = (props) => {
    const {data = {}, headerStyle = {}} = props;
    return <div className="list-header flex" style={{...headerStyle}}>
    {(data.columns || []).map((item, index) => (
      <div key={index} style={{ width: getWidth(item.width || "20%") }}>
        {item.title}
      </div>
    ))}
  </div>
};

export default ContentListHeader;