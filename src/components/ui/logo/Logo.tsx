export default function Logo({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return <img src={src} className={className} />;
}
