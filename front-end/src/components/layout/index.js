import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
        <div>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout