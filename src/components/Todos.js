import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Todos = (props) => {
	const [todo, setTodo] = useState("");

	const handleChange = (event) => {
		event.preventDefault();
		setTodo(event.target.value);
	};

	const add = () => {
		if (todo === "") {
			alert("Input empty insert a task");
		} else {
			props.addTodo({
				id: Math.floor(Math.random() * 1000),
				item: todo, //initialState useState
				completed: false,
			});
			setTodo("");
		}
	};

	// console.log("props from store", props);
	return (
		<div className="container my-s">
			<h1>Todos</h1>
			<div className="d-flex">
				<input
					type="text"
					className="todo-input"
					onChange={handleChange}
					value={todo}
				/>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="add-items"
					onClick={add}
				>
					<GoPlus />
				</motion.button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (obj) => dispatch(addTodos(obj)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
