import Button from "./components/Button/index";

import "./App.css";
import { useRef, useState } from "react";
import { buttons, ButtonType } from "./utils/buttons";

function App() {
  const [list, setList] = useState<ButtonType>(buttons);

  const dragItem = useRef<number>();
  const dragOverItem = useRef<number>();

  const handleDragStart = (
    e: React.DragEvent<HTMLButtonElement>,
    position: number
  ) => {
    e.stopPropagation();
    dragItem.current = position;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLButtonElement>,
    position: number
  ) => {
    e.stopPropagation();
    dragOverItem.current = position;
  };

  const handleDropPartially = (position: number) => {
    const dragItemCurrent = dragItem.current;
    const dragOverItemCurrent = dragOverItem.current;

    if (dragItemCurrent === undefined || dragOverItemCurrent === undefined)
      return;

    if (dragItemCurrent === dragOverItemCurrent) return;

    const newList = [...list];
    const item = newList[dragItemCurrent];
    newList.splice(dragItemCurrent, 1);
    newList.splice(position, 0, item);

    dragItem.current = position;
    dragOverItem.current = position;

    setList(newList);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Teste os botões</h1>
        <span>
          Interaja com os botões e observe a mudança de aparência e de cursores
        </span>
      </div>
      <div className="grid">
        {list.map((item, idx) => (
          <Button
            onDragStart={(e) => {
              e.currentTarget.style.cursor = "grabbing";
              handleDragStart(e, idx);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDropPartially(idx);
            }}
            onDragCapture={(e) => {
              e.preventDefault();
              e.stopPropagation();
              e.currentTarget.style.cursor = "grabbing";
              e.currentTarget.style.opacity = "0";
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDragEnter(e, idx);
            }}
            onDragEnd={(e) => {
              handleDropPartially(idx);
              e.currentTarget.style.cursor = "move";
              e.currentTarget.style.opacity = "1";
            }}
            key={item.id}
            {...item.props}>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
