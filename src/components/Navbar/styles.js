import styled from "styled-components";

export const Navbar = styled.nav`
	* {
		box-sizing: border-box;
	}

	.nav {
		height: 50px;
		width: 100%;
		background-color: #fff;
		position: relative;
		box-shadow: 0px 0px 5px 0px #ccc;
	}

	.nav > .nav-header {
		display: inline;
	}

	.nav > .nav-header > .nav-title {
		display: inline-block;
		font-size: 22px;
		color: #fff;
		padding: 5px 10px 10px 9.4%;
		@media (max-width: 1000px) {
			padding: 5px 10px;
		}
	}

	.nav > .nav-links {
		display: inline-block;
		float: right;
		font-size: 18px;
		padding-right: 9.4%;
	}

	.nav > .nav-links > a {
		display: inline-block;
		padding: 13px 10px;
		text-decoration: none;
		color: #ccc;
	}

	.nav > .nav-links > a:hover {
		color: #ef6160;
	}

	@media (max-width: 1000px) {
		.nav > .nav-links {
			padding: 0;
		}
	}
`;
