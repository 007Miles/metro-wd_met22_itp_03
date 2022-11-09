import Header from '../components/layout/header'
import SideNavBar from '../components/buyerAccount/sideNavbar'
import Footer from '../components/layout/footer'
import Products from '../components/buyerAccount/products'

const BuyerProducts = () => {
  return (
    <div>
      <Header />
      <div className="container flex">
        <SideNavBar />
        <Products />
      </div>
    </div>
  )
}

export default BuyerProducts
