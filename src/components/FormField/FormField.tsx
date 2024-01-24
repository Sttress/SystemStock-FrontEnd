import React from "react";
import { Container , SxProps, TextField, colors} from "@mui/material";

interface FormField{
    type? : string,
    name : string,
    password: false,
    rows?: number,
    sx?: SxProps,
    color?: string
}
const FormField = (data : FormField) =>{
    return(
        <Container>
            <TextField 
            sx={{width:'100%', ...data.sx}}
            variant="outlined"
            label={data.name}
            rows={data.rows}
            InputProps={{
                style:{color : data.color}
            }}
            />
        </Container>

    );
}

export default FormField;