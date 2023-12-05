import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { capitalize } from "@mui/material";

const TopicCard = ({ topic, setCurrentPage }) => {
	const handleChangeTopic = () => {
		setCurrentPage(topic.component);
	};

	return (
		<Card className="entry-card" onClick={handleChangeTopic}>
			<CardContent>
				<Typography variant="h2" className="entry-name">
					{topic.name}
				</Typography>
			</CardContent>

			<img
				className="entry-image"
				src={`${topic.img}`}
				alt={`${topic.name} reference artwork`}
	
			/>
		</Card>
	);
};

export default TopicCard;
