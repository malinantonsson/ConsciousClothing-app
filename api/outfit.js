import axios from "axios";

const getOutfits = () => axios.get("http://localhost:3000/outfits");

export { getOutfits };
