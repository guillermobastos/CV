import React from "react";
import MyComponent from "../components/MyComponent";
import RainbowText from "@/components/RainbowText";
import SocialIcons from "@/components/SocialIcons";

const Home: React.FC = () => {
  return (
    <div>
      {/* <RainbowText text={['GUILLERMO BASTOS', 'DATA SCIENCE 🤖']} /> */}
      <RainbowText text="GUILLERMO BASTOS - DATA SCIENCE/analyst" />
      <MyComponent />
      <SocialIcons />
    </div>
  );
};

export default Home;
