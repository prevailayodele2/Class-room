// import AppData from './../util';
import { SnippetsOutlined, SettingOutlined, MailOutlined, CalendarOutlined,   } from '@ant-design/icons';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Sidebar = () => {
    const  Sidebar= [
        {
            title: 'Ebook',
            icon: <MenuBookIcon />
        },
    ]
    return (
        <div className="sidebarContainer">
            <div className="Logo">prevail</div>
            <div className="sidebar-list">
                {Sidebar.map((item)=>{
                    <div  className='sidebar-item'>
                       <div className='sidebar-icon'>
                        {item.icon}
                       </div>
                       <div className='sidebar-title'>
                        {item.title}
                       </div>
                    </div>
                })
                }
            </div>
            <div className="logout-menu">
                logout
            </div>
        </div>
    );
}

export default Sidebar;