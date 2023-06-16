import { useState } from 'react';
import AppData from './../src/util';
import Popup from './includes/Popup';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

const Sidebar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebar-first">
          <div className="Logo">OP</div>
          <div className="sidebar-list">
            {AppData.sidebar.map((item, i) => {
              return (
                <div key={i} className="sidebar-item">
                  <div className="sidebar-icon">{item.icon}</div>
                  <div className="sidebar-title">
                    {show ? <>{item.title}</> : ' '}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="logout-menu">{<Popup show={show} />}</div>
      </div>
      <p onClick={() => setShow(!show)} className="show-icon">
        {show ? <CaretLeftOutlined /> : <CaretRightOutlined />}
      </p>
    </>
  );
};

export default Sidebar;
