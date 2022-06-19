import { useState,useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../../components/Search-form/Search-form";
import Footer from "../../components/Footer/Footer";
import { Title } from "./search.styles";

const Search = () => { 
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  const handleSubmit = (user) => {
      fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => setData(data)) 
  }

  return(
    <>
      <Navigation background="#24292f" />
      <Title>Search a profile</Title>
      <SearchForm data={data} submitCallback={handleSubmit} />
      <Footer position="absolute"/>
    </>
  )
};

export default Search;
