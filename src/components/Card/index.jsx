import React from "react";
import * as S from "./styles";

const Card = ({ name, deaths, cases }) => {
	const Fatality = (deaths / cases).toFixed(2);

	return (
		<S.Main>
			<>
				<h1>{name}</h1>
				<ul>
					<li>
						Mortes: <br />
						<span>{deaths}</span>
					</li>
					<li>
						Casos: <br />
						<span>{cases}</span>
					</li>
					<li>
						Fatalidade: <br />
						<span>{Fatality}%</span>
					</li>
				</ul>
			</>
		</S.Main>
	);
};
export default Card;
