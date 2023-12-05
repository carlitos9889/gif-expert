import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGridLayout from "./Layouts/GifGridLayout";

const App = (): JSX.Element => {
	const [categories, setcategories] = useState(["One Punch"]);

	return (
		<main className="p-[60px]">
			<section className="my-2">
				<h2 className="text-5xl mb-4">GifExpert</h2>
				<AddCategory setcategories={setcategories} />
				<hr />
			</section>
			<section className="mt-4">
				<ol>
					{categories.map((category) => (
						<GifGridLayout key={category} category={category} />
					))}
				</ol>
			</section>
		</main>
	);
};

export default App;
