import Link from "next/link";

type HeaderProps = {
  title: string;
  linkHref: string;
  linkTitle: string;
};
const Header = ({ title, linkHref, linkTitle }: HeaderProps) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl hover:text-accent transition-all underline text-md text-primary">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
