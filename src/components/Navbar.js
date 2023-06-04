import React from "react";
import { Grid } from "@mui/material";
import EmailButton from "./emailButton";
import Links from "./links";


export default function Navbar() {
    return (
        <div>
            <Grid container spacing={140} alignItems={'center'}>
                    <Grid item >
                        <EmailButton />
                    </Grid>
                    <Grid item>
                        <Links />
                    </Grid>
                </Grid>
            <div
                style={{
                    height: '0.1px',
                    backgroundColor: '#808080',
                    marginRight: '10%',
                    marginLeft: '10%',
                    border: 'none'
                }}>
            </div>
        </div>
    );
}