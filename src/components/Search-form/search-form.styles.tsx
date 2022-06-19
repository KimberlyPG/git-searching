import styled from 'styled-components';

export const SearchFormContainer = styled.div`
    margin: auto;
    width: 50%;
    text-align: center; 
    padding-top: 3%;
    
    img {
        padding-top: 7%;
        width: 50%;
    }

    @media screen and (max-width: 414px){
        img {
            width: 90%;
        }
        width: 100%;
    }
`
export const SearchBar = styled.input`
    width: 70%;
    margin: auto;
    // display: block;
    margin-bottom: 5%;
    margin-top: 5%;
`

export const Text = styled.div`
    font-size: 15px;
    color: #707070;
    @media screen and (max-width: 414px){
        font-size: 19px;
        padding: 2%;
        margin-bottom: 2%;
    }
`

export const MainInformation = styled.div`
    display: flex;
    @media screen and (max-width: 414px){
        display: block;
    }
`

export const ExtraInformation = styled.div`
    padding-top: 25px;
    width: 50%;
    @media screen and (max-width: 414px){
        width: 100%;
    }
`
