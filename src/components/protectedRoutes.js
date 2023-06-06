import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({component, ...rest}) => {
let auth = {'token': false}
return (
<Route {...rest}>
    {!auth.token 
    ? 
    <Redirect to="/login" />
    :
    component}
</Route>
)

}
export default ProtectedRoute;