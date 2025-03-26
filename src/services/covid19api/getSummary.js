import api from "./api";

export const getSummary = async ({ setSummary }) => {
	const response = await api.get("/summary");
	return setSummary(response.data);
};
