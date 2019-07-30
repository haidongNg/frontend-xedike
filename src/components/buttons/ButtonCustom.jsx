import React from 'react';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

const ButtonCustom = ({}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    return (
        <Button variant='outlined' size="small" >
            
        </Button>
    )
}

export default ButtonCustom;
