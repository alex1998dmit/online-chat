import { observer } from "mobx-react-lite"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import routes from "../../../routes"
import LoggedInRoute from "../../../routes/LoggedInRoute"
import LoggedOutRoute from "../../../routes/LoggedOutRoute"

const renderRouteComponent = (route) => {
  switch (route.type) {
    case 'all':
      return (
        <Route exact path={route.path} key={route.path}>
          {route.component}
        </Route>
      )
    case 'loggedIn':
      return (
        <LoggedInRoute exact path={route.path} key={route.path}>
          {route.component}
        </LoggedInRoute>
      )
    case 'free':
      return (
        <LoggedOutRoute exact path={route.path} key={route.path}>
          {route.component}
        </LoggedOutRoute>
      )
    default:
      return null
  }
}

const App = observer(() => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route) => renderRouteComponent(route))}
        </Switch>
      </BrowserRouter>
    </div>
  );
})

export default App;
