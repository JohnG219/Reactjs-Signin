import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea } 
from "./../components/Styles";

//logo
import Logo from "./../assets/logo.png";

const Dashboard = () => {
    return (
        <div>
            <div>
                <Avatar image={Logo} />
            </div>

            
            <StyledTitle size={65}>
                Hello, Thank You For Login
            </StyledTitle>

            <ButtonGroup><StyledButton to="#">Logout</StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default Dashboard;