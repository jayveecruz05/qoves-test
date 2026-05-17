export default function Title({ title, className = '' }: Readonly<{ title: string; className?: string }>) {
  return (<h1 className={`w-fit text-xs uppercase text-quaternary text-center py-2 px-6 rounded-full border-2 border-primary-b ${className}`}>{title}</h1>);
}
