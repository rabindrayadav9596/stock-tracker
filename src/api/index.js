import axios from "axios";
const api_key = "HVVQSNE3KY1U9EPU";
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${api_key}`;

export const fetchData = async (country) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
