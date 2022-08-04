import * as S from "./styles";
import Card from "../Card";
import { getSummary } from "../../services/covid19api/getSummary";

import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

const Search = () => {
	const [summary, setSummary] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [filterData, setFilterData] = useState();

	useEffect(() => {
		getSummary({ setSummary });
	}, []);

	const HandleFilterByCountryName = (e) => {
		setSearchInput(e);
		if (e !== "") {
			const getCountry = summary.Countries.filter((country) =>
				country.Country.toLowerCase().startsWith(e.toLowerCase())
			);
			setFilterData(getCountry);
		} else {
			setFilterData(summary);
		}

		console.log(e);
	};

	return (
		<S.Search>
			<div className="searchCard">
				<form>
					<S.StyledInput className={"inputWithIcon"}>
						<S.Input
							onChange={(e) => HandleFilterByCountryName(e.target.value)}
							placeholder="Digite o nome de um país"
						/>
						<div className="left-icon">
							<BsSearch />
						</div>
					</S.StyledInput>
				</form>
			</div>
			{searchInput.length > 0
				? filterData.map((item, index) => (
						<Card
							key={index}
							name={item.Country}
							deaths={item.TotalDeaths}
							cases={item.TotalConfirmed}
						/>
				  ))
				: summary.Countries?.map((country,index) => (
						<Card
						key={index}
							name={country.Country}
							deaths={country.TotalDeaths}
							cases={country.TotalConfirmed}
						/>
				  ))}
		</S.Search>
	);
};

export default Search;
