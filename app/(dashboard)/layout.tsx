import type { PropsWithChildren } from "react";

import { Header } from "@/components/header";
import Footer from "@/components/footer";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-3 lg:px-14 bg-black">
        {children}
        <Footer/>
      </main>
    </div>
  );
};

export default DashboardLayout;