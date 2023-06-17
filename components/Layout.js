
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Sidebar />
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
