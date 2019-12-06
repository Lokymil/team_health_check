import React, { useState } from "react";
import { loader } from "csv.macro";
import Select from "react-select";
import Radar from "./Radar";
import Motivation from "./Motivation";
import EtatEsprit from "./EtatEsprit";
import Archetype from "./Archetype";

const squadOptions = [
  { value: 0, label: "Toutes" },
  { value: 1, label: "Squad 1" },
  { value: 2, label: "Squad 2" },
  { value: 3, label: "Squad 3" }
];

const isJuniorOptions = [
  { value: undefined, label: "Tous" },
  { value: true, label: "Junior" },
  { value: false, label: "Pas junior" }
];

const isOldOptions = [
  { value: undefined, label: "Tous" },
  { value: true, label: "Plus de 6 mois" },
  { value: false, label: "Moins de 6 mois" }
];

const isDevOptions = [
  { value: undefined, label: "Tous" },
  { value: true, label: "Dev" },
  { value: false, label: "Pas dev" }
];

function App() {
  const [squad, setSquad] = useState(0);
  const [isJunior, setIsJunior] = useState(undefined);
  const [isOld, setIsOld] = useState(undefined);
  const [isDev, setIsDev] = useState(undefined);

  const data = loader("./data.csv")
    .filter(item => item.challenge)
    .filter(item => !squad || parseInt(item.squad) === squad)
    .filter(
      item =>
        isJunior === undefined || item.isJunior.toLowerCase() === `${isJunior}`
    )
    .filter(
      item => isOld === undefined || item.isOld.toLowerCase() === `${isOld}`
    )
    .filter(
      item => isDev === undefined || item.isDev.toLowerCase() === `${isDev}`
    );

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", height: "800px" }}>
        <div style={{ height: "400px", width: "100%" }}>
          <Radar data={data} />
          <Motivation data={data} />
        </div>
        <div style={{ height: "400px", width: "100%" }}>
          <EtatEsprit data={data} />
          <Archetype data={data} />
        </div>
      </div>
      <div>Nombre de personnes représentées : {data.length}</div>
      Squad :
      <Select
        options={squadOptions}
        onChange={option => setSquad(option.value)}
        value={squadOptions.find(option => option.value === squad)}
      />
      Expérience :
      <Select
        options={isJuniorOptions}
        onChange={option => setIsJunior(option.value)}
        value={isJuniorOptions.find(option => option.value === isJunior)}
      />
      Ancienneté sur le projet :
      <Select
        options={isOldOptions}
        onChange={option => setIsOld(option.value)}
        value={isOldOptions.find(option => option.value === isOld)}
      />
      Role :
      <Select
        options={isDevOptions}
        onChange={option => setIsDev(option.value)}
        value={isDevOptions.find(option => option.value === isDev)}
      />
    </div>
  );
}

export default App;
