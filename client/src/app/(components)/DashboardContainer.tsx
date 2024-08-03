import { ReactNode } from "react";

interface DashboardContainerProps{
    children: ReactNode;
}

const DashboardContainer = ({children}:DashboardContainerProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardContainer;
