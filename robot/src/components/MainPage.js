import {AppBar, Button, Stack, Toolbar, Typography} from "@mui/material";
import ContainerLayout from "./ContainerLayout";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Robot App - Main Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stack spacing={5} alignItems={"center"}>
                <div></div>
                <Stack direction={"row"} spacing={1}>
                    <Button> Start phase 1 </Button>
                    <IconButton onClick={() => navigate('/editphase/1')}>
                        <EditIcon/>
                    </IconButton>
                </Stack>
                <Stack direction={"row"}>
                    <Button> Start phase 2 </Button>
                    <IconButton onClick={() => navigate('/editphase/2')}>
                        <EditIcon/>
                    </IconButton>
                </Stack>
            </Stack>
        </ContainerLayout>
    )
}