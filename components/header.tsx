import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { Filters } from "./filters";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { WelcomeMsg } from "./welcome-msg";

export const Header = () => {
  return (
    <header className="bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat px-4 py-8 lg:px-14 pb-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            
          </div>

          <div className="flex items-center gap-x-2">
          <div className="flex items-center lg:gap-x-16">
            <Navigation/>
            
          </div>
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/landing" />
            </ClerkLoaded>

            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
          </div>
        </div>

        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};
