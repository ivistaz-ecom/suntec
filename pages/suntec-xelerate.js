import { Container, Row, Col, Image, Breadcrumb, Card, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';
import CardBox from '../utils/Card';

const Xelerate = () => {

  const router = useRouter()
  const PdfLink = '';
  const PostTitle = "Enabling Digitally Empathetic Enterprises";
  const PostDescription = "Increase Customer Lifetime Value | Manage Revenue Effectively";
  const PostImage = "/images/xelerate.jpeg";

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
              type: 'image/jpeg',
            },
            {
              url: `${PostImage}`,
              width: 900,
              height: 800,
              alt: { PostTitle },
              type: 'image/jpeg',
            },
            { url: `${PostImage}` },
            { url: `${PostImage}` },
          ],
          siteName: 'SunTec Group',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Breadcum PostTitle={PostTitle} />
      <Container className="p-5 b-banner" fluid style={{
        backgroundImage: `url(${PostImage})`,
        height: "450px"
      }}>

        <Row>
          <Col sm={4}>
            <div className="r-text">
              <div class="ribbon-2"></div>
              <h1 className="fs-1">Enabling Digitally Empathetic Enterprises</h1>
              <div className="wbg-gr p-2 w-text">
                <p className="fs-5">Increase Customer Lifetime Value | Manage Revenue Effectively
                </p>
              </div>
            </div>
          </Col>
          <Col >
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <h2 className="fs-2 mb-3">SunTec Xelerate®- The Game Changer</h2>
        <Row className='mt-5 d-flex flex-lg-row flex-column gap-lg-0 gap-4'>
          <Col sm={5} className='d-flex flex-column justify-content-center'>
            <iframe className='m' width="100%" height="300" src="https://www.youtube.com/embed/bASQV6X7_yc" title="About SunTec Xelerate" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
          <Col sm={7}>
            <Card className='mb-5'>
              <Card.Body>
                <p className="fs-6 mb-5">SunTec Xelerate is an award-winning, cloud-native and micro-services-based platform that helps organizations own the customer experience by setting up a system-of-engagement with enhanced product management capabilities, enterprise pricing, revenue management and partner ecosystem management.</p>
                <div className="company-l middle col"><p className="fs-10 p-3">It functions as a customer-centric, business middle layer that orchestrates the internal technology landscape to enable effective transformation from a product-based to an agile, customer-first organization.</p></div>
                <p className="fs-6 mt-3">SunTec Xelerate helps organizations create and bundle products, adopt relationship-based pricing strategies, plug revenue leakage, create and configure specific deals, offer partner products, as well as track the revenue and profitability of all products across the enterprise value chain.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="wbg-gy pt-5 pb-5">
        <Container>
          <h2 className="text-center">SunTec Xelerate- Features</h2>
          <Row className=''>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="c_shadow h-100 " >
                <Card.Body className="c_body px-3">
                  <Card.Title className="mb-4 fs-6">APIs and Extension</Card.Title>
                  <hr className='line-20' />
                  <Card.Text className="fs-6">
                    The data-independent design ensures that the SunTec Xelerate APIs provide flexibility and extensibility and can be used for any context. Backward compatibility is ensured during upgrades with the APIs provided
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="c_shadow h-100 " >
                <Card.Body className="c_body">
                  <Card.Title className="mb-4 fs-6">Micro-services Architecture</Card.Title>
                  <hr className='line-20' />
                  <Card.Text className="fs-6">
                    Scalability is possible both horizontally and vertically with the micro-services architecture, and cloud deployment is made even easier
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="c_shadow h-100 ">
                <Card.Body className="c_body p-4">
                  <Card.Title className="mb-4 fs-6">SunTec Xelerate Business Management Console</Card.Title>
                  <hr className='line-20' />
                  <Card.Text className="fs-6">
                    SunTec Xelerate Business Management Console (XBMC) encapsulates all the technical components inside, allowing customers to wire and connect processes using the services provided
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className='p-2'>
              <Card className="c_shadow  h-100" >
                <Card.Body className="c_body ">
                  <Card.Title className="mb-4 fs-6">Cloud Enablement</Card.Title>
                  <hr className='line-20' />
                  <Card.Text className="fs-6">
                    Elastic scalability is achieved using the micro-service architecture, with all the security aspects covered for Cloud deployment. The platform is flexible and supports multiple cloud providers
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className='p-2'><Card className="c_shadow  h-100" >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-6">Continuous Integration and Deployment</Card.Title>
                <hr className='line-20' />
                <Card.Text className="fs-6">
                  Continuous Integration and Deployment enables faster releases with comprehensive automation of testing as part of the release process
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4} className='p-2'><Card className="c_shadow  h-100">
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-6">Polyglot Data Persistence</Card.Title>
                <hr className='line-20' />
                <Card.Text className="fs-6">
                  The database is just a store and depending on the business need, multiple types of databases can be used for storage, thereby allowing better horizontal scalability
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="wbg-dark" fluid>
        <Container className="pt-5 pb-5">
          <h2 className="text-white">Own the Customer Experience</h2>
          <p className="text-white">As a digital enterprise, your top priority is to make your customers’ life easier and their experience seamless and enjoyable. The needs of your customers must be at the heart of your digital transformation plans. SunTec Xelerate provides a unified layer for product innovation and end-to-end product lifecycle management. This allows organizations to quickly add four enterprise capabilities that are critical to owning the customer experience.</p>

          <Row className="mt-5">
            <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
              <Card.Img src="/images/xelerate-innovation.png" className="card-icon-left" />
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-6">Product Management Capabilities</Card.Title>
                <Card.Text className="fs-6">Create unlimited personalized products from your repository of offerings which can also be bundled with your partner offerings
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
              <Card.Img src="/images/xelerate-data.png" className="card-icon-left" />
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-6">Customer Data Management</Card.Title>
                <Card.Text className="fs-6">ingle view of the customer across products, geographies and channels
                </Card.Text>

              </Card.Body>

            </Card>
            </Col>
            <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
              <Card.Img src="/images/xelerate-shakehand.png" className="card-icon-left" />
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-6">Partner Ecosystem Management</Card.Title>
                <Card.Text className="fs-6">On-board and manage partners at multiple levels to create the right service bundles for your customers
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
              <Card.Img src="/images/xelerate-revenue.png" className="card-icon-left" />
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-6">Partner Ecosystem Management</Card.Title>
                <Card.Text className="fs-6">On-board and manage partners at multiple levels to create the right service bundles for your customers
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
          </Row>

        </Container>
      </Container>
      <Container className="p-3 b-banner mt-5" fluid style={{
        backgroundImage: `url("/images/accelerate-digital-transformation.jpg")`
         }}>
        <Container className="wbg-gy p-4">
          <h2>Accelerate your Digital Transformation Journey</h2>
          <p>SunTec Xelerate poses no risk for organizations who want to accelerate their digital transformation journey, without having to replace their functionally stable legacy core systems.</p>
          <p>SunTec Xelerate simplifies the process by hollowing out customer engagement functions from the core system and managing it as a horizontal cross-enterprise layer. The enhanced product innovation capabilities of the platform coupled with sophisticated customer data management functions and partner ecosystem management enable organizations to effectively realize their revenues across the enterprise value chain.</p>
          <p>With this approach, organizations can quickly adopt new technologies, add more functionality and capabilities, offer customized products and enhance the customer experience. The goal is to transition from a product-based to an agile, customer-first organization.</p>
        </Container>
      </Container>
      <Container className="p-4">
        <h2>How does SunTec Xelerate help Organizations?</h2>
        <p className="fs-6">SunTec Xelerate helps organizations to independently realize their digital transformation aspirations notwithstanding the state of their legacy systems. It provides them with the agility and flexibility required to make their Digital Transformation plans a success. It even allows them to bring together different facets of technology and create new customer experiences.</p>
        <Row>
          <Col xs={12} lg={4} className='p-2'>
            <Card className="c_shadow h-100">
              <Card.Body className="c_body ">
                <img className='w-25 ps-1 mb-3' src="images/x-replacement.png" />
                <Card.Title className="fw-bold fs-5">No Core Replacement</Card.Title>
                <hr className='line-20' />
                <ul>
                  <li>Leverage your existing robust infrastructure</li>
                  <li>Achieve progressive transformation</li>
                  <li>Approach the goal by hollowing out the core</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4} className='p-2'>
            <Card className="c_shadow h-100">
              <Card.Body className="c_body">
                <img className='w-25 ps-1 mb-3' src="/images/x-risk.png" />
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <hr className='line-20' />
                <ul>
                  <li>Data-driven, agile transformation</li>
                  <li>Utilize planned risk mitigation and governance frameworks</li>
                  <li>Deploy micro-services based scalable architecture</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4} className='p-2'>
            <Card className="c_shadow h-100" >
              <Card.Body className="c_body">
                <img className='w-25 ps-1 mb-3' src="images/x-complexity.png" />
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <hr className='line-20' />
                <ul>
                  <li>Implement using our highly flexible and unified cross-product middle layer</li>
                  <li>Allow end-to-end management of products, offers and revenue</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className='p-2'>
            <Card className="c_shadow h-100">
              <Card.Body className="c_body">
                <img className='w-25 ps-1 mb-3' src="images/x-agility.png" />
                <Card.Title className="fw-bold fs-5">No Core Replacement</Card.Title>
                <hr className='line-20' />
                <ul>
                  <li>Leverage your existing robust infrastructure</li>
                  <li>Achieve progressive transformation</li>
                  <li>Approach the goal by hollowing out the core</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4} className='p-2'>
            <Card className="c_shadow h-100">
              <Card.Body className="c_body">
                <img className='w-25 ps-1 mb-3' src="images/x-customer.png" />
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <hr className='line-20' />
                <ul>
                  <li>Data-driven, agile transformation</li>
                  <li>Utilize planned risk mitigation and governance frameworks</li>
                  <li>Deploy micro-services based scalable architecture</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4} className='p-2'>
            <Card className="c_shadow h-100">
              <Card.Body className="c_body">
                <img className='w-25 ps-1 mb-3' src="images/x-realtime.png" />
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <hr className='line-20' />
                <ul>
                  <li>Implement using our highly flexible and unified cross-product middle layer</li>
                  <li>Allow end-to-end management of products, offers and revenue</li>

                </ul>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
      <Container fluid className=" pt-5 pb-5">
        <Container>
          <h2 className="">SunTec Xelerate Products</h2>
          <p className="fs-10">We offer the flexibility for you to combine components of SunTec Xelerate to create specific solutions for digital transformation, revenue management, customer experience orchestration and partner ecosystem management.</p>
          <Row className="mt-5 d-flex flex-lg-row flex-column gap-lg-0 gap-3">
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 m-0 wbg-dark">
                <Card.Body className="c_body px-4 text-white">
                  <Card.Title className="mb-4 fs-4">Enterprise Product Management </Card.Title>
                  <Card.Text className="fs-6">
                    Put the customer at the heart of your enterprise and enable right selling through SunTec Xelerate Enterprise Product Management. Combined with an end-to-end life cycle management this master catalog enables managing of personalized products, including both internal as well as external partner products, and helps in setting up a single source of truth for all products and services.
                  </Card.Text>
                </Card.Body>
                <Link href="/enterprise-product-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 wbg-dark">
                <Card.Body className="c_body px-4 text-white">
                  <Card.Title className="mb-4 fs-4">Dynamic Offer Management</Card.Title>
                  <Card.Text className='fs=6'>
                    Enrich your customer engagement through highly personalized, contextual offers with SunTec Xelerate Offer Management. It helps organizations grow customer relationships with a highly configurable offer management capability that enables customer choice, enhances customer relationships, reduces time and cost to market and propels growth through up-sell and cross-sell capabilities.
                  </Card.Text>
                </Card.Body>
                <Link href="/dynamic-offer-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 wbg-dark">
                <Card.Body className="c_body px-4 text-white">
                  <Card.Title className="mb-4 fs-4">Deal Management</Card.Title>
                  <Card.Text className='fs-6'>
                    Mitigate risk and reduce revenue leakage by automating the end-to-end deal process across products, businesses and geographies while ensuring price transparency and compliance with policy using SunTec Xelerate Deal Management. It helps manage the sales process right from the construction of the proposal through to the negotiation and closure of the deal.

                  </Card.Text>
                </Card.Body>
                <Link href="/deal-managemeçnt-home/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 wbg-dark">
                <Card.Body className="c_body px-4 text-white">
                  <Card.Title className="mb-4 fs-4">Relationship-based Pricing Management</Card.Title>
                  <Card.Text className='fs-6'>
                    Bring pricing to the forefront of your customer engagement strategy by creating an enterprise pricing master for fees, rates and charges. It complements and augments existing core banking capabilities and enables contextual pricing and fairness, enhances transparency for all stakeholders, improves governance and enhances revenue.

                  </Card.Text>
                </Card.Body>
                <Link href="/relationship-based-pricing-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 wbg-dark">
                <Card.Body className="c_body px-4 text-white">
                  <Card.Title className="mb-4 fs-4">Enterprise Billing and Statements Management</Card.Title>
                  <Card.Text className='fs-6'>
                    Improve the quality of revenue across the enterprise by improving customer transparency and preventing revenue leakage with SunTec Xelerate. It helps build an enterprise capability for multi-product, multi-entity and hierarchical invoicing for all stakeholders with extremely rich billing and invoicing capabilities that helps in automating the billing process comprehensively.
                  </Card.Text>
                </Card.Body>
                <Link href="/enterprise-billing-and-statements-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 wbg-dark">
                <Card.Body className="c_body px-4 text-white">
                  <Card.Title className="mb-4 fs-4">Ecosystem Management and Monetization</Card.Title>
                  <Card.Text className='fs-6'>
                    Embrace the open economy – adopt new business models and increase revenue sources with SunTec Xelerate Ecosystem Management and Monetization. Make your organization a true value aggregator through end-to-end management, monitoring, and monetization capabilities across the partner and the customer value chain.
                  </Card.Text>
                </Card.Body>
                <Link href="/ecosystem-management-and-monetization/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 wbg-dark text-white">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-4">Benefits and Loyalty Management</Card.Title>
                  <Card.Text className='fs-6'>
                    Improve your share of wallet and engage with customers across product lines with targeted and differentiated loyalty programs. Organizations can understand and evaluate each relationship, regardless of the complexity of client and account hierarchies, ensuring faster time to market helping retain existing customers as well as attracting new customers.
                  </Card.Text>
                </Card.Body>
                <Link href="/benefits-and-loyalty-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 text-white wbg-dark">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-4">Enterprise Indirect Taxation Management</Card.Title>
                  <Card.Text className='fs-6'>
                    Comply with all indirect tax requirements through an enterprise solution for all aspects of taxation.
                    SunTec Xelerate provides an out-of-the-box solution designed to de-clutter core systems, extract the
                    indirect taxation logic and ensure a smooth journey with indirect tax (GST & VAT) compliance."
                  </Card.Text>
                </Card.Body>
                <Link href="/enterprise-indirect-taxation-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Insights tags='320' />
      <Footer />
    </>
  )
}

export default Xelerate