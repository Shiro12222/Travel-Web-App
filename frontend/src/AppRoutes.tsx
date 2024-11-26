import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";
// import ProtectedRoute from "./auth/ProtectedRoute";
// import MyAccountPage from "./pages/MyAccountPage";
import HomePage from "./pages/HomePage";

const AppRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path="auth-callback" element={<AuthCallbackPage/>} />
            {/* <Route path="my-account" element={<MyAccountPage/>} />
            <Route element={<ProtectedRoute/>}>
                <Route path="my-account" element={<MyAccountPage/>} />
            </Route> */}
            <Route path="register" element={<span>USER Register PAGE</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;