export default function Title({
  className,
  children,
}: {
  children: string;
  className: string;
}) {
  return <div className={className}>{children}</div>;
}
