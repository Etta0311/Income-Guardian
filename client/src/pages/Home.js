import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <RouterLink to="/">
        <Image src="./assets/homepagebg.jpg" alt="budget-tracking"></Image>
      </RouterLink>
    </div>
  );
};

export default Home;
