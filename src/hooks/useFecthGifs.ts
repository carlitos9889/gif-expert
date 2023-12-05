import { useEffect, useState } from "react";
import repository from "../helpers/repositpry";

interface StatusFecth {
	data: GifGridItem[];
	loading: boolean;
}
interface Props {
	category: string;
}
interface GifGridItem {
	title: string;
	id: string;
	url: string;
}

const useFecthGifs = ({ category }: Props) => {
	const [state, setstate] = useState<StatusFecth>({
		data: [],
		loading: true,
	});

	const getGifs = async (query: string) => {
		setstate({
			...state,
			loading: true,
		});
		const response = await repository.getGifsByQuery(query);
		const responseImages = response.map((gif) => ({
			title: gif.title,
			id: gif.id,
			url: gif.images.downsized_medium.url,
		}));

		setstate({
			data: responseImages,
			loading: false,
		});
	};

	useEffect(() => {
		getGifs(category);
	}, [category]);

	return state;
};

export default useFecthGifs;
