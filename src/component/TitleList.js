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
              description={item.des}
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
