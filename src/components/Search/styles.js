import styled from "styled-components";

export const Search = styled.div`
	div.searchCard {
		border 2px solid #f6f6f6;
		background: #fff;
		width: 60%;
		display: block;
		margin: 0 auto;
		padding: 30px;
		margin-bottom: 30px;
		border-radius: 5px;
		@media (max-width: 1000px) {
			width:90%;
			padding:10px;
        };
	}
	
`;

export const Input = styled.input`
	height: 30px;
	font-size: 16px;
	width: 100%;
	border: none;
	border-bottom: 2px solid #aaa;
	margin: 8px 0;
	outline: none;
	padding: 8px;
	box-sizing: border-box;
	transition: 0.3s;
	padding-left: 30px;
	cursor: pointer;

	&:focus {
		border-color: #ef6160;
	}

	:focus + .left-icon {
		svg {
			fill: #ef6160;
		}
	}
`;

export const StyledInput = styled.div`
	&.inputWithIcon {
		position: relative;
	}

	.left-icon {
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
		svg {
			fill: black;
			transition: 0.3s;
		}
	}
`;
