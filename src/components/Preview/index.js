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
    Form: {
      FormA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
    Cart: {
      EcommerceA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceB: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceC: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      EcommerceD: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    },
  };
}
