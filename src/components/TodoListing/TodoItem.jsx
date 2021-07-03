import React from "react";

export default function TodoItem(props) {
  const { name, status } = props;
  return <div style={{ color: status ? "green" : "red" }}>{name}</div>;
}
