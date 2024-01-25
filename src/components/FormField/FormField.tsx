import React from "react";
import { Container , SxProps, TextField} from "@mui/material";
import PasswordField from "../PasswordField/PasswordField";

interface FormFieldForm{
    type? : string,
    name : string,
    password: false,
    rows?: number,
    sx?: SxProps,
    color?: string,
    validation?:any,
    icon?:string
}
const FormField = (data : FormFieldForm) =>{
    return(
        <Container>
            {data.type === 'password'
            ?
            <PasswordField/>
            :
            <TextField 
            sx={{width:'100%', ...data.sx}}
            variant="outlined"
            label={data.name}
            rows={data.rows}
            InputProps={{
                style:{color : data.color}
            }}
            />
        }       
        </Container>

    );
}

export default FormField;