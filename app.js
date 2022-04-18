//const fetch = require("node-fetch");

import fetch from "node-fetch";

let luke = {};
let films = [];
let specie = {};
let vehicles = [];
let starships = [];

// try {

// } catch (error) {

// }

// fetch("http://swapi.py4e.com/api/people/1/")
//   .then((resp) => resp.json())
//   .then((resp) => (luke = resp))
//   .then(() => console.log("luke", luke));

async function getInfoLuke() {
  const url = "http://swapi.py4e.com/api/people/1/";
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json(); //assuming data is json
  luke = data;
  console.log(luke);
}

async function getInfoFilms() {
  let url = "http://swapi.py4e.com/api/films/1/";
  let res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json(); //assuming data is json
  films.push(data);
  //   console.log(films);

  url = "http://swapi.py4e.com/api/films/2/";
  res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  data = await res.json(); //assuming data is json
  films.push(data);

  url = "http://swapi.py4e.com/api/films/3/";
  res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  data = await res.json(); //assuming data is json
  films.push(data);

  url = "http://swapi.py4e.com/api/films/6/";
  res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  data = await res.json(); //assuming data is json
  films.push(data);

  url = "http://swapi.py4e.com/api/films/7/";
  res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  data = await res.json(); //assuming data is json
  films.push(data);

  console.log(films);
}

async function getInfoSpecie() {
  const url = "https://swapi.py4e.com/api/species/1/";
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json(); //assuming data is json
  specie = data;
  console.log(specie);
}

async function getInfoVehicles() {
  let url = "http://swapi.py4e.com/api/vehicles/14/";
  let res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json(); //assuming data is json
  vehicles.push(data);
  //   console.log(films);

  url = "http://swapi.py4e.com/api/vehicles/30/";
  res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  data = await res.json(); //assuming data is json
  vehicles.push(data);

  console.log(vehicles);
}

async function getInfoStarships() {
  let url = "http://swapi.py4e.com/api/starships/12/";
  let res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json(); //assuming data is json
  starships.push(data);
  //   console.log(films);

  url = "http://swapi.py4e.com/api/starships/22/";
  res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  data = await res.json(); //assuming data is json
  starships.push(data);

  console.log(starships);
}

getInfoLuke();
getInfoFilms();
getInfoSpecie();
getInfoVehicles();
getInfoStarships();
