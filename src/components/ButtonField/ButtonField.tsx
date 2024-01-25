import { Button } from "@mui/material";
import React from "react";

interface ButtonFieldForm{
    color?: string,
    backGround?: string,
    text: string,
    onClick?: Function,
    link?: string
}

const ButtonField = (data : ButtonFieldForm) => {
    return(
        <Button variant="outlined" sx={{width:"80%",color:data.color,backgroundColor:data.backGround}}>{data.text}</Button>
    );
}

export default ButtonField;