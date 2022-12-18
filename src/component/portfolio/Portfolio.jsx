import { useEffect, useState } from "react";

import PortFolioList from "../portFolioList/PortFolioList";
import "./portfolio.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected,setSelected] = useState("featured")
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "App Desktop",
    },
    {
      id: "web",
      title: "App Web",
    },
    {
      id: "mobile",
      title: "App Mobile",
    },
    {
      id: "design",
      title: "Designe",
    },
  ,
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  
  
  return (
    <section>
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <h2 className="section__subtitle text-light">Ce que je peut faire</h2>
      <ul>
       {list.map(item=>(<PortFolioList title={item.title}
        active={selected === item.id} 
       setSelected={setSelected}
       id={item.id}
       
       />
       ))}

</ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </section>   
  );
}