import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } 
from "./../components/Styles";

//logo
import Logo from "./../assets/logo.png";

const Home = () => {
    return (
        <div>
            <div>
                <Avatar image={Logo} />
            </div>
            <StyledTitle size={65}>
                Welcome To My WebSite
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our page
            </StyledSubTitle>

            <ButtonGroup><StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default Home;