import "./App.css";
import Description from "./component/Description";
import TitleList from "./component/TitleList";
import { createContext, useState } from "react";
import { Button, Form, Input, Modal } from "antd";

export const ListContext = createContext();

function App() {
  const [idState, setIdState] = useState();
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const list = [
    { id: 0, value: "My Note1", des: "My note here is something about 1" },
    { id: 1, value: "My Note2", des: "My note here is something about 2" },
    { id: 2, value: "My Note3", des: "My note here is something about 3" },
  ];

  console.log("idState", idState);
  console.log("value", list[idState]);

  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Create New Note"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <>
      <ListContext.Provider value={list}>
        <div className="App">
          <h1>My Note</h1>
        </div>
        <div className="flex-container">
          <div className="flex-child">
            <TitleList
              className="titleListContainer"
              handleClick={(id) => setIdState(id)}
            />
            <Button
              style={{ marginTop: "10px" }}
              onClick={() => {
                setVisible(true);
              }}
            >
              Add New Note
            </Button>
          </div>
          <div className="flex-child">
            <Description
              className="descriptionContainer"
              title={list[idState]?.value}
              description={list[idState]?.des}
            />
          </div>
        </div>
        <CollectionCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </ListContext.Provider>
    </>
  );
}

export default App;
