import './Container.css'
import {Container} from "@mui/material";

const ContainerLayout = ({ children }) => {
    return (
        <Container className={'container'} maxWidth={false} style={{padding: 0}}>
            {children}
        </Container>
    )
}
export default ContainerLayout
