export default function AppBody({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="flex-1 flex flex-col">{children}</main>
      <div className={`fixed left-0 right-0 mx-auto h-screen w-[90vw] sm:w-[80vw] md:w-[75vw] xl:w-[65vw] border-x border-foreground flex flex-col items-center p-6 z-1`}></div>
    </>
  );
}
