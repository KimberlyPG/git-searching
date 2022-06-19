import { FooterContainer, InformationContainer, Title, Name } from "./footer.styles";

const Footer = ({ position }) => {
    return(
        <FooterContainer position={position}>  
            <InformationContainer >
                <Title>GitHub</Title>
                <Name>&#169; Kimberly García</Name>
            </InformationContainer>
        </FooterContainer>
    )
}

export default Footer;