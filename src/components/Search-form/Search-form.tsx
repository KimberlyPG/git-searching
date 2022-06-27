import { useState, FormEvent, ChangeEvent, FC } from "react";
import {SearchFormContainer, SearchBar, Text, MainInformation, ExtraInformation } from './search-form.styles';

export type DataProps = {
  avatar_url: string;
  login: string;
  followers: string;
  following: string;
}

type SearchFormProps = {
  data: DataProps | undefined;
  submitCallback(user: string):void;
}

const SearchForm:  FC<SearchFormProps> = ({ data, submitCallback }) => { 
  const [user, setUser] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitCallback(user);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
            onChange={handleChange}
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
