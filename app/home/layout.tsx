import Menu from "./menu"
// import './global.css'

export default function RootLayout({children}
    : {
        children: React.ReactNode
      }){
  return (
    <section className="flex">
        <aside className="w-1/4"><Menu></Menu></aside>
        <main>{children}</main>
    </section>
  )
}

