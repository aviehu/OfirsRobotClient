import {useNavigate, useParams} from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import {AppBar, Button, Stack, TextField, Toolbar, Typography} from "@mui/material";
import {useState} from "react";
import addPosition from "../utils/addPosition";

export default function AddPosition() {
    const [position, setPosition] = useState("")
    const [timeToGet, setTimeToGet] = useState(0)
    const [timeToStay, setTimeToStay] = useState(0)
    const { phase } = useParams()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const newPosition = {
            position,
            timeToGet,
            timeToStay,
        }
        await addPosition(newPosition, phase)
        navigate(`/editphase/${phase}`)
    }
    return (
        <ContainerLayout>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       Add Position - Phase - {phase}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stack alignItems={'center'} position={"relative"} spacing={5} paddingTop={15}>
                <TextField onChange={(event) => setPosition(event.target.value)} label={"Position"} variant="standard" style={{minWidth: 400}}/>
                <TextField onChange={(event) => setTimeToGet(event.target.value)} label={"Time to get to"} variant="standard" style={{minWidth: 400}}/>
                <TextField onChange={(event) => setTimeToStay(event.target.value)} label={"Time to stay"} variant="standard" style={{minWidth: 400}}/>
                <Button style={{minWidth: 400}} onClick={handleSubmit}>Add Position</Button>
            </Stack>
        </ContainerLayout>
    )
}