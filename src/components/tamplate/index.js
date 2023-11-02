
import BannerDayA from "./Banner/BannerDay/A";
import BannerDayB from "./Banner/BannerDay/B";
import BannerNightA from "./Banner/BannerNight/A";
import BannerNightB from "./Banner/BannerNight/B";

import ContactDayA from "./Contact/ContactDay/A";
import ContactNightA from "./Contact/ContactNight/A";

import EcommerceDayA from "./Ecommerce/EcommerceDay/A";
import EcommerceDayB from "./Ecommerce/EcommerceDay/B";
import EcommerceDayC from "./Ecommerce/EcommerceDay/C";
import EcommerceDayD from "./Ecommerce/EcommerceDay/D";
import EcommerceDayE from "./Ecommerce/EcommerceDay/E";
import EcommerceNightA from "./Ecommerce/EcommerceNight/A";
import EcommerceNightB from "./Ecommerce/EcommerceNight/B";
import EcommerceNightC from "./Ecommerce/EcommerceNight/C";
import EcommerceNightD from "./Ecommerce/EcommerceNight/D";
import EcommerceNightE from "./Ecommerce/EcommerceNight/E";

import FooterDayA from "./Footer/FooterDay/A";
import FooterDayB from "./Footer/FooterDay/B";
import FooterDayC from "./Footer/FooterDay/C";
import FooterDayD from "./Footer/FooterDay/D";
import FooterDayE from "./Footer/FooterDay/E";
import FooterNightA from "./Footer/FooterNight/A";
import FooterNightB from "./Footer/FooterNight/B";
import FooterNightC from "./Footer/FooterNight/C";
import FooterNightD from "./Footer/FooterNight/D";
import FooterNightE from "./Footer/FooterNight/E";

import FormDayA from "./Form/FormDay/A";
import FormNightA from "./Form/FormNight/A";

import HeroDayA from "./Hero/HeroDay/A";
import HeroDayB from "./Hero/HeroDay/B";
import HeroDayC from "./Hero/HeroDay/C";
import HeroDayD from "./Hero/HeroDay/D";
import HeroDayE from "./Hero/HeroDay/E";
import HeroDayF from "./Hero/HeroDay/F";
import HeroNightA from "./Hero/HeroNight/A";
import HeroNightB from "./Hero/HeroNight/B";
import HeroNightC from "./Hero/HeroNight/C";
import HeroNightD from "./Hero/HeroNight/D";
import HeroNightE from "./Hero/HeroNight/E";
import HeroNightF from "./Hero/HeroNight/F";

import LogDayA from "./Log/LogDay/A";
import LogDayB from "./Log/LogDay/B";
import LogDayC from "./Log/LogDay/C";
import LogDayD from "./Log/LogDay/D";
import LogDayE from "./Log/LogDay/E";
import LogNightA from "./Log/LogNight/A";
import LogNightB from "./Log/LogNight/B";
import LogNightC from "./Log/LogNight/C";
import LogNightD from "./Log/LogNight/D";
import LogNightE from "./Log/LogNight/E";

import OtpDayA from "./Otp/OtpDay/A";
import OtpNightA from "./Otp/OtpNight/A";

import PricingDayA from "./Pricing/PricingDay/A";
import PricingDayB from "./Pricing/PricingDay/B";
import PricingNightA from "./Pricing/PricingNight/A";
import PricingNightB from "./Pricing/PricingNight/B";

import ProductDayA from "./Product/ProductDay/A";
import ProductDayB from "./Product/ProductDay/B";
import ProductDayC from "./Product/ProductDay/C";
import ProductDayD from "./Product/ProductDay/D";
import ProductDayE from "./Product/ProductDay/E";
import ProductDayF from "./Product/ProductDay/F";
import ProductNightA from "./Product/ProductNight/A";
import ProductNightB from "./Product/ProductNight/B";
import ProductNightC from "./Product/ProductNight/C";
import ProductNightD from "./Product/ProductNight/D";
import ProductNightE from "./Product/ProductNight/E";
import ProductNightF from "./Product/ProductNight/F";

import TestimonialDayA from "./Testimonial/TestimonialDay/A";
import TestimonialDayB from "./Testimonial/TestimonialDay/B";
import TestimonialNightA from "./Testimonial/TestimonialNight/A";
import TestimoniaLNightB from "./Testimonial/TestimonialNight/B";

export default function getTemplate({ darkMode = false }) {
  return {
    Hero: {
      HeroA: darkMode ? <HeroNightA /> : <HeroDayA />,
      HeroB: darkMode ? <HeroNightB /> : <HeroDayB />,
      HeroC: darkMode ? <HeroNightC /> : <HeroDayC />,
      HeroD: darkMode ? <HeroNightD /> : <HeroDayD />,
      HeroE: darkMode ? <HeroNightE /> : <HeroDayE />,
      HeroF: darkMode ? <HeroNightF /> : <HeroDayF />,
    },
    Footer: {
      FooterA: darkMode ? <FooterNightA /> : <FooterDayA />,
      FooterB: darkMode ? <FooterNightB /> : <FooterDayB />,
      FooterC: darkMode ? <FooterNightC /> : <FooterDayC />,
      FooterD: darkMode ? <FooterNightD /> : <FooterDayD />,
      FooterE: darkMode ? <FooterNightE /> : <FooterDayE />,
    },
    Log: {
      LogA: darkMode ? <LogNightA /> : <LogDayA />,
      LogB: darkMode ? <LogNightB /> : <LogDayB />,
      LogC: darkMode ? <LogNightC /> : <LogDayC />,
      LogD: darkMode ? <LogNightD /> : <LogDayD />,
      LogE: darkMode ? <LogNightE /> : <LogDayE />,
    },
    Cart: {
      EcommerceA: darkMode ? <EcommerceNightA />: <EcommerceDayA />,
      EcommerceB: darkMode ? <EcommerceNightB />: <EcommerceDayB />,
      EcommerceC: darkMode ? <EcommerceNightC />: <EcommerceDayC />,
      EcommerceD: darkMode ? <EcommerceNightD />: <EcommerceDayD />,
      EcommerceE: darkMode ? <EcommerceNightE />: <EcommerceDayE />,
    },
    Contact: {
      ContactA: darkMode ? <ContactNightA /> : <ContactDayA/>,
    },
    Banner: {
      BannerA: darkMode ? <BannerNightA /> : <BannerDayA/>,
      BannerB: darkMode ? <BannerNightB /> : <BannerDayB/>,
    },
    Pricing: {
      PricingA: darkMode ? <PricingNightA /> : <PricingDayA/>,
      PricingB: darkMode ? <PricingNightB /> : <PricingDayB/>,
    }, 
    Testimonial: {
      TestimonialA: darkMode ? <TestimonialNightA /> : <TestimonialDayA/>,
      TestimonialB: darkMode ? <TestimoniaLNightB /> : <TestimonialDayB/>,
    },
    Product: {
      ProductA: darkMode ? <ProductNightA /> : <ProductDayA/>,
      ProductB: darkMode ? <ProductNightB /> : <ProductDayB/>,
      ProductC: darkMode ? <ProductNightC /> : <ProductDayC/>,
      ProductD: darkMode ? <ProductNightD /> : <ProductDayD/>,
      ProductE: darkMode ? <ProductNightE /> : <ProductDayE/>,
      ProductF: darkMode ? <ProductNightF /> : <ProductDayF/>,
    },
    Otp: {
      OtpA: darkMode ? <OtpNightA /> : <OtpDayA/>,
    },
    Form: {
      FormA: darkMode ? <FormNightA /> : <FormDayA/>,
    },
  };
}
