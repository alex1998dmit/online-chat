import { Route, Redirect } from "react-router-dom"
import store from "../store"
import { observer } from "mobx-react-lite"

const LoggedOutRoute = observer((props) => {
    const { children, ...rest } = props
    const {
      appStore,
    } = store
    if (!appStore.isLoggedIn) {
      return (
        <Route {...rest} strict>
          {children}
        </Route>
      )
    }
    return <Redirect to="/" />
  })

  export default LoggedOutRoute;

  