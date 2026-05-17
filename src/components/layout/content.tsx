export default function Content({ children, id, className = '' }: Readonly<{ children?: React.ReactNode; id?: string; className?: string }>) {
  return (<div id={id} className={`w-[90vw] sm:w-[80vw] md:w-[75vw] xl:w-[65vw] flex flex-col items-center p-6 mx-auto ${className}`}>{children}</div>);
}
