import { Route, Routes, Navigate } from "react-router-dom";

import UserList from "../views/User/UserList";
import UserDetail from "../views/User/UserDetail";
import PostList from "../views/Post/PostList";
import PostDetail from "../views/Post/PostDetail";
import Dashboard from "../views/Dashboard/Dashboard";
import Header from "../layout/Header";
import Loading from "../components/ui/Loading";
import { useSelector } from "react-redux";

const ManagementSystem = () => {

    const isShowLoading = useSelector(state => state.loading.isLoading);

    return (
        <>
            <Loading isShow={isShowLoading}/>
            <Header />
            <div style={{ margin: '0 30px' }}>
                <Routes>
                    <Route path="/users">
                        <Route index={true} element={<UserList />} />
                        <Route path=":id" element={<UserDetail />} />
                    </Route>
                    <Route path="/posts">
                        <Route index={true} element={<PostList />} />
                        <Route path=":id" element={<PostDetail />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='/*' element={<Navigate to='/dashboard' replace />} />
                </Routes>
            </div>
        </>
    );
}

export default ManagementSystem;