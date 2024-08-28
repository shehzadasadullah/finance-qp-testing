import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/Home/Home")),
  {
    name: "Home",
    inputs: [
      {
        name: "headingText",
        type: "string",
        defaultValue: "Hello",
        friendlyName: "Heading Text",
        description: "Heading Text",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Pricing/Pricing")),
  {
    name: "Pricing",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/About-Us/AboutUs")),
  {
    name: "AboutUs",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Customer-Support/CustomerSupport")),
  {
    name: "CustomerSupport",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Navbar/Navbar")),
  {
    name: "Navbar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Industry-Pages/PowerSports")),
  {
    name: "PowerSports",
  }
);
