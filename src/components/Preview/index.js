import HeroDayA from "./Hero/HeroDay/HeroDayA";
import HeroNightA from "./Hero/HeroNight/HeroNightA";

export default function getPreview({ darkMode = false }) {
  return {
    Hero: {
      HeroA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
    //   HeroB: darkMode ? <HeroNightB /> : <HeroDayB />,
    }, Footer: {
        FooterA: darkMode ? <HeroNightA height="100" width="100%" /> : <HeroDayA  height="100" width="100%" />,
      //   HeroB: darkMode ? <HeroNightB /> : <HeroDayB />,
      },
  };
}
