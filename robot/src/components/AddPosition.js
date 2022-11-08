import {useNavigate, useParams} from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import {AppBar, Button, Stack, TextField, Toolbar, Tooltip, Typography} from "@mui/material";
import {useState} from "react";
import addPosition from "../utils/addPosition";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "@mui/material/Slider";

export default function AddPosition() {
    const [position, setPosition] = useState("")
    const [timeToStay, setTimeToStay] = useState(0)
    const [leftHandPower, setLeftHandPower] = useState(1)
    const [rightHandPower, setRightHandPower] = useState(1)
    const [leftLegPower, setLeftLegPower] = useState(1)
    const [rightLegPower, setRightLegPower] = useState(1)
    const { phase } = useParams()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const newPosition = {
            position,
            timeToStay,
            leftHandPower,
            rightHandPower,
            leftLegPower,
            rightLegPower
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
                    <Tooltip title={"Back"}>
                        <IconButton onClick={() => navigate(`/editphase/${phase}`)}>
                            <ArrowBackIcon style={{color: "white"}}/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Stack alignItems={'center'} position={"relative"} spacing={5} paddingTop={5} paddingBottom={5}>
                <TextField onChange={(event) => setPosition(event.target.value)} label={"Position"} variant="standard" style={{minWidth: 400}}/>
                <TextField onChange={(event) => setTimeToStay(event.target.value)} label={"Time to stay"} variant="standard" style={{minWidth: 400}}/>
                <Stack direction={"column"}>
                    <Typography id="input-slider" fontSize={12} gutterBottom> Left Hand Power </Typography>
                    <Tooltip title={leftHandPower}>
                        <Slider value={leftHandPower} min={1} max={10} step={1} onChange={(event) => setLeftHandPower(event.target.value)} style={{minWidth: 400, maxWidth:400}}></Slider>
                    </Tooltip>
                </Stack>
                <Stack direction={"column"}>
                    <Typography id="input-slider" fontSize={12} gutterBottom> Right Hand Power </Typography>
                    <Tooltip title={rightHandPower}>
                        <Slider value={rightHandPower} min={1} max={10} step={1} onChange={(event) => setRightHandPower(event.target.value)} style={{minWidth: 400, maxWidth:400}}></Slider>
                    </Tooltip>
                </Stack>
                <Stack direction={"column"}>
                    <Typography id="input-slider" fontSize={12} gutterBottom> Left Leg Power </Typography>
                    <Tooltip title={leftLegPower}>
                        <Slider value={leftLegPower} min={1} max={10} step={1} onChange={(event) => setLeftLegPower(event.target.value)} style={{minWidth: 400, maxWidth:400}}></Slider>
                    </Tooltip>
                </Stack>
                <Stack direction={"column"}>
                    <Typography id="input-slider" fontSize={12} gutterBottom> Right Leg Power </Typography>
                    <Tooltip title={rightLegPower}>
                        <Slider value={rightLegPower} min={1} max={10} step={1} onChange={(event) => setRightLegPower(event.target.value)} style={{minWidth: 400, maxWidth:400}}></Slider>
                    </Tooltip>
                </Stack>
                <Button style={{minWidth: 400}} onClick={handleSubmit}>Add Position</Button>
            </Stack>
        </ContainerLayout>
    )
}