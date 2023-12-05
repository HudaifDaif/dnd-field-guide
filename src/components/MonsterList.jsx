import { getMonsterBySearch, getMonsters } from "../utils/api/api.monsters";
import { useEffect, useState } from "react";

import MonsterCard from "./MonsterCard";

const MonsterList = ({ searchTerm }) => {
	const [monsters, setMonsters] = useState([]);

	useEffect(() => {
		!searchTerm &&
			getMonsters().then((resMonsters) => setMonsters(resMonsters));
		searchTerm &&
			getMonsterBySearch(searchTerm)
				.then((resMonsters) => {
					setMonsters([resMonsters]);
				})
				.catch((err) => {
					err.status === 404 && setMonsters([]);
				});
	}, [searchTerm]);

	return (
		<main>
			{monsters.map((monster) => {
				return (
					<MonsterCard
						key={`monsterIndex.${monster.index}`}
						monster={monster}
					/>
				);
			})}
		</main>
	);
};

export default MonsterList;
