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
import FooterNightA from "./Footer/FooterNight/A";
import FooterNightB from "./Footer/FooterNight/B";

import HeroDayA from "./Hero/HeroDay/HeroDayA";
import HeroDayB from "./Hero/HeroDay/HeroDayB";
import HeroNightA from "./Hero/HeroNight/HeroNightA";
import HeroNightB from "./Hero/HeroNight/HeroNightB";

export default function getPreview({ darkMode = false }) {
  return {
    Hero: {
      HeroA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      HeroB: darkMode ? <HeroNightB height="100" width="100%" /> : <HeroDayB  height="100" width="100%" />,
      HeroC: darkMode ? <HeroNightB height="100" width="100%" /> : <HeroDayB  height="100" width="100%" />,
      HeroD: darkMode ? <HeroNightB height="100" width="100%" /> : <HeroDayB  height="100" width="100%" />,
      HeroE: darkMode ? <HeroNightB height="100" width="100%" /> : <HeroDayB  height="100" width="100%" />,
      HeroF: darkMode ? <HeroNightB height="100" width="100%" /> : <HeroDayB  height="100" width="100%" />,
    }, 
    Footer: {
      FooterA: darkMode ? <FooterNightA height="100" width="100%" /> : <FooterDayA  height="100" width="100%" />,
      FooterB: darkMode ? <FooterNightB height="100" width="100%" /> : <FooterDayB  height="100" width="100%" />,
      FooterC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterF: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Log: {
      LogA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
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
      BannerA: darkMode ? <BannerNightA height="100" width="100%" /> : <BannerDayA  height="100" width="100%" />,
      BannerB: darkMode ? <BannerNightB height="100" width="100%" /> : <BannerDayB  height="100" width="100%" />,
    },
    Pricing: {
      PricingA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      PricingB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      PricingC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Testimonial: {
      TestimonialA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      TestimonialB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      TestimonialC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Product: {
      ProductA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductF: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductG: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductH: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Otp: {
      OtpA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      OtpB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Form: {
      FormA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
  };
}
