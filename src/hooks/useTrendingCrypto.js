import { useState, useEffect } from 'react';
import axios from 'axios';

const useTrendingCrypto = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd', // Change to your preferred currency
            per_page: 5, // Adjust for the number of trending coins
            order: 'gecko_trends', // Sorts by trending
          },
        });
        const formattedData = response.data.map((coin) => ({
          id: coin.id,
          image: `https://www.coingecko.com/coins/${coin.id}/images/thumb-small.jpg`, // Construct image URL
          name: coin.name,
          symbol: coin.symbol,
          current_price: coin.current_price,
          price_change_24h: coin.price_change_percentage_24h,
        }));
        setData(formattedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useTrendingCrypto;
