import { SearchBarContainer } from "./search.styles";
import { useState } from "react";

const Search = () => { 
  const [data, setData] = useState({});
  // const [click, setClick] = useState(false);
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
    <div>
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
      {data && <h3>Name: {data.name}</h3>}
      {data && <img src={data.avatar_url} alt={`user ${data.login}`}/>}
      {data && <h3>Followers: {data.followers}</h3>}
      {data && <h3>Following: {data.following}</h3>}
    </div>
  )
}

export default Search;