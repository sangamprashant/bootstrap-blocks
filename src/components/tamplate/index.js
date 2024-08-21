import BannerDayA from "./Banner/A";
import BannerDayB from "./Banner/B";

import ContactDayA from "./Contact/A";

import EcommerceDayA from "./Ecommerce/A";
import EcommerceDayB from "./Ecommerce/B";
import EcommerceDayC from "./Ecommerce/C";
import EcommerceDayD from "./Ecommerce/D";
import EcommerceDayE from "./Ecommerce/E";

import FooterDayA from "./Footer/A";
import FooterDayB from "./Footer/B";
import FooterDayC from "./Footer/C";
import FooterDayD from "./Footer/D";
import FooterDayE from "./Footer/E";

import FormDayA from "./Form/A";

import HeroDayA from "./Hero/A";
import HeroDayB from "./Hero/B";
import HeroDayC from "./Hero/C";
import HeroDayD from "./Hero/D";
import HeroDayE from "./Hero/E";

import LogDayA from "./Log/A";
import LogDayB from "./Log/B";
import LogDayC from "./Log/C";
import LogDayD from "./Log/D";
import LogDayE from "./Log/E";

import OtpDayA from "./Otp/A";
import OtpDayB from "./Otp/B";

import PricingDayA from "./Pricing/A";
import PricingDayB from "./Pricing/B";
import PricingDayC from "./Pricing/C";

import ProductDayA from "./Product/A";
import ProductDayB from "./Product/B";
import ProductDayC from "./Product/C";
import ProductDayD from "./Product/D";
import ProductDayE from "./Product/E";
import ProductDayF from "./Product/F";
import ProductDayG from "./Product/G";
import ProductDayH from "./Product/H";

import TestimonialDayA from "./Testimonial/A";
import TestimonialDayB from "./Testimonial/B";
import TestimonialDayC from "./Testimonial/C";

export default function getTemplate() {
  return {
    Hero: {
      HeroA: <HeroDayA />,
      HeroB: <HeroDayB />,
      HeroC: <HeroDayC />,
      HeroD: <HeroDayD />,
      HeroE: <HeroDayE />,
    },
    Footer: {
      FooterA: <FooterDayA />,
      FooterB: <FooterDayB />,
      FooterC: <FooterDayC />,
      FooterD: <FooterDayD />,
      FooterE: <FooterDayE />,
    },
    Log: {
      LogA: <LogDayA />,
      LogB: <LogDayB />,
      LogC: <LogDayC />,
      LogD: <LogDayD />,
      LogE: <LogDayE />,
    },
    Cart: {
      EcommerceA: <EcommerceDayA />,
      EcommerceB: <EcommerceDayB />,
      EcommerceC: <EcommerceDayC />,
      EcommerceD: <EcommerceDayD />,
      EcommerceE: <EcommerceDayE />,
    },
    Contact: {
      ContactA: <ContactDayA />,
    },
    Banner: {
      BannerA: <BannerDayA />,
      BannerB: <BannerDayB />,
    },
    Pricing: {
      PricingA: <PricingDayA />,
      PricingB: <PricingDayB />,
      PricingC: <PricingDayC />,
    },
    Testimonial: {
      TestimonialA: <TestimonialDayA />,
      TestimonialB: <TestimonialDayB />,
      TestimonialC: <TestimonialDayC />,
    },
    Product: {
      ProductA: <ProductDayA />,
      ProductB: <ProductDayB />,
      ProductC: <ProductDayC />,
      ProductD: <ProductDayD />,
      ProductE: <ProductDayE />,
      ProductF: <ProductDayF />,
      ProductG: <ProductDayG />,
      ProductH: <ProductDayH />,
    },
    Otp: {
      OtpA: <OtpDayA />,
      OtpB: <OtpDayB />,
    },
    Form: {
      FormA: <FormDayA />,
    },
  };
}
