import * as signup from './SignUp';
import * as signin from './SignIn';
import * as signout from './SignOut'

export const LoginController = {
    ...signup,
    ...signin,
    ...signout
}