import axios, { AxiosInstance } from "axios";
import { GIFExpertAPIModel } from "../models/gifExpertApiModel";

class GetGifsApiRepository {
	private axiosInstance: AxiosInstance;
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: "https://api.giphy.com/v1/gifs/",
			params: {
				api_key: "DklhFkIhtKu9R3QYyaiUxfDloeDoYn6f",
				limit: 10,
			},
		});
	}

	async getGifsByQuery(query: string) {
		try {
			const { data } = await this.axiosInstance.get<GIFExpertAPIModel>(
				"search",
				{
					params: {
						q: query,
					},
				}
			);
			const { data: gifs } = data;
			return gifs;
		} catch (error) {
			throw new Error(error as string);
		}
	}
}
const repository = new GetGifsApiRepository();
export default repository;
