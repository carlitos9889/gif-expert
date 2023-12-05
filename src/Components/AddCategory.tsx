import { useState } from "react";

interface Props {
	setcategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddCategory = ({ setcategories }: Props): JSX.Element => {
	const [inputValue, setinputValue] = useState<string>("");
	const handleOnChange = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>) => {
		setinputValue(target.value);
	};

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setcategories((categories) => [inputValue, ...categories]);
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<input
				onChange={handleOnChange}
				type="text"
				value={inputValue}
				placeholder="Add Category"
				className="w-full py-2 px-3 mt-1 mb-2"
			/>
		</form>
	);
};

export default AddCategory;
