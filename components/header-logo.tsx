import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center lg:flex">
        <img src="/new_logo.png" className="w-[100px] lg:w-[130px]" alt="Logo"/>
      </div>
    </Link>
  );
};
