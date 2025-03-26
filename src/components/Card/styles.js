import styled from "styled-components";

export const Main = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Spectral&display=swap");
	border: 2px solid #f6f6f6;
	background: #fff;
	width: 60%;
	display: block;
	margin: 0 auto;
	padding: 30px;
	margin-bottom: 30px;
	border-radius: 5px;
	@media (max-width: 1000px) {
		width: 90%;
		padding: 10px;
	}

	h1 {
		text-align: center;
		font-size: 24px;
		color: #504645;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	li {
		text-align: center;
		font-family: sans-serif;
		font-size: 16px;
	}

	li span {
		color: #ef6160;
		font-size: 24px;
		font-family: "Spectral", serif;
	}
`;
