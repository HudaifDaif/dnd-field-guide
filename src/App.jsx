import "./app.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import MonstersPage from "./components/monsters/MonstersPage";
import { TopicsList } from "./components/topics";

function App() {
	const [currentPage, setCurrentPage] = useState("home");
	return (
		<>
			{currentPage === "home" && (
				<>
					<Header />
					<TopicsList setCurrentPage={setCurrentPage} />
				</>
			)}

			{currentPage === "MonstersPage" && (
				<MonstersPage setCurrentPage={setCurrentPage} />
			)}
		</>
	);
}

export default App;
