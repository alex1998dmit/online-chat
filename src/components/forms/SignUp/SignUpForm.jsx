import { Grid, TextField, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import store from "../../../store";

const SignUpForm = observer(() => {
    const [wasSubmit, setWasSubmit] = useState(false); 
    const { authStore }= store;

    const isFormValid = 
        !authStore.isPasswordNotCorrect && !authStore.isConfirmPasswordNotCorrect 
        && !authStore.isFirstNameNotValid && !authStore.isLastNameNotValid && !authStore.isEmailNotValid

    const onSubmit = async (e) => {
        e.preventDefault();
        setWasSubmit(true);
        if (isFormValid) {
            console.log('form calling');
            await authStore.signUp()
        }
    }

    const handleInputChange = (key, e) => {
        const value = e.target.value;
        authStore.updateFormValue(key, value);
    }

    return (
        <form sx={{ width: '100%' }} onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Sign Up
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Firstname"
                        fullWidth
                        value={authStore.firstName}
                        onChange={(e) => handleInputChange('firstName', e)}
                        error={wasSubmit && !!authStore.isFirstNameNotValid}
                        helperText={(wasSubmit && authStore.isFirstNameNotValid) || ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Lastname"
                        fullWidth
                        value={authStore.lastName}
                        onChange={(e) => handleInputChange('lastName', e)}
                        error={wasSubmit && !!authStore.isLastNameNotValid}
                        helperText={(wasSubmit && authStore.isLastNameNotValid) || ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        fullWidth type="email"
                        value={authStore.email}
                        onChange={(e) => handleInputChange('email', e)}
                        error={wasSubmit && !!authStore.isEmailNotValid}
                        helperText={(wasSubmit && authStore.isEmailNotValid) || ''}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Password"
                        type='password'
                        fullWidth
                        error={wasSubmit && !!authStore.isPasswordNotCorrect}
                        helperText={(wasSubmit && authStore.isPasswordNotCorrect) || ''}
                        value={authStore.password}
                        onChange={(e) => handleInputChange('password', e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Confirm password"
                        type='password'
                        fullWidth
                        value={authStore.passwordConfirm}
                        onChange={(e) => handleInputChange('passwordConfirm', e)}
                        error={wasSubmit && !!authStore.isConfirmPasswordNotCorrect}
                        helperText={(wasSubmit && authStore.isConfirmPasswordNotCorrect) || ''}
                    />
                 </Grid>
                <Grid item xs={6}>
                    <Button fullWidth type='button'>
                        SignIn
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant='contained' type='submit'>
                        SignUp
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
})

export default SignUpForm;
