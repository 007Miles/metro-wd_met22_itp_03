import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import BuyerSignUp from '../components/buyerAccount/buyerSignUp'

const BuyerSignUpPage = () => {
  return (
    <div>
      <Header />
      <div className="container flex">
        <BuyerSignUp />
      </div>
    </div>
  )
}

export default BuyerSignUpPage
