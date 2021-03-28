import { Typography } from "antd";
import { useState, useEffect } from "react";

const { Paragraph } = Typography;

const Description = ({ title, description }) => {
  const [editableDescription, setEditableDescription] = useState(description);
  const [editableTitle, setEditableTitle] = useState(title);

  useEffect(() => {
    setEditableDescription(description);
    setEditableTitle(title)
  }, [description, title]);

  return (
    <>
      <h1>Description</h1>
      {title && (
        <Paragraph style={{ fontSize:"16px", fontWeight: "bold", marginBottom: "30px"}} editable={{ onChange: setEditableTitle }}>
          {editableTitle}
        </Paragraph>
      )}

      {description && (
        <Paragraph editable={{ onChange: setEditableDescription }}>
          {editableDescription}
        </Paragraph>
      )}
    </>
  );
};

export default Description;
