
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

import HeroDayC from "./Hero/HeroDay/C";
import HeroDayD from "./Hero/HeroDay/D";
import HeroDayE from "./Hero/HeroDay/E";
import HeroDayA from "./Hero/HeroDay/A";
import HeroDayB from "./Hero/HeroDay/B";
import HeroNightC from "./Hero/HeroNight/C";
import HeroNightD from "./Hero/HeroNight/D";
import HeroNightE from "./Hero/HeroNight/E";
import HeroNightA from "./Hero/HeroNight/A";
import HeroNightB from "./Hero/HeroNight/B";

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
import OtpDayB from "./Otp/OtpDay/B";
import OtpNightA from "./Otp/OtpNight/A";
import OtpNightB from "./Otp/OtpNight/B";

import PricingNightA from "./Pricing/PricingNight/A";
import PricingDayA from "./Pricing/PricingDay/A";
import PricingNightB from "./Pricing/PricingNight/B";
import PricingDayB from "./Pricing/PricingDay/B";
import PricingNightC from "./Pricing/PricingNight/C";
import PricingDayC from "./Pricing/PricingDay/C";

import ProductNightA from "./Product/ProductNight/A";
import ProductDayA from "./Product/ProductDay/A";
import ProductNightB from "./Product/ProductNight/B";
import ProductDayB from "./Product/ProductDay/B";
import ProductNightC from "./Product/ProductNight/C";
import ProductDayC from "./Product/ProductDay/C";
import ProductNightD from "./Product/ProductNight/D";
import ProductDayD from "./Product/ProductDay/D";
import ProductNightE from "./Product/ProductNight/E";
import ProductDayE from "./Product/ProductDay/E";
import ProductNightF from "./Product/ProductNight/F";
import ProductDayF from "./Product/ProductDay/F";
import ProductNightG from "./Product/ProductNight/G";
import ProductDayG from "./Product/ProductDay/G";
import ProductNightH from "./Product/ProductNight/H";
import ProductDayH from "./Product/ProductDay/H";

import TestimonialNightA from "./Testimonial/TestimonialNight/A";
import TestimonialDAyA from "./Testimonial/TestimonialDay/A";
import TestimonialNightB from "./Testimonial/TestimonialNight/B";
import TestimonialDayB from "./Testimonial/TestimonialDay/B";
import TestimonialNightC from "./Testimonial/TestimonialNight/C";
import TestimonialDayC from "./Testimonial/TestimonialDay/C";

export default function getPreview({ darkMode = false }) {
  return {
    Hero: {
      //over
      HeroA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      HeroB: darkMode ? <HeroNightB height="100" width="100%" /> : <HeroDayB  height="100" width="100%" />,
      HeroC: darkMode ? <HeroNightC height="100" width="100%" /> : <HeroDayC  height="100" width="100%" />,
      HeroD: darkMode ? <HeroNightD height="100" width="100%" /> : <HeroDayD  height="100" width="100%" />,
      HeroE: darkMode ? <HeroNightE height="100" width="100%" /> : <HeroDayE  height="100" width="100%" />,
    }, 
    Footer: {
      //over
      FooterA: darkMode ? <FooterNightA height="100" width="100%" /> : <FooterDayA  height="100" width="100%" />,
      FooterB: darkMode ? <FooterNightB height="100" width="100%" /> : <FooterDayB  height="100" width="100%" />,
      FooterC: darkMode ? <FooterNightC height="100" width="100%" /> : <FooterDayC  height="100" width="100%" />,
      FooterD: darkMode ? <FooterNightD height="100" width="100%" /> : <FooterDayD  height="100" width="100%" />,
      FooterE: darkMode ? <FooterNightE height="100" width="100%" /> : <FooterDayE  height="100" width="100%" />,
    },
    Log: {
      //over
      LogA: darkMode ? <LogNightA height="100" width="100%" /> : <LogDayA  height="100" width="100%" />,
      LogB: darkMode ? <LogNightB height="100" width="100%" /> : <LogDayB  height="100" width="100%" />,
      LogC: darkMode ? <LogNightC height="100" width="100%" /> : <LogDayC  height="100" width="100%" />,
      LogD: darkMode ? <LogNightD height="100" width="100%" /> : <LogDayD  height="100" width="100%" />,
      LogE: darkMode ? <LogNightE height="100" width="100%" /> : <LogDayE  height="100" width="100%" />,
    },
    Cart: {
      // over
      EcommerceA: darkMode ? <EcommerceNightA height="100" width="100%" /> : <EcommerceDayA  height="100" width="100%" />,
      EcommerceB: darkMode ? <EcommerceNightB height="100" width="100%" /> : <EcommerceDayB  height="100" width="100%" />,
      EcommerceC: darkMode ? <EcommerceNightC height="100" width="100%" /> : <EcommerceDayC  height="100" width="100%" />,
      EcommerceD: darkMode ? <EcommerceNightD height="100" width="100%" /> : <EcommerceDayD  height="100" width="100%" />,
      EcommerceE: darkMode ? <EcommerceNightE height="100" width="100%" /> : <EcommerceDayE  height="100" width="100%" />,
    },
    Contact: {
      // over
      ContactA: darkMode ? <ContactNightA height="100" width="100%" /> : <ContactDayA  height="100" width="100%" />,
    },
    Banner: {
      //over
      BannerA: darkMode ? <BannerNightA height="100" width="100%" /> : <BannerDayA  height="100" width="100%" />,
      BannerB: darkMode ? <BannerNightB height="100" width="100%" /> : <BannerDayB  height="100" width="100%" />,
    },
    Pricing: {
      //over
      PricingA: darkMode ? <PricingNightA height="100" width="100%" /> : <PricingDayA  height="100" width="100%" />,
      PricingB: darkMode ? <PricingNightB height="100" width="100%" /> : <PricingDayB  height="100" width="100%" />,
      PricingC: darkMode ? <PricingNightC height="100" width="100%" /> : <PricingDayC  height="100" width="100%" />,
    },
    Testimonial: {
      TestimonialA: darkMode ? <TestimonialNightA height="100" width="100%" /> : <TestimonialDAyA  height="100" width="100%" />,
      TestimonialB: darkMode ? <TestimonialNightB height="100" width="100%" /> : <TestimonialDayB  height="100" width="100%" />,
      TestimonialC: darkMode ? <TestimonialNightC height="100" width="100%" /> : <TestimonialDayC  height="100" width="100%" />,
    },
    Product: {
      //over
      ProductA: darkMode ? <ProductNightA height="100" width="100%" /> : <ProductDayA  height="100" width="100%" />,
      ProductB: darkMode ? <ProductNightB height="100" width="100%" /> : <ProductDayB  height="100" width="100%" />,
      ProductC: darkMode ? <ProductNightC height="100" width="100%" /> : <ProductDayC  height="100" width="100%" />,
      ProductD: darkMode ? <ProductNightD height="100" width="100%" /> : <ProductDayD  height="100" width="100%" />,
      ProductE: darkMode ? <ProductNightE height="100" width="100%" /> : <ProductDayE  height="100" width="100%" />,
      ProductF: darkMode ? <ProductNightF height="100" width="100%" /> : <ProductDayF  height="100" width="100%" />,
      ProductG: darkMode ? <ProductNightG height="100" width="100%" /> : <ProductDayG  height="100" width="100%" />,
      ProductH: darkMode ? <ProductNightH height="100" width="100%" /> : <ProductDayH  height="100" width="100%" />,
    },
    Otp: {
      //over
      OtpA: darkMode ? <OtpNightA height="100" width="100%" /> : <OtpDayA  height="100" width="100%" />,
      OtpB: darkMode ? <OtpNightB height="100" width="100%" /> : <OtpDayB  height="100" width="100%" />,
    },
    Form: {
      // over
      FormA: darkMode ? <FormNightA height="100" width="100%" /> : <FormDayA  height="100" width="100%" />,
    },
  };
}
