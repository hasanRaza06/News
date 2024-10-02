import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import NavBar from './NavBar';
import Spinner from './Spinner';

export default function Home(props) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);  // Correct state initialization

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2df6567fcbe74d359b3b902907df24c7`);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [props.category]);  

  return (
    <div>
      <NavBar />
      {loading && <Spinner />}  
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
        {
          news.map((n) => (
            <Card
              title={n.title}
              description={n.description}
              urlToImage={n.urlToImage}
              more={n.url}
              author={n.author}
              at={n.publishedAt}
              source={n.source.name}
            />
          ))
        }
      </div>
    </div>
  );
}
