import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Calendar from "./pages/Calendar";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="/Calendar" element={<Calendar />} />
			</Routes>
			
		</BrowserRouter>
	);
}

export default App;