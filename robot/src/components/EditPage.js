import {useNavigate, useParams} from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import { DataGrid } from '@mui/x-data-grid';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import ActionsColumn from "./ActionsColumn";
import {useEffect, useState} from "react";
import getStates from "../utils/getStates";
import moveUp from "../utils/moveUp";
import moveDown from "../utils/moveDown";

export default function EditPage() {
    const [states, setStates] = useState([])
    const navigate = useNavigate()
    const { phase } = useParams()

    async function loadPage() {
        const states = await getStates(phase)
        setStates(states)
    }

    useEffect(() => {
       loadPage()
    }, [])

    const columns = [
        { field: 'position', headerName: "Position", width: 200 },
        { field: 'timeToGet', headerName: "Time to get to position", width: 200},
        { field: 'timeToStay', headerName: "Time to stay in position",width: 200},
        { field: 'actions', headerName: "Actions", renderCell: ActionsColumn, width: 200, sortable: false},
    ]

    async function handleUp(phase, id) {
        const res = await moveUp(phase, id)
        if(res.ok) {
            await loadPage()
        }
    }

    async function handleDown(phase, id) {
        const res = await moveDown(phase, id)
        if(res.ok) {
            await loadPage()
        }
    }

    function wrapRows(rows) {
        return rows.map((row) => {
            return {
                ...row,
                phase,
                handleUp,
                handleDown
            }
        })
    }

    return (
        <ContainerLayout >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Robot App - Edit Phase - {phase}
                    </Typography>
                </Toolbar>
            </AppBar>
            <DataGrid
                style={{ padding: 20}}
                autoHeight
                rows={wrapRows(states)}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
                disableSelectionOnClick
            />
            <Button onClick={() => navigate(`/addposition/${phase}`)} style={{paddingLeft: 10}}>
                Add position
            </Button>
        </ContainerLayout>
    )
}