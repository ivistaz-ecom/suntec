import {
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Card,
  Button,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import configData from "../config.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Insights from "../utils/FetchInsights";
import CtaCall from "../components/CtaCall";
import Cardbox from "../utils/Cardbox";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Breadcum from "../components/Breadcum";
import InsightsBtn from "../utils/InsightsBtn";

function LinksExample() {
  const router = useRouter();
  const PdfLink = "";
  const PostTitle = "Financial Services";
  const PostDescription =
    "Elevate your business to new heights with robust revenue and pricing management, a thriving partner ecosystem, and advanced customer data management capabilities.";

  const PostImage = "/images/financial_Services_banner.jpeg";

  return (
    <>
      <Header />
      <NextSeo
        title={PostTitle}
        description={PostDescription}
        canonical="/{router.asPath}"
        openGraph={{
          url: `${router.asPath}`,
          title: `${PostTitle}`,
          description: `${PostDescription}`,
          images: [
            {
              url: `${PostImage}`,
              width: 800,
              height: 600,
              alt: { PostTitle },
              type: "image/jpeg",
            },
            {
              url: `${PostImage}`,
              width: 900,
              height: 800,
              alt: { PostTitle },
              type: "image/jpeg",
            },
            { url: `${PostImage}` },
            { url: `${PostImage}` },
          ],
          siteName: "SunTec Group",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Breadcum PostTitle={PostTitle} />
      <Container
        className="px-3 b-banner"
        fluid
        style={{
          backgroundImage: `url(${PostImage})`,
        }}
      >
        <Row className="d-flex flex-lg-row flex-column">
          <Col lg={5} className="ms-lg-5 bg-purple text-white p-4">
            <div className="">
              <h1>
                Transform into the Bank of Tomorrow with Customer-centric
                Strategies
              </h1>
              <p>
                Elevate your business to new heights with robust revenue and
                pricing management, a thriving partner ecosystem, and advanced
                customer data management capabilities.
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        {/* <h1 className="fs-2 mt-5 mb-5">The Transformation Journey Has Just Begun</h1> */}
        <p className="fs-5 mt-5 ">
          To become a resilient and profitable bank of the future, financial
          institutions must embrace radical change with bold new strategies and
          business models. SunTec Xelerate can help banks accelerate their
          transformation journey, integrate seamlessly into their customers’
          lives, embrace diverse business models such as platforms, and foster
          the agility and scalability to roll out personalized offerings.
        </p>
        <h1 className="fs-2 mt-5 mb-5 ">Reimagining the Bank of the Future</h1>
        <p className="fs-5 ">
          The business of banking is facing significant disruption at a scale
          not experienced before. According to a BCG report, banks are unlikely
          to return to valuations and profitability levels reported before the
          current global financial crisis. However at least $7 trillion in value
          can be created in the next five years if they can capture a large
          portion of expected growth and improve price-to-book ratios. Banks can
          no longer approach transformation incrementally and must take a
          holistic look at the entire organization to achieve goals, drive
          economic growth, and create lasting shareholder value.
        </p>
        <p className="fs-5 ">
          This will be possible only if banks can move beyond merely
          facilitating the flow of money to becoming trusted financial advisors
          that are integral to customers’ lives. Banks must move from reacting
          to market changes to proactively disrupting the market to their
          advantage. This requires an unerring focus on customer centricity.
        </p>
        <p className="fs-5 ">
          The bank of tomorrow will be ubiquitous, intuitive, and deeply
          embedded within the customer’s life. They will operate with the
          constantly evolving customer at the core of all their strategies and
          deliver not just a hyper personalized, but also a contextual
          experience. They must be agile and scalable to stay ahead of emerging
          competition and must innovate with new business and operational
          models.
        </p>
        <p className="fs-5  mb-5">
          The challenges facing the sector are manifold, but with the right
          technology foundation, organizations can transform to the bank of the
          future with ease.
        </p>
        <h2 className="">The Challenges</h2>
        <hr className="line-21"/>

        <Row>
          <Col sm={6}>
            <Card className="d-flex flex-lg-row flex-column border-0 bg-transparent mt-4 align-items-center ">
              <Card.Img
                className="card-icon-left img-fluid p-2 p-lg-3"
                src="images/icon_6_new.png"
              />
              <Card.Body className="d-flex flex-column justify-content-center p-0">
                <Card.Title className="mb-0 text-lg-start text-center">
                  {" "}
                  Evolving customer expectations and demands
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6}>
            <Card className="d-flex flex-lg-row flex-column align-items-center border-0 bg-transparent mt-4">
              <Card.Img
                className="card-icon-left img-fluid p-2 p-lg-3"
                src="images/filter.png"
              />
              <Card.Body>
                <Card.Title className="mb-0 text-lg-start text-center">
                  Regulatory changes – additional capital and liquidity
                  requirements for higher risk
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6}>
            <Card className="d-flex flex-lg-row flex-column align-items-center border-0 bg-transparent">
              <Card.Img
                className="card-icon-left img-fluid p-2 p-lg-3"
                src="images/trade.png"
              />
              <Card.Body>
                <Card.Title className="mb-0 text-lg-start text-center">
                  Increasing competition – fintechs, new age banks, tech giants
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="d-flex flex-lg-row flex-column align-items-center border-0 bg-transparent">
              <Card.Img
                className="card-icon-left img-fluid p-2 p-lg-3"
                src="images/com.png"
              />
              <Card.Body>
                <Card.Title className="mb-0 text-lg-start text-center">
                  Rapidly evolving technology landscape
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6}>
            <Card className="d-flex flex-lg-row flex-column align-items-center border-0 bg-transparent">
              <Card.Img
                className="card-icon-left img-fluid p-2 p-lg-3"
                src="images/5.png"
              />
              <Card.Body>
                <Card.Title>TGeo-political tensions</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="d-flex flex-lg-row flex-column align-items-center border-0 bg-transparent">
              <Card.Img
                className="card-icon-left img-fluid p-2 p-lg-3"
                src="images/icon__moun.png"
              />
              <Card.Body>
                <Card.Title>Global economic slowdown</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Container className="gra_color d-flex flex-lg-row flex-column justify-content-center align-items-center align-content-center p-5" fluid>
        <Row className="d-flex flex-lg-row flex-column">
          <Col className="mt-5  d-flex flex-column justify-content-center align-items-center">
            <Col className=" d-flex flex-column justify-content-center">
              <Image
                src="/images/xelerate.png"
                height="300"
                width="400"
                className="w-100 h-auto mb-1"
              />
            </Col>
          </Col>
          <Col className="d-flex flex-column justify-content-center"> 
            <h3 className="text-white fs-3">
              How SunTec Can Aid Banks in this Transformation Journey
            </h3>
            <ul className="mt-5">
              <li className="text-white fs-6 mb-3">
                <strong>
                  Easily deploy a technology foundation that is modular, cloud
                  native, scalable, sustainable, and agile:
                </strong>{" "}
                SunTec Xelerate can be deployed as an over-the-top middle layer
                over the legacy banking cores, eliminating the need for
                expensive, and risky legacy core modernization efforts.
              </li>
              <li className="text-white fs-6 mb-3">
                <strong>
                  Follow a data-first strategy to deliver customer-centric
                  offerings:
                </strong>
                Understand customer requirements better by leveraging data
                already captured. And use the insights to roll out contextual
                and hyper-personalized offerings that meet customer needs.{" "}
              </li>
              <li className="text-white fs-6">
                <strong>Adopt new innovative banking models:</strong>
                Leverage the agility, scalability, and end-to-end partner
                management capabilities of SunTec Xelerate to explore emerging
                business models such as Banking-as-a-Platform. Choose to become
                a service provider or the orchestrator of a comprehensive
                customer-centric ecosystem.{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <h1 className="fs-2 mt-5 mb-5">SunTec Offerings</h1>
        <p className="fs-5 ">
          See how we combine components of SunTec Xelerate to create specific
          solutions for digital transformation, revenue management, customer
          experience orchestration and partner ecosystem management.
        </p>
        <Row>
          <Col>
            <Cardbox
              title="Relationship-based Pricing"
              desc="Enhance customer relationships, share of wallet and operational efficiency through differential and
              automated pricing. Analyze customer data in real time and deliver context- specific offers at the
              right time."
              url="/relationship-based-pricing-management/"
              img="/images/icon_1.png"
            />
          </Col>
          <Col>
            <Cardbox
              title="Enterprise Product Management"
              desc="Create and maintain optimized product portfolio with extreme agility. It comes pre-integrated with the relationship-based pricing module and can be seamlessly integrated with core applications."
              url="/enterprise-product-management/"
              img="/images/icon_2.png"
            />
          </Col>
          <Col>
            <Cardbox
              title="Billing & Invoicing"
              desc="Allows financial institutions to manage all their billing and invoicing requirements including complex charging situations for customers availing multiple products and services. Provides a consolidated statement from across multiple business lines."
              url="/enterprise-billing-and-statements-management/"
              img="/images/icon_3.png"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Cardbox
              title="Deal Management"
              desc="Manage the complete deal lifecycle of all the contracts in the enterprise, across products and businesses. Use a single source of truth to streamline and simplify complex negotiations across different geographies, increase profit margins, ensure price transparency and policy compliance."
              url="/deal-management-home/"
              img="/images/icon_4.png"
            />
          </Col>
          <Col>
            <Cardbox
              title="Dynamic Offer Management"
              desc="Track your customers' lifetime journey, get a complete view of the relationship and make highly personalized offers. You can even bundle offers from other partners in your ecosystem to make an offer your customers just can't refuse."
              url="/dynamic-offer-management/"
              img="/images/icon_5.png"
            />
          </Col>
          <Col>
            <Cardbox
              title="Loyalty Management"
              desc="Determine the true value of every customer relationship regardless of the complexity of your account hierarchies and product bundles and launch effective loyalty programs. Combine your loyalty program with relationship-based pricing, identify upsell and cross-sell opportunities and improve customer retention."
              url="/benefits-and-loyalty-management/"
              img="/images/icon_6.png"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Cardbox
              title="Open Banking Monetization"
              desc="Embrace the open banking economy - add new business models and revenue sources. Our easy to
              manage partner ecosystem allows you to transition from being a mere utility provider to a true value
              aggregator."
              url="/ecosystem-management-and-monetization/"
              img="/images/icon_7.png"
            />
          </Col>

          <Col>
            <Cardbox
              title="Taxation"
              desc="Your one-stop-solution for all GST and VAT regulatory compliance requirements. Configurable framework that seamlessly integrates with business systems across organizational silos, covering tax determination, invoicing, return filing and reporting."
              url="/enterprise-indirect-taxation-management/"
              img="/images/icon_8.png"
            />
          </Col>
          <Col className="d-flex d-lg-block d-none"></Col>
        </Row>
      </Container>
      <CtaCall
        text="Accelerating your digital transformation journey has never been this simple!"
        btn="Discover how"
        url="/whitepapers/embarking-on-progressive-modernization-to-build-a-digital-bank/"
      />
      <Insights tags="319" />
      <Footer />
    </>
  );
}

export default LinksExample;
