import {AppBar, Button, Paper, Stack, Toolbar, Typography, Tooltip} from "@mui/material";
import ContainerLayout from "./ContainerLayout";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";
import runPhase from "../utils/runPhase";
import DangerousIcon from '@mui/icons-material/Dangerous';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import stopPhase from "../utils/stopPhase";
import reset from "../utils/reset";

export default function MainPage({ status }) {
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
            <Stack marginTop={10} spacing={5} justifyContent={"center"} alignItems={"center"} direction={"row"}>
                <Stack direction={"row"}>
                    <Button variant={"contained"} color={"primary"} onClick={() => runPhase(1)}> Start phase 1 </Button>
                    <Tooltip title={"Edit phase 1"}>
                        <IconButton onClick={() => navigate('/editphase/1')}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                </Stack>
                <Stack direction={"row"}>
                    <Button variant={"contained"} color={"primary"} onClick={() => runPhase(2)}> Start phase 2 </Button>
                    <Tooltip title={"Edit phase 2"}>
                        <IconButton onClick={() => navigate('/editphase/2')}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
            <Stack marginTop={5} spacing={5} justifyContent={"center"} alignItems={"center"} direction={"row"}>
                <Paper style={{textAlign:"center", minWidth: 350 ,padding: 15}}>
                    { status }
                </Paper>
            </Stack>
            <Stack direction={"row"} spacing={5} justifyContent={"center"} alignItems={"center"}>
                <Tooltip title={"Stop phase"}>
                    <IconButton style={{color:"red"}} onClick={stopPhase}>
                        <DangerousIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Move to position 0"}>
                    <IconButton onClick={reset}>
                        <RestartAltIcon color={"primary"}/>
                    </IconButton>
                </Tooltip>
            </Stack>
        </ContainerLayout>
    )
}