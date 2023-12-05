import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function SpotlightCard({ details }) {
	return (
		<div>
			<Card
				sx={{ minWidth: 275 }}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					margin: "20px",
					width: "90vw",
					height: "95vh",
				}}
			>
				{details.image && (
					<img
						src={`https://www.dnd5eapi.co${details.image}`}
						alt={`${details.name} reference artwork`}
						style={{
							maxWidth: "80vw",
							maxHeight: "40vh",
							margin: "5vw",
							objectFit: "contain",
						}}
					/>
				)}
				<CardContent
					style={{
						width: "75vw",
						margin: "15px",
					}}
				>
					<Typography variant="h3">{details.name}</Typography>

					<section>{details.special_abilities.map(ability => {
						return <><Typography>{ability.desc}</Typography><br></br></>
					}) }</section>

					<section>
						<Typography variant="h2">Specs</Typography>

						<Typography>Size: {details.size}</Typography>
						<Typography>Type: {details.type}</Typography>
						<Typography>Alignment: {details.alignment}</Typography>
						<Typography>
							Hit Points: {details.hit_points}
						</Typography>
						<Typography>Strength: {details.strength}</Typography>
						<Typography>Dexterity: {details.dexterity}</Typography>
						<Typography>
							Constitution: {details.constitution}
						</Typography>
						<Typography>
							Intelligence: {details.intelligence}
						</Typography>
						<Typography>Wisdom: {details.wisdom}</Typography>
						<Typography>
							Charisma: {details.intelligence}
						</Typography>
					</section>
				</CardContent>
			</Card>
		</div>
	);
}
