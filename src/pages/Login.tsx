import {  Container, Grid, Typography } from "@mui/material";
import React from "react";
import FormField from "../components/FormField/FormField";
import { Link } from "react-router-dom";
import ButtonField from "../components/ButtonField/ButtonField";


const Login = () =>{

    return(

        <Container sx={{minWidth:"100%"}}>
            <Grid container justifyContent={"center"}>

                <Grid item  xs={8} md={4} xl={2} justifyContent="center" >
                    <Grid sx={{textAlign:"center",backgroundColor:"#FFF",marginTop:20,marginBottom:10,alignItems: 'center', display: 'flex', flexDirection: 'column',borderRadius:8,paddingTop:8, paddingBottom:8}} container>
                        <Grid item sx={{marginBottom:6}} xs={12}>
                            <Typography  fontFamily="Roboto" sx={{fontSize:26,fontFamily:"Rubik Burned",color:"#f1c232"}}>
                                Login
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormField
                                name="Email"
                                password={false}
                                
                            />
                            <br></br>
                            <FormField
                                name="Senha"
                                password={false}
                                
                            />
                            <br></br>
                            <ButtonField text="Entrar" backGround="#f1c232" color="#FFFF"/>
                            <br></br>
                            <br></br>
                            <Typography>Esqueceu a Senha?<Link to={"/"}>Clique aqui</Link></Typography>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;