import "./Search.css";
import Menu from "../Visual/Menu/Menu";
import Footer from "../Visual/Footer/Footer";
import Results from "../Results/Results";
import "./Search.css";
import { useEffect, useState } from "react";

function ApiSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-05-14&sortBy=publishedAt&apiKey=e63476bfedc24dd0925db6a95b4e518a`
    );
    console.log("response : ", response);
    let data = await response.json();
    console.log("data : ", data);
    setSearchResults(data.articles);
    setSearchTerm("");
  };

  const showResponse = () => {
    if (searchResults.length >= 0) {
      return searchResults.map((item, key) => {
        return (
          <>
            <Results
              key={key}
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              url={item.url}
              content={item.content}
            />
          </>
        );
      });
    } else {
      return <h3>Aucun résultat trouvé</h3>;
    }
  };
  useEffect(() => {
    console.log("Value of search :", searchTerm), [searchTerm];
  });

  return (
    <header>
      <div>
        <Menu />
      </div>
      <div className="searchNav">
        <input
          type="text"
          id="searchbar"
          onChange={getInput}
          placeholder="Insert your search"
        ></input>
        <button className="valider" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="ActusResponse">{showResponse()}</div>
      <Footer />
    </header>
  );
}

export default ApiSearch;
