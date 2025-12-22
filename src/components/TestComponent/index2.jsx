import ContentWrapper from "../ContentWrapper";
import ContentList from "../ContentWrapper/ContentList";
import ContentListHeader from "../ContentWrapper/ContentListHeader";

const columns = [
  {
    title: "排名",
    width: "20%",
    key: "test",
  },
  {
    title: "演唱会名称",
    width: "60%",
    key: "test2",
  },
  {
    title: "热度指数",
    width: "20%",
    key: "test3",
  },
];

const data = [
  {
    test: "1",
    test2: "薛之谦“天外来物”巡回演唱会",
    test3: "96.5",
  },
  {
    test: "2",
    test2: "周杰伦嘉年华世界巡回演唱会",
    test3: "96.5",
  },
];

const TestComponent = () => {
  return (
    <ContentWrapper
      headerContent={<ContentListHeader columns={columns}></ContentListHeader>}
    >
      <ContentList
        columns={columns}
        data={data}
        isShowHeader={false}
      ></ContentList>
    </ContentWrapper>
  );
};

export default TestComponent;
