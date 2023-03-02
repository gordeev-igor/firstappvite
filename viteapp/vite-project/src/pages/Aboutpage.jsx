import { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from 'styled-components';

const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test"

const Aboutpage = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios
      .get(src)
      .then(data => {
        setArticles(data.data.response.results);
        setLoading(false)
      })
  }, [])

  return (
    <div className="Aboutpage">
      {
        loading ?
          <LoadStyle> 
            <ScaleLoader
            color={'#2fa161'}
            loading={loading}
            size={250}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </LoadStyle>
          :
          articles.map(article => {
            return (
              <p><a href={article.webUrl}>{article.webTitle}</a></p>
            )
          })
      }
    </div>
  )
}

const LoadStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;




export { Aboutpage }
