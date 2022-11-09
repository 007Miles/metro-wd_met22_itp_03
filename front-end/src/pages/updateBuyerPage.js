import Header from '../components/layout/header'
import SideNavBar from '../components/buyerAccount/sideNavbar'
import UpdateBuyerAccount from '../components/buyerAccount/updateBuyerAccount'

const BuyerAccountUpdate = () => {
  return (
    <div>
      <Header />
      <div className="container flex">
        <SideNavBar />
        <UpdateBuyerAccount />
      </div>
    </div>
  )
}

export default BuyerAccountUpdate
