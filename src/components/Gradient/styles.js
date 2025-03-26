import styled from "styled-components";

export const Gradient = styled.div`
	position: absolute;
	z-index: -1;
	background-image: linear-gradient(135deg, #f5e5e1 20%, #fff 80%);
	width: 700px;
	height: 500px;
	border-bottom-right-radius: 1800px;
	@media (max-width: 1000px) {
		width: 340px;
		height: 340px;
	}
`;
