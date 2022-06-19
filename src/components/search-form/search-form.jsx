import { useState } from "react";
import {SearchFormContainer, SearchBar, Text, MainInformation, ExtraInformation } from './search-form.styles';

const SearchForm = ({ data, submitCallback }) => { 
  const [user, setUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitCallback(user);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    try{
      setUser(event.target.value);
    } catch(e) {
      console.log(e);
    }
  };

  return(
    <SearchFormContainer>
      <form onSubmit={handleSubmit}>
        <SearchBar
            type='text'
            // value={user}
            onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <MainInformation>
        <div>
          {data && <img src={data.avatar_url} alt={`user ${data.login}`}/>}
          {data && <Text>Name: {data.login}</Text>}
        </div>
        <ExtraInformation>
          {data && <Text>Followers: {data.followers}</Text>}
          {data && <Text>Following: {data.following}</Text>}
        </ExtraInformation>
      </MainInformation>
    </SearchFormContainer>
  )
}

export default SearchForm;