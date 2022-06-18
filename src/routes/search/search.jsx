import Navigation from "../../routes/navigation/navigation";
import SearchForm from "../../components/search-form/search-form";
import Footer from "../../components/footer/footer";
import { Title } from "./search.styles";

const Search = () => { 
  return(
    <>
      <Navigation background="#24292f" />
      <Title>Search a profile</Title>
      <SearchForm />
      <Footer position="absolute"/>
    </>
  )
};

export default Search;