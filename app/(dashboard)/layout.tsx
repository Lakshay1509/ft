import type { PropsWithChildren } from "react";

import { Header } from "@/components/header";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-3 lg:px-14 bg-black">
        {children}
        <div className="w-full flex justify-center items-center">
          <img src="./footer.png" className="w-[200px] mb-[10px]" />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;