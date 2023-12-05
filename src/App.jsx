import { Header, MonsterList, SearchBar } from "./components";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Height } from "@mui/icons-material";
import { useState } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("")

	return (
		<Container>
			<Grid  >
				<Grid item >
					<Header />
				</Grid>
				<Grid item >
					<SearchBar setSearchTerm={setSearchTerm} />
				</Grid>
				<Grid item >
					<MonsterList searchTerm={searchTerm} />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
