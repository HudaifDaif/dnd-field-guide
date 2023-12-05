import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../Header";
import HomeIcon from "../HomeIcon";
import MonsterList from "./MonsterList";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MonstersPage = ({ setCurrentPage }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleNavHome = () => setCurrentPage("home");

	return (
		<Container>
			<Grid>
				<Grid item>
					<Button
						className="home-button"
						variant="contained"
						size="large"
						onClick={handleNavHome}
					>
						<HomeIcon />
					</Button>
					<Header />
				</Grid>
				<Grid item>
					<SearchBar setSearchTerm={setSearchTerm} />
				</Grid>
				<Grid item>
					<MonsterList searchTerm={searchTerm} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default MonstersPage;
