import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Plan Genocid",
	description:
		"Aplikacija koja prezentuje dokumentaciju o Genocidu u Srebrenici kroz niz interaktivnih elemenata",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
