import "./ListItem.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
function ListItem(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            onChange={(e) => props.editItem(item.key, e.target.value)}
            type="text"
            id={item.key}
            value={item.text}
          />
          <span>
            <FontAwesomeIcon
              onClick={() => props.deleteItem(item.key)}
              icon="trash"
              className="faicons"
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove easing="ease-in-out" duration={500}>
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItem;
