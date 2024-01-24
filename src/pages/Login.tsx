import { Container, Grid, Input, Typography } from "@mui/material";
import React from "react";
import FormField from "../components/FormField/FormField";

const Login = () =>{


    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={9} >
                    <Container>
                        
                    </Container>
                </Grid>
                <Grid sx={{backgroundColor:"#FFF"}} item xs={3}>
                    <Grid sx={{textAlign:"center"}} container>
                        <Grid item xs={12}>
                            <Typography fontFamily="Roboto" fontSize="large">
                                Login
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormField
                                name="Email"
                                password={false}
                                
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;