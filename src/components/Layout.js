import React from "react";
import { Helmet } from "react-helmet";
import withRoot from "../withRoot";
import "typeface-antonio";
import "typeface-roboto";

// images
import faviconico from "../assets/img/favicon.ico";
import faviconpng from "../assets/img/favicon.png";

// Components
import Header from "./Header";
import Footer from "./Footer";

const description =
  "ConsenBus is the intelligent connection of people, process, data and things.";

const Layout = props => (
  <div className="wrapper">
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={faviconico} />
      <link rel="icon" type="image/png" href={faviconpng} sizes="196x196" />
      <title>{"ConsenBus | The Economy of Everything"}</title>
      <meta name="description" content={description} />
    </Helmet>

    <Header {...props} />

    {props.children}

    <Footer />
  </div>
);

export default withRoot(Layout);
