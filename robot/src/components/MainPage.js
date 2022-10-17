import {AppBar, Button, Stack, Toolbar, Typography} from "@mui/material";
import ContainerLayout from "./ContainerLayout";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";
import percentage from "../utils/percentage"
import getStates from "../utils/getStates";
import runPhase from "../utils/runPhase";

export default function MainPage() {
    const navigate = useNavigate();

    async function startPhase(phase) {
        const percentageTable = await percentage()
        const states = await getStates(phase)
        runPhase(percentageTable, states)
    }

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
                <Stack direction={"row"}>
                    <Button onClick={() => startPhase(1)}> Start phase 1 </Button>
                    <IconButton onClick={() => navigate('/editphase/1')}>
                        <EditIcon/>
                    </IconButton>
                </Stack>
                <Stack direction={"row"}>
                    <Button onClick={() => startPhase(2)}> Start phase 2 </Button>
                    <IconButton onClick={() => navigate('/editphase/2')}>
                        <EditIcon/>
                    </IconButton>
                </Stack>
            </Stack>
        </ContainerLayout>
    )
}