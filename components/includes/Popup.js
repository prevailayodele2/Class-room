import { Button, Popover } from 'antd';
import { useState } from 'react';
import Image from 'next/image'
import User from './../../src/image/user1.png'
import { DownOutlined, UpOutlined } from '@ant-design/icons';


const Popup = ({show}) => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<a onClick={hide}>Close</a>}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button className='popup-button'> 
       <div className='popup-button-under'>
       {show ? <Image className='popup-image' src={User} width={show ? 35 : 20} height={show ? 35 : 20} alt='user'/> : ' '}
        <div className='popup-name'>{show? 'Treasure' : ' '}</div>
        <div className='popup-button-icon'>
            {open ?  <DownOutlined /> : <UpOutlined />  }
        </div>
       </div>
      </Button>
    </Popover>
  );
};
export default Popup;