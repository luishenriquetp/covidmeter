import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes />
			</div>
		</Router>
	);
}

export default App;