import { useState } from "react";
import {SearchFormContainer, Text} from './search-form.styles';

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
      {data && <img src={data.avatar_url} alt={`user ${data.login}`}/>}
      {data && <Text>Name: {data.name}</Text>}
      {data && <Text>Followers: {data.followers}</Text>}
      {data && <Text>Following: {data.following}</Text>}
    </SearchFormContainer>
  )
}

export default SearchForm;