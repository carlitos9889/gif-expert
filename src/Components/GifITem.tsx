interface Props {
	url: string;
	title: string;
}

const GifItem = ({ url, title }: Props): JSX.Element => {
	return (
		<div className="flex flex-col justify-between shadow-lg content-center border-2 rounded-2xl overflow-hidden pb-2">
			<img
				src={`${url}`}
				alt={title}
				className="rounded-2xl  max-h-48 w-full h-[80%]"
			/>
			<div className="px-2">
				<p className="text-center text-sm">{title}</p>
			</div>
		</div>
	);
};

export default GifItem;
