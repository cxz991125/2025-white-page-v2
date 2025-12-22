import { useMemo } from "react";
import "./ContentList.scss";
import ContentListHeader from "./ContentListHeader";
import { getWidth } from "@/common/utils";

const getItemColor = (data,index, $index) => {
  const c = data.color
    return c && c[index.toString() + $index.toString()]
} 

const ContentList = (props) => {
  const { isShowHeader = true, data = {}, className, headerStyle } = props;

  const _data = useMemo(() => ({
    columns: data.columns || [],
    data: data.data || [],
  }));

  return (
    <div className={`content-list w-full${className ? " " + className : ""}`}>
      {isShowHeader ? (
        <ContentListHeader data={_data} headerStyle={headerStyle}></ContentListHeader>
      ) : null}
      <div className="list-wrapper">
        {_data.data.map((item, index) => (
          <div key={index} className="content-list_item">
            {_data.columns.map(($item, $index) => {
              const content = item[$item.key] || item[$index];
              const style = {
                width: getWidth($item.width || "20%"),
                color: $item.isRank && Number(content) < 4 ? '#FF0000' : getItemColor(data, index, $index) ||'#595959',
                fontWeight: '900'
              };
              // const className = $item.isRank ? '' : 'source-han-sans-cn-bold'
              const className = ''
              if ($item.render) {
                return (
                  <div
                    key={$index}
                    style={style}
                    className={className}
                  >
                    {$item.render(item, index, $index)}
                  </div>
                );
              }
              return (
                <div
                  key={$index}
                  style={style}
                  className={className}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
