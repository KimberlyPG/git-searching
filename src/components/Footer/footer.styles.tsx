import styled from "styled-components";

type PositionProps = {
    position: string;
}

export const FooterContainer = styled.div<PositionProps>`
    heigh: 20px;
    width: 100%;
    background: white;
    bottom: 0px;
    position: ${props => props.position};
`
export const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    @media screen and (max-width: 800px){
        width: 30%;
    }
    @media screen and (max-width: 414px){
        width: 50%;
    }
`

export const Title = styled.div`
    color: #24292f; 
    font-size: 25px;
`

export const Name = styled.div`
    color: #24292f;
    font-size: 15px;
    margin: 9px auto;
    &copy
`
