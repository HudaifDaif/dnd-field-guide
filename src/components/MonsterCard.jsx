import { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import SpotlightCard from "./SpotlightCard";
import SpotlightSkills from "./SpotlightCard";
import Typography from "@mui/material/Typography";
import { getMonsterByIndex } from "../utils/api/api.monsters";

const MonsterCard = ({ monster }) => {
	const [details, setDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getMonsterByIndex(monster.index).then((resDetails) => {
			setDetails(resDetails);
			setIsLoading(false);
		});
	}, []);

	const handleCloseInfo = () => {
		setOpen(false);
	};
	const handleOpenInfo = () => {
		setOpen(true);
	};

	if (isLoading)
		return (
			<Skeleton
				animation="wave"
				style={{
					height: "40vh",
					marginBlock: "10px",
					width: "auto",
				}}
			/>
		);

	return (
		<Card
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBlock: "10px",
			}}
			onClick={handleOpenInfo}
		>
			<CardContent>
				<Typography variant="h2">{monster.name}</Typography>
				<p>Size: {details.size}</p>
				<p>Type: {details.type}</p>
				<p>Alignment: {details.alignment}</p>
			</CardContent>

			{details.image && (
				<img
					src={`https://www.dnd5eapi.co${details.image}`}
					alt={`${details.name} reference artwork`}
					style={{
						maxHeight: "25vh",
						maxWidth: "30vw",
						margin: "25px",
						objectFit: "contain",
						borderRadius: "5px"
					}}
				/>
			)}

			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={open}
				onDoubleClick={handleCloseInfo}
			>
				<SpotlightCard details={details} />
			</Backdrop>
		</Card>
	);

	// return (
	// 	<Card
	// 		sx={{ minWidth: 275 }}
	// 		style={{
	// 			display: "flex",
	// 			alignItems: "center",
	// 			marginBlock: "10px",
	// 		}}
	// 		onClick={handleOpen}
	// 	>
	// 		{details.image && (
	// 			<img
	// 				src={`https://www.dnd5eapi.co${details.image}`}
	// 				style={{
	// 					maxHeight: "25vh",
	// 					maxWidth: "30vw",
	// 					aspectRatio: "1",
	// 					margin: "25px",
	// 					objectFit: "contain",
	// 				}}
	// 			/>
	// 		)}

	// 		<CardContent>
	// 			<Typography variant="h4">{monster.name}</Typography>
	// 			<p>Size: {details.size}</p>
	// 			<p>Type: {details.type}</p>
	// 			<p>Alignment: {details.alignment}</p>
	// 		</CardContent>
	// 	</Card>
	// );
};

export default MonsterCard;
