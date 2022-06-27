import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../../components/Search-form";
import Footer from "../../components/Footer";
import { Title, Body } from "./search.styles";

export type DataProps = {
  avatar_url: string;
  login: string;
  followers: string;
  following: string;
}

const Search = () => { 
  const [data, setData] = useState<DataProps | undefined>();

  useEffect(() => {
    fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  const handleSubmit = (user: string) => {
      fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => setData(data)) 
  }

  return(
    <>
      <Body>
        <Navigation background="#24292f" />
        <Title>Search a profile</Title>
        <SearchForm data={data} submitCallback={handleSubmit} />
      </Body>
      <Footer />
    </>
  )
};

export default Search;
