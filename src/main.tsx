import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<div className="px-4 sm:px-6 lg:px-8 bg-white">
		<App />
	</div>
);
