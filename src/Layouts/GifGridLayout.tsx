import GifItem from "../Components/GifITem";
import useFecthGifs from "../hooks/useFecthGifs";

interface Props {
	category: string;
}

const GifGridLayout = ({ category }: Props): JSX.Element => {
	const { loading, data } = useFecthGifs({ category });
	if (loading) {
		return <h1>Cargando data</h1>;
	}

	return (
		<div className="my-3">
			<h2 className="font-semibold text-2xl">{category}</h2>
			<ol className="grid grid-cols-5 gap-2 auto-rows-fr">
				{data.map(({ url, title, id }) => (
					<GifItem title={title} url={url} key={id} />
				))}
			</ol>
		</div>
	);
};

export default GifGridLayout;
