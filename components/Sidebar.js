import Image from 'next/image';

import AppData from './../src/util';

import {
  CaretLeftOutlined,
  CaretRightOutlined,
  SnippetsOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { useContext } from 'react';
import { SidebarContext } from '../Context/sidebarContext';
import { useRouter } from 'next/router';
import { Tooltip } from 'antd';

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.jpg"
            alt="logo"
          />
          <p className="sidebar__logo-name">Prevail</p>
        </div>
        <ul className="sidebar__list">
          <Tooltip title={'Dashdboard'} key={'Dasdboard'} placement="right">
            <li className="sidebar__item" key={'Dasdboard'}>
              <Link
                className={`sidebar__link ${
                  router.pathname === '/' ? 'sidebar__link--active' : ''
                }`}
                href={'/'}
              >
                <span className="sidebar__icon">
                  <SnippetsOutlined />
                </span>
                <span className="sidebar__name">{'Dashdboard'}</span>
              </Link>
            </li>
          </Tooltip>
          {AppData.sidebar.map(({ title, link, icon }) => {
            return (
              <>
                <Tooltip title={title} key={title} placement="right">
                  <li className="sidebar__item" key={title}>
                    <Link
                      className={`sidebar__link ${
                        router.pathname === link ? 'sidebar__link--active' : ''
                      }`}
                      href={link}
                    >
                      <span className="sidebar__icon">{icon}</span>
                      <span className="sidebar__name">{title}</span>
                    </Link>
                  </li>
                </Tooltip>
              </>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
