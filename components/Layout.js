
import Middle from './Middle';
import Sidebar from './Sidebar';
import RightBar from './RightBar';

const Layout = () => {
    return (
        <div className='layoutContainer'>
            <Sidebar/>
            <Middle />
            <RightBar/>
        </div>
    );
}

export default Layout