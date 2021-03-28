import { List } from "antd";
import { useContext } from 'react';
import { ListContext } from '../App';

const TitleList = ({handleClick}) => {
  const list = useContext(ListContext);

  const renderList = () => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={list}
        bordered
        renderItem={(item, id) => (
          <List.Item onClick={() =>handleClick(id)}>
            <List.Item.Meta
              title={<a href='google.com'>{item.value}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    );
  };

  return (
    <>
      <h1>Title</h1>
      {renderList()}
    </>
  );
};

export default TitleList;
