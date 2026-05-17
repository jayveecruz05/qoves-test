export default function Card({ children, className = '' }: Readonly<{ children?: React.ReactNode, className?: string }>) {
  return (<div className={`w-full h-full bg-white/20 text-secondary rounded-lg p-3 ${className}`}>{children}</div>);
}
