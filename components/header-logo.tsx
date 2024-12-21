import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center lg:flex">
        <img src="/logo.png" className="w-[120px] lg:w-[200px]" alt="Logo"/>
      </div>
    </Link>
  );
};
