export default function MenuButton({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <a
      className="w-fit m-4 justify-center items-center inline-flex font-thin text-center tracking-wider text-white text-[18px] last:mr-0 transform transition duration-200 hover:scale-110 hover:bg-radialGrad hover:cursor-pointer"
      href={href}
    >
      {children}
    </a>
  );
}
