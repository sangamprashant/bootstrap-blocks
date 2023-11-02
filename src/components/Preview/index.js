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
    //   HeroB: darkMode ? <HeroNightB /> : <HeroDayB />,
    }, 
    Footer: {
      FooterA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      FooterE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Log: {
      LogA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      LogE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Cart: {
      EcommerceA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Contact: {
      ContactA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Banner: {
      BannerA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      BannerB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Pricing: {
      PricingA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      PricingB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Testimonial: {
      TestimonialA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      TestimonialB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Product: {
      ProductA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductE: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      ProductF: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Otp: {
      OtpA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Form: {
      FormA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
  };
}
