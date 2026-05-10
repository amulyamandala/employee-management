import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

function RootLayout() {
  return (
    <div>
        <Header />
        {/*this the root layout placeholder*/}
        <div className="min-h-screen mx-0 my-0 bg-gray-200 p-20">
         <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout