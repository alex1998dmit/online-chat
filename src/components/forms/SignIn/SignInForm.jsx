import { Grid, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import store from "../../../store";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledInput from "../../ui/ControlledInput";
import { useHistory } from "react-router";

const Schema = yup.object({
    email: yup.string().required('Введите email').email("Невалидный email"),
    password: yup.string().required('Введите пароль').min(6, 'Слишком короткий пароль'),  
});

const SignInForm = observer(() => {
    const { authStore }= store;
    const router = useHistory()

    const form = useForm({
        resolver: yupResolver(Schema),
    })


    const onSubmit = async (data) => {
        console.log(data);
    }

    const handleOnRedirect = () => {
        router.push('/signup')
    }

    return (
        <form sx={{ width: '100%' }} onSubmit={form.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Sign In
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ControlledInput
                        label="Email"
                        name="email"
                        form={form}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControlledInput
                        label="Password"
                        name="password"
                        form={form}
                        fullWidth
                        type="password"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth onClick={handleOnRedirect}>
                        SignUp
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    {/* <input type='submit' value='signin' /> */}
                    <Button fullWidth variant='contained' type='submit'>
                        SignIn
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
})

export default SignInForm;
