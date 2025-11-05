import { Routes, Route, Navigate } from "react-router-dom";
import { User, BookOpen, Trophy } from "lucide-react";

// Components
import Sidebar from "./components/Sidebar";
import RightColumn from "./components/RightColumn";

// Pages
import AchievementsPage from "./pages/AchievementsPage";
import LessonsPage from "./pages/LessonsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

function App() {
	const navItems = [
		{ key: "profile", label: "Profile", icon: User, to: "/profile" },
		{ key: "lessons", label: "Lessons", icon: BookOpen, to: "/lessons" },
		{ key: "achievements", label: "Achievements", icon: Trophy, to: "/achievements" },
	];

	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100">
			{/* Fixed columns */}
			<Sidebar items={navItems} />
			<RightColumn streak={7} points={505} />

			{/* Center – routed content only scrolls */}
			<main className="absolute left-60 right-80 top-0 bottom-0 overflow-y-auto">
				<Routes>
					<Route path="/" element={<Navigate to="/lessons" replace />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/lessons" element={<LessonsPage />} />
					<Route path="/achievements" element={<AchievementsPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
