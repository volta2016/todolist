import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //key code keypad enter for user
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="group-btn">
        <button title="edite" onClick={changeFocus}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            title="complete"
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            {" "}
            <IoCheckmarkDoneSharp />
          </button>
        )}

        <button
          title="delete"
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <IoClose />
        </button>
      </div>
      {item.completed && <span className="completed">Done</span>}
    </motion.li>
  );
};

export default TodoItem;
