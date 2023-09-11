export default function Title({
  className,
  children,
}: {
  children: string;
  className: string;
}) {
  return <h1 className={className}>{children}</h1>;
}
