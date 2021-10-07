import * as React from "react";
import LandingLayout, {
  LandingBackground,
  LandingForeground,
} from "../components/layouts/LandingLayout";

// markup
const IndexPage = () => {
  return (
    <main>
      {/* TODO: Add Navbar */}
      <LandingBackground></LandingBackground>
      <LandingLayout></LandingLayout>
      <LandingForeground></LandingForeground>
    </main>
  );
};

export default IndexPage;
