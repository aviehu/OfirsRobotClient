import {useNavigate, useParams} from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import {AppBar, Button, Stack, TextField, Toolbar, Tooltip, Typography} from "@mui/material";
import {useState, useEffect} from "react";
import addPosition from "../utils/addPosition";
import getPosition from "../utils/getPosition";
import editPosition from "../utils/editPosition";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function EditPosition() {
    const [position, setPosition] = useState("")
    const [timeToGet, setTimeToGet] = useState("")
    const [timeToStay, setTimeToStay] = useState("")
    const { phase, id } = useParams()
    const navigate = useNavigate()

    async function setStates() {
        const pos = await getPosition(phase, id)
        setPosition(pos.position)
        setTimeToGet(pos.timeToGet)
        setTimeToStay(pos.timeToStay)
    }

    useEffect(() => {
        setStates()
    }, [])

    const handleSubmit = async () => {
        const newPosition = {
            position,
            timeToGet,
            timeToStay,
            id
        }
        await editPosition(newPosition, phase)
        navigate(`/editphase/${phase}`)
    }
    return (
        <ContainerLayout>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Edit Position - Phase - {phase}
                    </Typography>
                    <Tooltip title={"Back"}>
                        <IconButton onClick={() => navigate(`/editphase/${phase}`)}>
                            <ArrowBackIcon style={{color: "white"}}/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Stack alignItems={'center'} position={"relative"} spacing={5} paddingTop={15}>
                <TextField value={position} onChange={(event) => setPosition(event.target.value)} label={"Position"} variant="standard" style={{minWidth: 400}}/>
                <TextField value={timeToGet} onChange={(event) => setTimeToGet(event.target.value)} label={"Time to get to"} variant="standard" style={{minWidth: 400}}/>
                <TextField value={timeToStay} onChange={(event) => setTimeToStay(event.target.value)} label={"Time to stay"} variant="standard" style={{minWidth: 400}}/>
                <Button style={{minWidth: 400}} onClick={handleSubmit}>Edit Position</Button>
            </Stack>
        </ContainerLayout>
    )
}