import React from "react";
import { Col } from "react-bootstrap";

const imgBoxStyle = {
  width: "400px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const ProjectCard = ({ title, description, imgUrl, style }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx" style={style || imgBoxStyle}>
        <img src={imgUrl} alt={title} style={style || imgBoxStyle} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
