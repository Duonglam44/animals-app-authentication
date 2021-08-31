import Login from "./components/login/Login"
import Landing from "./pages/Landing"
import MainPage from "./pages/MainPage"
import AuthContextProvider from "./contexts/AuthContext"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/main' component={MainPage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  )
}

export default App
