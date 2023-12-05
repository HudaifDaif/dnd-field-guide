import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "./HomeIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";

const Header = ({ setCurrentPage }) => {
	const handleNavHome = () => setCurrentPage("home");

	const openNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};
	return (
		<header>
			<nav>
				<Fab
					variant="extended"
					color="tertiary"
					aria-label="check out my LinkedIn"
					onClick={() =>
						openNewTab("https://www.linkedin.com/in/hudaifa-tem")
					}
				>
					<LinkedInIcon sx={{ mr: 1 }} />
					LinkedIn
				</Fab>
				<Fab color="primary" aria-label="navigate home">
					<HomeIcon onClick={handleNavHome} />
				</Fab>
				<Fab
					variant="extended"
					color="secondary"
					aria-label="check out my GitHub"
					onClick={() => openNewTab("https://github.com/HudaifDaif")}
				>
					<GitHubIcon sx={{ mr: 1 }} />
					GitHub
				</Fab>
			</nav>
			<Typography variant="h1" className="entry-name">
				D&D Field Guide
			</Typography>
		</header>
	);
	// return (
	// 	<header>
	// 		{setCurrentPage && (
	// 			<Button
	// 				className="home-button"
	// 				variant="contained"
	// 				size="large"
	// 				onClick={handleNavHome}
	// 			>
	// 				<HomeIcon />
	// 			</Button>
	// 		)}

	// 		<h1>D&D Field Guide</h1>
	// 	</header>
	// );
};

export default Header;
