import { SnippetsOutlined, SettingOutlined, MailOutlined, CalendarOutlined,   } from '@ant-design/icons';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const AppData = {
   Sidebar:[
    {
        title:'Dashboard',
        icon: <SnippetsOutlined />
    },
    {
        title: 'Classes',
        icon: <CalendarOutlined />
    },
    {
        title: 'Chats',
        icon: <MailOutlined />
    },
    {
        title: 'Ebook',
        icon: <MenuBookIcon />
    },
    {
        title: 'Settiings',
        icon: <SettingOutlined />
    },

   ]
};
export default AppData