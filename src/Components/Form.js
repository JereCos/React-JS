import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = () => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="filled-nombre"
                    label="Nombre"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    id="filled-apellido"
                    label="Apellido"
                    defaultValue=""
                    variant="filled"
                />
                {/*                 <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                /> */}
                <TextField
                    required
                    id="filled-number"
                    label="Numero de telefono"
                    type="number"
/*                     InputLabelProps={{
                        shrink: true,
                    }} */
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-mail"
                    label="Mail"
                    defaultValue=""
                    helperText="alguien@dominio"
                    variant="filled"
                />
            </div>
        </Box>
    );
}

export default Form
