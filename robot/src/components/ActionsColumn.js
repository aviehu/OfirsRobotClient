import {Stack, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";

export default function ActionsColumn({ row }) {
    const navigate = useNavigate()

    const handleUp = async () => {
        await row.handleUp(row.phase, row.id)
    }

    const handleDown = async () => {
        await row.handleDown(row.phase, row.id)
    }

    const handleDelete = async () => {
        await row.handleDelete(row.phase, row.id)
    }

    return (
        <Stack direction={"row"} spacing={2}>
            <Tooltip title={"Edit"}>
                <IconButton onClick={() => navigate(`/editposition/${row.phase}/${row.id}`)}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title={"Move Up"}>
                <IconButton onClick={handleUp}>
                    <ArrowUpwardIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title={"Move Down"}>
                <IconButton onClick={handleDown}>
                    <ArrowDownwardIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title={"Delete"}>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </Stack>
    )
}