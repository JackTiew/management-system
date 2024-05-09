import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px' }}>
                <h3 style={{ margin: 10 }}>Management System</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h4 style={{ cursor: 'pointer', margin: '0 10px' }} onClick={() => navigate('/dashboard')}>Dashboard</h4>
                    <h4 style={{ cursor: 'pointer', margin: '0 10px' }} onClick={() => navigate('/users')}>Users</h4>
                    <h4 style={{ cursor: 'pointer', margin: '0 10px' }} onClick={() => navigate('/posts')}>Posts</h4>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default Header;