import {useState , useEffect} from 'react'
import '../App.css';
import  axios  from 'axios';

const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test"

const Aboutpage = () => {

  const [articles , setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(src)
      .then(data => {
        setArticles(data.data.response.results);
      })
  }, [])

  return (
    <div className="Aboutpage">
      {articles.map(article => {
        return(
          <p><a href={article.webUrl}>{article.webTitle}</a></p>
        )
      })}
    </div>
  )
}


export { Aboutpage }
