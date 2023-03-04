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
    <About>
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
          <AboutText>
            {articles.map(article => {
              return (
                <p><TextLink href={article.webUrl}>{article.webTitle}</TextLink></p>
              )
            })
            }
          </AboutText>
      }
    </About>
  )
}

const TextLink = styled.a`
  line-height: 10px;
  color: #464655;

  &:hover {
  color: #68A691;
  }
`;

const About = styled.div`
  max-width: 100%;
  width: calc(100% - 32px);
  font-size: 30px;
  padding: 16px 0;
  

`;

const AboutText = styled.div`
  font-family: "Hammersmith One";
  font-style: normal;
  font-weight: 400; 
  line-height: 170%;

  
  
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
  
`;

const LoadStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;




export { Aboutpage }
