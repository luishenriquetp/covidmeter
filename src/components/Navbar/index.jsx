import * as S from "./styles";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
	return {
		color: isActive ? "red" : "ccc",
	};
};

const Navbar = () => (
	<S.Navbar>
		<nav>
			<div className="nav">
				<div className="nav-header">
					<div className="nav-title">
						<NavLink style={navLinkStyles} to="/">
							<img src={Logo} alt="Covidômetro" />
						</NavLink>
					</div>
				</div>

				<div className="nav-links">
					<NavLink style={navLinkStyles} to="/about">
						About
					</NavLink>
				</div>
			</div>
		</nav>
	</S.Navbar>
);
export default Navbar;
