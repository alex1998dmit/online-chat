import { Grid, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import store from "../../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledInput from "../../ui/ControlledInput";
import * as yup from "yup";
import { useHistory } from "react-router";

const Schema = yup.object({
    firstname: yup.string().required('Введите имя пользователя').min(3, 'Слишком коротрое имя'),
    lastname: yup.string().required('Введите фамилию пользователя').min(3, 'Слишком коротрая фамилия'),
    email: yup.string().required('Введите email').email("Невалидный email"),
    password: yup.string().required('Введите пароль').min(6, 'Слишком короткий пароль'),
    confirmPassword: yup.string().required('Введите пароль').oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),  
});

const SignUpForm = observer(() => { 
    const { authStore }= store;
    const form = useForm({
        resolver: yupResolver(Schema),
    });
    const router = useHistory()

    const onSubmit = async (data) => {
        console.log(data)
    }

    const handleOnRedirect = () => {
        router.push('/signin')
    }

    return (
        <form sx={{ width: '100%' }} onSubmit={form.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Sign Up
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Firstname"
                        fullWidth
                        form={form}
                        name="firstname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Lastname"
                        fullWidth
                        form={form}
                        name="lastname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControlledInput
                        label="Email"
                        type='email'
                        fullWidth
                        form={form}
                        name="email"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Password"
                        fullWidth
                        form={form}
                        type="password"
                        name="password"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Confirm password"
                        fullWidth
                        form={form}
                        type="password"
                        name="confirmPassword"
                    />
                 </Grid>
                <Grid item xs={6}>
                    <Button fullWidth type='button' onClick={handleOnRedirect}>
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
