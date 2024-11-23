import { authReducer } from "./auth-slice";
import { userReducer } from "./user-slice";

const rootReducer = {
    auth: authReducer,
    user: userReducer,
};

export default rootReducer;
