import { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import SpotlightCard from "./SpotlightCard";
import SpotlightSkills from "./SpotlightCard";
import Typography from "@mui/material/Typography";
import { capitalize } from "@mui/material";
import { getMonsterByIndex } from "../../utils/api/api.monsters";

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
					height: "30vh",
				}}
			/>
		);

	return (
		<Card className="entry-card" onClick={handleOpenInfo}>
			<CardContent>
				<Typography className="entry-name" variant="h2">
					{monster.name}
				</Typography>
				<p>Size: {details.size}</p>
				<p>Type: {capitalize(details.type)}</p>
				<p>Alignment: {capitalize(details.alignment)}</p>
			</CardContent>

			{details.image && (
				<img
					className="entry-image"
					src={`https://www.dnd5eapi.co${details.image}`}
					alt={`${details.name} reference artwork`}
					
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
};

export default MonsterCard;
