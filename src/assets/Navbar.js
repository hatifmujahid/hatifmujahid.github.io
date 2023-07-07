import React from "react";
import { Grid } from "@mui/material";
import EmailButton from "../components/emailButton";
import { Square } from "@mui/icons-material";
import SquareButtons from "./topButtons";
import Stack from "@mui/material/Stack";
// import RoundedIcons from "./icons";



export default function Navbar() {
    return (
        <div>
            <Stack flexDirection={'row'}>
                <EmailButton />
                <SquareButtons />         
            </Stack>
            <div
                style={{
                    height: '0.1px',
                    backgroundColor: '#808080',
                    marginRight: '10%',
                    marginLeft: '10%',
                    border: 'none',
                    display: 'flex',
                    marginBottom: '20px',
                }}>
            </div>
            
        </div>
    );
}