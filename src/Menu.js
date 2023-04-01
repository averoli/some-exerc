import React, { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [pickedId, setPickedId] = useState(0);

  const handleChange = (id, e) => {
   setItems(items.map(item => {
    if(item.id === id){
        return {
            ...item,
            title: e.target.value
        }
    } else {
        return item
    }
   }))
  };

  const selectedItem = items.find(item => item.id === pickedId)
  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={e => handleChange(item.id, e)}
              />{" "}
              <button
                onClick={() => {
                  setPickedId(item.id);
                }}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p>You picked {selectedItem.title}</p>
    </>
  );
}
