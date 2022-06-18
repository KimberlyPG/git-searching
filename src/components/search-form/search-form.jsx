import { useState } from "react";
import {SearchFormContainer, Text, MainInformation, ExtraInformation } from './search-form.styles';

const SearchForm = () => { 
  const [data, setData] = useState({});
  const [user, setUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => setData(data)) 
  };
  console.log(data);    

  
  const handleSearch = (event) => {
    event.preventDefault();
    try{
      setUser(event.target.value);
    } catch(e) {
      console.log(e);
    }
  };
  console.log(user);

  return(
    <SearchFormContainer>
      <form onSubmit={handleSubmit}>
        {/* <SearchBarContainer> */}
        <input
            type='text'
            // value={user}
            onChange={handleSearch}
        />
        {/* </SearchBarContainer>   */}
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