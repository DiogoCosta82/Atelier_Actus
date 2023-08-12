import "./Home.css";
import Menu from "../Visual/Menu/Menu";
import Footer from "../Visual/Footer/Footer";
import { useEffect, useState } from "react";
import Actualites from "../Visual/Actualites/Actualites";
import { Card, Col, Row } from "antd";
import React from "react";

function Home() {
  const [articles, setArticles] = useState([]);

  const NewsResponse = async () => {
    let NewsResponse2 = await fetch(
      `https://newsapi.org/v2/everything?q=sport&from=2023-05-14&sortBy=publishedAt&apiKey=e63476bfedc24dd0925db6a95b4e518a`
    );
    console.log("NewsResponse2 : ", NewsResponse2);
    let NewsData = await NewsResponse2.json();
    console.log("NewsData : ", NewsData);
    setArticles(NewsData.articles);
  };
  const showResponse = () => {
    console.log("articlesRender", articles);
    if (articles.length >= 0) {
      return articles.slice(0, 4).map((item, key) => {
        return (
          <>
            <Actualites
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
    NewsResponse();
  }, []);

  return (
    <>
      <div>
        <nav>
          <Menu />
        </nav>
      </div>
      <div className="homeContainer">
        <h1>Accueil</h1>
        <h4>Actualités : </h4>
        <div className="cardContainer">
          <Row gutter={7}>
            <Col span={5}>
              <Card title={showResponse.title} bordered={true}>
                <div className="renderActual">{showResponse().slice(0, 1)}</div>
              </Card>
            </Col>
            <Col span={5}>
              <Card title={showResponse.title} bordered={true}>
                <div className="renderActual">{showResponse().slice(1, 2)}</div>
              </Card>
            </Col>
            <Col span={5}>
              <Card title={showResponse.title} bordered={true}>
                <div className="renderActual">{showResponse().slice(2, 3)}</div>
              </Card>
            </Col>
            <Col span={5}>
              <Card title={showResponse.title} bordered={true}>
                <div className="renderActual">{showResponse().slice(3, 4)}</div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
