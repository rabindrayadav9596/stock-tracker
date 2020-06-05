import axios from "axios";
const api_key = "HVVQSNE3KY1U9EPU";
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${api_key}`;
const url_symbol = "./symbols.json";
export const fetchData = async (symbol) => {
  let changeableUrl = url;
  if (symbol) {
    changeableUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${api_key}`;
    console.log(changeableUrl);
  }
  try {
    const { data } = await axios.get(changeableUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSymbol = async () => {
  try {
    const response = await axios.get(url_symbol);
    return response;
  } catch (error) {
    console.log(error);
  }
};
