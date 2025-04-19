
import { Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
