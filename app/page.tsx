
import Image from "next/image";
import Header from "./component/Header";
import HomeComponent from "./component/Home";
import Card from "./component/Card"; 
import Footer from "./component/Footer";
import ProductDetails from "./component/Product details";
import CartPage from "./component/Cart page";
import LoginPage from "./component/Login page";
import JoinUs from "./component/Join Us";
import Help from "./component/Help";

export default function MainPage() { 
  return (
    <div>
      <Header />
      <HomeComponent />
      <Card />
      <ProductDetails />
      <LoginPage />
      <JoinUs />
      <Help />
      <CartPage />
      <Footer />
    </div>
  );
}
