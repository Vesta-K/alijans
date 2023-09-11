import { Link } from "react-scroll";

export default function Logo({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <Link to="about" smooth={true}>
      <img src={src} className={className} />
    </Link>
  );
}
