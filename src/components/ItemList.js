import React from "react";
import Item from "./Item";
import "./components.scss";

const ItemList = ({ items, setItems , isEditing, setIsEditing}) => {

  // 1: fonksiyon yolla - ana state değiştir
  // 2: yeni state edit = > state değiştir
  // 3: save => ana 1.deki state değiştir

  // color palette - font - 
  // full class convert.
  // JS - data structure

  
  return (
    <div>
      <ul className="ItemList">
        {items.map((item) => (
          <Item
            setItems={setItems}
            items={items}
            key={item.id}
            text={item.text}
            item={item}
            isEditing = {isEditing}
            setIsEditing = {setIsEditing}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
