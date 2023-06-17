import { SnippetsOutlined, SettingOutlined, MailOutlined, CalendarOutlined,   } from '@ant-design/icons';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const AppData = {
   sidebar:[
    {
        title: 'Classes',
        icon: <CalendarOutlined />,
        link: '/Classes'
    },
    {
        title: 'Chats',
        icon: <MailOutlined />,
        link: '/Chats'
    },
    {
        title: 'Ebook',
        icon: <MenuBookIcon  />,
        link: '/Ebook'
    },
    {
        title: 'Settings',
        icon: <SettingOutlined />,
        link: '/Settings'
    },

   ]
};
export default AppData