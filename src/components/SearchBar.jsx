import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
	const [searchInput, setSearchInput] = useState("");
	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchTerm(searchInput);
		setSearchInput("");
	};

	return (
		<form
			style={{ display: "flex", justifyContent: "center" }}
			onSubmit={handleSubmit}
		>
			<label style={{ width: "100%" }}>
				<TextField
					id="filled-basic"
					label="Search a monster..."
					variant="filled"
					type="text"
					style={{ width: "100%" }}
					onChange={handleChange}
					value={searchInput}
				/>
			</label>
			<Button variant="contained" size="large" onClick={handleSubmit}>
				Go!
			</Button>
		</form>
	);
};

export default SearchBar;
