import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import FooterCol from "../../atoms/FooterCol";

function Footer() {
  return (
    <div className="flex flex-wrap justify-between bg-slate-950	 py-8 text-neutral-50 px-12 text-xs">
      <div
        className="flex flex-col gap-3 "
        style={{ fontFamily: "Big Shoulders", fontWeight: 600 }}
      >
        <p className="cursor-pointer">RESOURCES</p>
        <p className="cursor-pointer">GIFT CARDS</p>
        <p className="cursor-pointer">FIND A STORE</p>
        <p className="cursor-pointer">BECOME A MEMBER</p>
        <p className="cursor-pointer">SITE FEEDBACK</p>
      </div>
      <FooterCol
        Title="COMPANY"
        Items={[
          "About Nike",
          "Order Status",
          "News",
          "Returns",
          "Careers",
          "Investors",
          "Purpose",
          "Sustainability",
        ]}
      />
      <FooterCol
        Title="PROMOTIONS & DISCOUNTS"
        Items={[
          "Student",
          "Military",
          "Teacher",
          "First Responders & Medical Professionals",
          "Order Cancellation",
          "Payment Options",
          "Gift Card Balance",
        ]}
      />
      <FooterCol
        Title="HELP"
        Items={[
          "Get Help",
          "Order Status",
          "Shipping and Delivery",
          "Returns",
          "Birthday",
        ]}
      />
      <div className="flex gap-3 ">
        <AiFillTwitterCircle className="cursor-pointer" size={26} />
        <FaFacebook className="cursor-pointer" size={26} />
        <TiSocialYoutubeCircular className="cursor-pointer" size={32} />
        <AiFillInstagram className="cursor-pointer" size={32} />
      </div>
    </div>
  );
}

export default Footer;
