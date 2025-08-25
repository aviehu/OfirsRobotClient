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
    const phases = new Array(15).fill(null)
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Robot App - Main Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <ContainerLayout>

            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(5, 1fr)', 
                gap: '16px', 
                rowGap: '40px',
                padding: '16px',
                justifyItems: 'center' 

            }}>
                {
                    phases.map((_, index) => {
                        const phase = index + 1
                        return (
                            <Stack direction={"row"}>
                                <Button variant={"contained"} color={"primary"} onClick={() => runPhase(phase)}> Start phase {phase} </Button>
                                <Tooltip title={`Edit phase ${phase}`}>
                                    <IconButton onClick={() => navigate(`/editphase/${phase}`)}>
                                        <EditIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        )
                    })
                }
            </div>
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
        </div>
    )
}