import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";

function App() {
	return (
		<main className="App">
			<motion.div
				initial={{ y: 1000 }}
				animate={{ y: 0 }}
				transition={{ type: "spring", duration: 1 }}
			>
				<Todos />
				<DisplayTodos />
			</motion.div>
		</main>
	);
}

export default App;
