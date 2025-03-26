import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/index";
import About from "../pages/about/index";

export default function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/about" element={<About />} />
			<Route path="*" element={<h1>Not found</h1>} />
		</Routes>
	);
}
