import store from "../store";
import { Route, Redirect  } from "react-router-dom"
import { observer } from "mobx-react-lite"

const LoggedInRoute = observer((props) => {
    const { children, ...rest } = props
    const { appStore } = store;
    console.log(appStore.isLoggedIn, children);
    if (appStore.isLoggedIn) {
        return (<Route {...rest} strict>
            {children}
        </Route>)
    }

    return <Redirect  to="/signin" />
})

export default LoggedInRoute;
