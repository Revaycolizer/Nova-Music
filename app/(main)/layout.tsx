import Menu from "./menu";
// import Search from './search'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <aside className="lg:w-1/4">
      {/* <Search/> */}
        <Menu />
        {/* <Play /> */}
      </aside>
      <main >{children}</main>
    </section>
  );
}
