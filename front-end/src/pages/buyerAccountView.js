import Header from '../components/layout/header'
import BuyerAccountView from '../components/buyerAccount/buyerAccountView'
import SideNavBar from '../components/buyerAccount/sideNavbar'
import Footer from '../components/layout/footer'

const BuyerAccount = () => {
  return (
    <div>
      <Header />
      <div className="container flex">
        <SideNavBar />
        <BuyerAccountView />
      </div>
      <Footer />
    </div>
  )
}

export default BuyerAccount
