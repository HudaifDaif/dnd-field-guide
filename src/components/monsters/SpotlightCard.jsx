import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { capitalize } from "@mui/material";

export default function SpotlightCard({ details }) {
	return (
		<div>
			<Card
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					margin: "20px",
					width: "90vw",
					height: "95vh",
					overflow: "scroll",
				}}
			>
				{details.image && (
					<img
						className="entry-image"
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
				<Typography variant="h3" className="entry-name">
					{details.name}
				</Typography>

				<CardContent
					style={{
						width: "75vw",
					}}
				>
					<section>
						{details.special_abilities.map((ability, index) => {
							return (
								<div
									key={`${details.name}.special_abilities[${index}]`}
								>
									<Typography>{ability.desc}</Typography>
									<br></br>
								</div>
							);
						})}
					</section>

					<section>
						<Typography variant="h3" className="entry-name">
							Specs
						</Typography>

						<Typography>Size: {details.size}</Typography>
						<Typography>
							Type: {capitalize(details.type)}
						</Typography>
						<Typography>
							Alignment: {capitalize(details.alignment)}
						</Typography>
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
