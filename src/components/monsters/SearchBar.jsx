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
			onSubmit={handleSubmit}
		>
			<label >
				<TextField
					id="filled-basic"
					className="search-input"
					label="Search a monster..."
					variant="filled"
					type="text"
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
