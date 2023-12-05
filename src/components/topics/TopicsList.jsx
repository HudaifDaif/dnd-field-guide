import TopicCard from "./TopicCard";

const TopicsList = ({ setCurrentPage }) => {
 

	const topics = [
		{
			id: 1,
			name: "monsters",
			img: "https://images1.mtggoldfish.com/uploads/ckeditor/pictures/2615/content_Monster_Manual_5e_-_Beholder_-_p28.jpg",
			component: "MonstersPage",
		},
		{
			id: 2,
			name: "spells",
            img: "https://mythical.ink/img/icons/dnd5e/evocation.png",
            // !
            component: "MonstersPage",
            // !
		},
	];

	return (
		<main>
			{topics.map((topic) => {
				return (
					<TopicCard
						key={`topicId.${topic.id}`}
						topic={topic}
						setCurrentPage={setCurrentPage}
					/>
				);
			})}
		</main>
	);
};

export default TopicsList;
