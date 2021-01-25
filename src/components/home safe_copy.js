import React, { useState, useEffect } from "react";
import "./home.css";

function Home(props) {
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [data, setData] = useState();
  
  useEffect(() => {
    const paramsData = props.match.params;
    console.log(paramsData.type);
    setType(paramsData.type);
    setId(paramsData.id);
    console.log(paramsData);

    fetch(`https://swapi.dev/api/${paramsData.type}/${paramsData.id}`)
      .then((data) => data.json())
      .then((chars) => {
        console.log(chars);
        setData(chars);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <div className="search-bar">
        <p>Search for:</p>
        <select
          className="drop-down"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <p>Id:</p>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <a href={`/${type}/${id}`}>Search</a>
      </div>
      {type === "planets" && data && (
        <div>
          <h2>{data.name}</h2>
          <br />

          <div className="data">
            <p>Climate:</p>
            <p>{data.climate}</p>
          </div>

          <div className="data">
            <p>Terrain:</p>
            <p>{data.terrain}</p>
          </div>

          <div className="data">
            <p>Surface Water:</p>
            <p>{data.surface_water}</p>
          </div>

          <div className="data">
            <p>Population:</p>
            <p>{data.population}</p>
          </div>
        </div>
      )}

      {type === "people" && data && (
        <div>
          <h2>{data.name}</h2>
          <br />
          <div className="data">
            <p>Height:</p>
            <p>{data.height}</p>
            <p>cm</p>
          </div>

          <div className="data">
            <p>Mass:</p>
            <p>{data.mass}</p>
            <p>kg</p>
          </div>

          <div className="data">
            <p>Hair Color:</p>
            <p>{data.hair_color}</p>
          </div>

          <div className="data">
            <p>Skin Color:</p>
            <p>{data.skin_color}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
