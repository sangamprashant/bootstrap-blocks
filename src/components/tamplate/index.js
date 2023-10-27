import FooterDayA from "./Footer/FooterDay/A";
import FooterDayB from "./Footer/FooterDay/B";
import FooterNightA from "./Footer/FooterNight/A";
import FooterNightB from "./Footer/FooterNight/B";

import HeroDayA from "./Hero/HeroDay/A";
import HeroDayB from "./Hero/HeroDay/B";
import HeroNightA from "./Hero/HeroNight/A";
import HeroNightB from "./Hero/HeroNight/B";

export default function getTemplate({ darkMode = false }) {
  return {
    Hero: {
      HeroA: darkMode ? <HeroNightA /> : <HeroDayA />,
      HeroB: darkMode ? <HeroNightB /> : <HeroDayB />,
    },
    Footer: {
        FooterA: darkMode ? <FooterNightA/> : <FooterDayA/>,
        FooterB: darkMode ? <FooterNightB/> : <FooterDayB/>,
    },
    Hero2: {
      HeroA: darkMode ? <HeroNightA /> : <HeroDayA />,
      HeroB: darkMode ? <HeroNightB /> : <HeroDayB />,
    },
    Footer2: {
        FooterA: darkMode ? <FooterNightA/> : <FooterDayA/>,
        FooterB: darkMode ? <FooterNightB/> : <FooterDayB/>,
    }
  };
}
