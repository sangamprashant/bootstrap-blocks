import EcommerceDayA from "./Ecommerce/EcommerceDay/A";
import EcommerceDayB from "./Ecommerce/EcommerceDay/B";
import EcommerceDayC from "./Ecommerce/EcommerceDay/C";
import EcommerceDayD from "./Ecommerce/EcommerceDay/D";
import EcommerceNightA from "./Ecommerce/EcommerceNight/A";
import EcommerceNightB from "./Ecommerce/EcommerceNight/B";
import EcommerceNightC from "./Ecommerce/EcommerceNight/C";
import EcommerceNightD from "./Ecommerce/EcommerceNight/D";

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
    Form: {
      FormA: darkMode ? <FormNightA /> : <FormDayA />,
    },
    Cart: {
      EcommerceA: darkMode ? <EcommerceNightA />: <EcommerceDayA />,
      EcommerceB: darkMode ? <EcommerceNightB />: <EcommerceDayB />,
      EcommerceC: darkMode ? <EcommerceNightC />: <EcommerceDayC />,
      EcommerceD: darkMode ? <EcommerceNightD />: <EcommerceDayD />,
    },
  };
}
