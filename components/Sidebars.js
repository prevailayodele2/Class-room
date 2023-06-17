// import { useState } from 'react';
// import AppData from './../src/util';
// import Popup from './includes/Popup';
// import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
// import Link from 'next/link';
// import { useContext } from "react";
// import { SidebarContext } from "@/Context/SidebarContext";
// import { useRouter } from "next/router";



// const Sidebar = () => {
//   const router = useRouter();
//   const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

//   return (
//     <div className="sidebar__wrapper">
//       <button className="btn" onClick={toggleSidebarcollapse}>
//         {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
//       </button>
//       <aside className="sidebar" data-collapse={isCollapsed}>
//         <div className="sidebar__top">
//           <Image
//             width={80}
//             height={80}
//             className="sidebar__logo"
//             src=""
//             alt="logo"
//           />
//           <p className="sidebar__logo-name">The Brave Coders</p>
//         </div>
//         <ul className="sidebar__list">
//           {AppData.sidebar.map(({ title, link, icon }) => {
//             return (
//               <li className="sidebar__item" key={name}>
//                 <Link
//                   className={`sidebar__link ${
//                     router.pathname === link ? "sidebar__link--active" : ""
//                   }`}
//                   href={link}
//                 >
//                   <span className="sidebar__icon">
//                   {icon}
//                   </span>
//                   <span className="sidebar__name">{title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar;




// // const Sidebar = () => {
// //   const [show, setShow] = useState(true);
// //   return (
// //     <>
// //       <div className={ show ? "sidebarContainer" : 'sidebarContainer-small'}>
// //         <div className="sidebar-first">
// //           <div className="Logo">OP</div>
// //           <div className="sidebar-list">
// //             {AppData.sidebar.map((item, i) => {
// //               return (
// //                 <Link>
// //                 <a href={item.link}>
// //                 <div key={i} className="sidebar-item">
// //                   <div className="sidebar-icon">{item.icon}</div>
// //                   <div className="sidebar-title">
// //                     {show ? <>{item.title}</> : ' '}
// //                   </div>
// //                 </div>
// //                 </a>
// //                 </Link>
// //               );
// //             })}
// //           </div>
// //         </div>
// //         <div className="logout-menu">{<Popup show={show} />}</div>
// //       </div>
// //       <p onClick={() => setShow(!show)} className={show ? "show-icon" : 'noshow-icon'}>
// //         {show ? <CaretLeftOutlined /> : <CaretRightOutlined />}
// //       </p>
// //     </>
// //   );
// // };

// // export default Sidebar;
