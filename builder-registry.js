import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/common/Navbar")),
  {
    name: "Navbar",
    inputs: [
      {
        name: "activePage",
        type: "text",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Industry-Pages/PowerSports")),
  {
    name: "PowerSports",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Industry-Pages/Solar")),
  {
    name: "Solar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/FAQs/FAQs")),
  {
    name: "FAQs",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/HomePage-Components/HomePage-ContactUs")),
  {
    name: "HomePageContactUs",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/HomePage-Components/HomePage-Footer")),
  {
    name: "HomePageFooter",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/HomePage-Components/HomePage-IndustriesSection")
  ),
  {
    name: "HomePageIndustriesSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/HomePage-Components/HomePage-QBO-Button")),
  {
    name: "HomePageQBOButton",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/HomePage-Components/HomePage-Testimonials")
  ),
  {
    name: "HomePageTestimonials",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/HomePage-Components/HomePage-TransFormBusiness")
  ),
  {
    name: "HomePageTransFormBusiness",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/HomePage-Components/HomePage-WhyChooseUs")
  ),
  {
    name: "HomePageWhyChooseUs",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/HomePage-Components/HomePage-WhyHarvv")),
  {
    name: "HomePageWhyHarvv",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/HomePage-Components/HomePage-Slider1")),
  {
    name: "HomePageSlider1",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/HomePage-Components/HomePage-HeroSection")
  ),
  {
    name: "HomePageHeroSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/common/Footer")),
  {
    name: "Footer",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/Pricing-Components/Pricing-GetConsultation")
  ),
  {
    name: "PricingGetConsultation",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Pricing-Components/Pricing-HeroSection")),
  {
    name: "PricingHeroSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/CustomerSupport-Components/CS-ContactUs")),
  {
    name: "CSContactUs",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/CustomerSupport-Components/CS-HeroSection")
  ),
  {
    name: "CSHeroSection",
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./components/CustomerSupport-Components/CS-LiveChatSection")
  ),
  {
    name: "CSLiveChatSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AboutUs-Components/AboutUs-BigPicture")),
  {
    name: "AboutUsBigPicture",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AboutUs-Components/AboutUs-CEOMessage")),
  {
    name: "AboutUsCEOMessage",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AboutUs-Components/AboutUs-HeroSection")),
  {
    name: "AboutUsHeroSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AboutUs-Components/AboutUs-History")),
  {
    name: "AboutUsHistory",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AboutUs-Components/AboutUs-Slider")),
  {
    name: "AboutUsSlider",
  }
);
