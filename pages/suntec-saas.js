import { Container, Row, Col, Image, Breadcrumb, Card, Button, Offcanvas } from 'react-bootstrap';
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
import CardBox from '../utils/Card'

const Saas = () => {

  const router = useRouter()
  const PdfLink = '';
  const PostTitle = "SunTec SaaS";
  const PostDescription = "Re-invent your business and deliver exceptional customer experience with SunTec’s ready-to-use SaaS solutions";
  const PostImage = "/images/SaaS.jpg";


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
      <Container className="p-3 b-banner" fluid style={{
        backgroundImage: `url(${PostImage})`,
        height: "450px"
      }}>

        <Row>
          <Col sm={4}>
            <div className="r-text">
              <div class="ribbon-1"></div>
              <h1 className="fs-1">SunTec SaaS</h1>
              <div className="wbg-gr p-2 w-text">
                <p className="fs-5">Re-invent your business and deliver exceptional customer experience with SunTec&apos;s ready-to-use SaaS solutions
                </p>
              </div>
            </div>
          </Col>
          <Col >
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <h2 className="fs-3mb-3">SunTec SaaS</h2>
        <p className="">Now you don&apos;t need to buy but just subscribe to the world&apos;s leading Pricing and Billing solutions or any of the other products offered by SunTec&apos;s award-winning platform, SunTec Xelerate. You could also utilize our featured solutions available as a SaaS offering, to quickly solve some of your critical business needs and take your bank to an all new level of competitiveness in the market in a matter of weeks.</p>
        <h2 className="fs-3 mt-5 mb-3">Why SunTec SaaS?</h2>
        <p className="">SunTec SaaS will provide you the flexibility to run any of the cloud-agnostic,SunTec Xelerate products and featured SaaS solutions on an industry leading cloud-based platform, while ensuring reliable and secure cloud operations. Move to the cloud is becoming a key element of digital transformation across industries, with 43% of companies making it a top-priority in 2020 to move from on-premise software to cloud-based SaaS, as per Gartner. Even though banks have stricter regulatory conditions to consider while advancing cloud strategies, they are now looking to step away from the traditional, time-intensive IT procurement processes and instead subscribe to flexible, scalable and reliable solutions that ensure significantly faster time-to-value.</p>
      </Container>
      <Container fluid className="wbg-gy pt-5 pb-5">
        <Container>
          <h2 className="text-center mt-5 mb-5 ">Features</h2>
          <Row className="mt-5 d-flex flex-lg-row flex-column gap-lg-0 gap-3">
            <Col xs={12} lg={4} className='p-2'>
              <Card className="sa_shadow h-100" >
                <Card.Img className="card-icon-left" src="/images/saas_icon_1.png" />
                <Card.Body className="c_body ">
                  <Card.Title className="mb-4 fs-5">Flexibility</Card.Title>
                  <Card.Text className="">
                    Avoid losing time and keep pace with the market changes with SunTec SaaS. Pick any of the SunTec Xelerate products or one or more of our featured SaaS solutions to start your value journey with us. You can follow a clear progression path to move from and between packages or add additional products as your business needs evolve and grow.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="sa_shadow h-100" >
                <Card.Img className="card-icon-left" src="/images/saas_icon_2.png" />
                <Card.Body className="c_body">
                  <Card.Title className="mb-4 fs-5">On Demand Scalability</Card.Title>
                  <Card.Text className="">
                    Our SunTec SaaS native open architecture enables horizontal and vertical scalability. Furthermore, SunTec SaaS on cloud supports auto-scalability that is useful to weather workload flux independently, ensuring consistent performance and optimum TCO.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="sa_shadow h-100">
                <Card.Img className="card-icon-left" src="/images/saas_icon_3.png" />
                <Card.Body className="c_body" style={{ height: '300px' }}>
                  <Card.Title className="mb-4 fs-5">High-availability</Card.Title>
                  <Card.Text className="">
                    Multi-availability zone deployment for high-availability and disaster recovery and product clustering with auto-scaling for optimized load balancing ensure high availability and provide peak operational performance and integrity. You will also enjoy 24×7 support with industry standard response time and 99.5% availability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="sa_shadow h-100" >
                <Card.Img className="card-icon-left" src="/images/saas_icon_4.png" />
                <Card.Body className="c_body" >
                  <Card.Title className="mb-4 fs-5">Data Residency & Privacy</Card.Title>
                  <Card.Text className="">
                    With strategic partnerships with various leading cloud partners, SunTec can enable you to host your data across any region, while taking into cognizance the local rules of every regulator. SunTec takes the privacy and security of individuals and their personal information very seriously and takes every reasonable measure to protect and secure the personal data that we process. We have robust information security policies and procedures in place to protect personal information from unauthorized access, alteration, disclosure or destruction. SunTec, including our platform and collection of solutions, is GDPR-ready. We have established measures and controls in place to ensure compliance in every aspect of our business and organization.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="sa_shadow h-100">
                <Card.Img className="card-icon-left" src="/images/saas_icon_5.png" />
                <Card.Body className="c_body" >
                  <Card.Title className="mb-4 fs-5">Security and Compliance</Card.Title>
                  <Card.Text className="">
                    Our dedicated security team gives a comprehensive treatment to information security by enforcing periodic VA and PT cycles, to ensure data confidentiality and integrity across all levels. Solution adheres to various international standards like ISO 27001 and SOC2.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="sa_shadow h-100" >
                <Card.Img className="card-icon-left" src="/images/saas_icon_6.png" />
                <Card.Body className="c_body" >
                  <Card.Title className="mb-4 fs-5">Subscription Pricing</Card.Title>
                  <Card.Text className="">
                    Utilize pay-as-you-go, subscription fees to get access to a product or set of use cases with flexible payment options. You can also choose from various pricing tiers, based on the solution that best meets your business requirements. We offer Standard, Premium and Enterprise packages for some of the products which provide different features at different price points.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="pt-5 pb-5">
        <h2 className="text-center mt-5 mb-5">SunTec SaaS Offerings</h2>
        <Container>
          <Row>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 m-0">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">Enterprise Product Management </Card.Title>
                  <Card.Text className="">
                    Put the customer at the heart of your enterprise and enable right selling through SunTec Xelerate Enterprise Product Management. Combined with an end-to-end life cycle management this master catalog enables managing of personalized products, including both internal as well as external partner products, and helps in setting up a single source of truth for all products and services.
                  </Card.Text>
                </Card.Body>
                <Link href="/enterprise-product-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 ">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">Dynamic Offer Management</Card.Title>
                  <Card.Text >
                    Our SunTec SaaS native open architecture enables horizontal and vertical scalability. Furthermore, SunTec SaaS on cloud supports auto-scalability that is useful to weather workload flux independently, ensuring consistent performance and optimum TCO.
                  </Card.Text>
                </Card.Body>
                <Link href="/dynamic-offer-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 ">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">High-availability</Card.Title>
                  <Card.Text>
                    Enrich your customer engagement through highly personalized, contextual offers with SunTec Xelerate Offer Management. It helps organizations grow customer relationships with a highly configurable offer management capability that enables customer choice, enhances customer relationships, reduces time and cost to market and propels growth through up-sell and cross-sell capabilities.
                  </Card.Text>
                </Card.Body>
                <Link href="/dynamic-offer-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">Relationship-based Pricing Management</Card.Title>
                  <Card.Text>
                    Bring pricing to the forefront of your customer engagement strategy by creating an enterprise pricing master for fees, rates and charges. It complements and augments existing core banking capabilities and enables contextual pricing and fairness, enhances transparency for all stakeholders, improves governance and enhances revenue.

                  </Card.Text>
                </Card.Body>
                <Link href="/relationship-based-pricing-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">Enterprise Billing and Statements Management</Card.Title>
                  <Card.Text>
                    Improve the quality of revenue across the enterprise by improving customer transparency and preventing revenue leakage with SunTec Xelerate. It helps build an enterprise capability for multi-product, multi-entity and hierarchical invoicing for all stakeholders with extremely rich billing and invoicing capabilities that helps in automating the billing process comprehensively.
                  </Card.Text>
                </Card.Body>
                <Link href="/enterprise-billing-and-statements-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">Ecosystem Management and Monetization</Card.Title>
                  <Card.Text>
                    Embrace the open economy – adopt new business models and increase revenue sources with SunTec Xelerate Ecosystem Management and Monetization. Make your organization a true value aggregator through end-to-end management, monitoring, and monetization capabilities across the partner and the customer value chain.
                  </Card.Text>
                </Card.Body>
                <Link href="/ecosystem-management-and-monetization/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>

            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100">
                <Card.Body className="c_body px-4">
                  <Card.Title className="mb-4 fs-5">Benefits and Loyalty Management</Card.Title>
                  <Card.Text>
                    Improve your share of wallet and engage with customers across product lines with targeted and differentiated loyalty programs. Organizations can understand and evaluate each relationship, regardless of the complexity of client and account hierarchies, ensuring faster time to market helping retain existing customers as well as attracting new customers.
                  </Card.Text>
                </Card.Body>
                <Link href="/benefits-and-loyalty-management/" target='_blank' className='expand-btn w-25'>Expolre</Link>
              </Card>
            </Col>
            <Col xs={12} lg={4} className='p-2'>
              <Card className="rounded-0 shadow h-100 bg-gray">
                <Card.Body className="c_body px-4 ">
                  <Card.Title className="mb-4 fs-5">Enterprise Indirect Taxation Management</Card.Title>
                  <Card.Text>
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

      <Container className="pt-5 pb-5">
        <h2 className="text-center mt-5 mb-5">Featured SaaS Solutions</h2>
        <p>Accelerating digital transformation and adopting contemporary business practices are becoming critical to keep up with customers’ evolving expectations. The featured SaaS solutions are out-of-the-box, ready-to-use solutions that are designed to help you quickly solve some of your immediate business needs, while taking some massive leaps in your digitization journeys. These solutions are easily deployable as a layer on top of existing core systems and, therefore, will work without disrupting and by enhancing those systems, allowing you the agility required to effectively respond to the market.</p>
        <Row className="mt-5 d-flex flex-lg-row flex-column gap-3 ">
         
          <Col className='shadow p-0 border-0 rounded-3'>
            <Card className=" h-100 border-0" >
              <Card.Body className="c_body p-0">
                <div
                  className='d-flex flex-column justify-content-end'
                  style={{ backgroundImage: `url('images/Saas-Preferential-Interest-Management.jpeg')`, height: '240px', width: "100%", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                  <div className='fs-5 bg-black text-white p-3 bg-opacity-50 text-center'>
                    Preferential Interest Management
                  </div>
                </div>
                <Card.Text className="fs-5 p-4">
                  Enhance your personalization strategies by offering preferential interest to reward your customers and to encourage them to do more business with you. This solution will enable you to effortlessly calculate, implement and manage preferential interest for your customers. It comes with a pre-define set of rules to compute preferential interest or amounts and it can be easily configured to incorporate any of the bank’s own rate calculation rules
                </Card.Text>
              </Card.Body>
              <Link href="platforms/Preferential-Interest-Rate_datasheet_.pdf" target="_blank" className='expand-btn w-50'>Read the Datasheet</Link>
            </Card>
          </Col>

          <Col className='shadow p-0 border-0 rounded-3'>
            <Card className=" h-100 border-0" >
              <Card.Body className="c_body p-0">
                <div
                  className='d-flex flex-column justify-content-end'
                  style={{ backgroundImage: `url('images/Saas-Offer-enablement.jpeg')`, height: '240px', width: "100%", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                  <div className='fs-5 bg-black text-white p-3 bg-opacity-50 text-center'>
                    Offer Enablement
                  </div>
                </div>
                <Card.Text className="fs-5 p-4">
                  Adopt the “Segment of One” strategy, at scale with this enterprise-wide solution. The solution will empower you with the capabilities required to rapidly create and launch highly personalized product bundles and offers for any customer segment in a centralized manner. With this solution, you will no longer be constrained to your portfolio to serve and satisfy your customer base because it will allow you to easily incorporate and monetize partner products and services into your offerings to maximize the value you deliver to your customers.
                </Card.Text>
              </Card.Body>
              <Link href="/platforms/Offer-Enablement-Datasheet.pdf" target='_blank' className='expand-btn w-50'>Read the Datasheet</Link>
            </Card>
          </Col>

          <Col className='shadow p-0 border-0 rounded-3'>
            <Card className=" h-100 border-0 " >
              <Card.Body className="c_body p-0">
                <div
                  className='d-flex flex-column justify-content-end'
                  style={{ backgroundImage: `url('images/SaaS-Benefits-management.jpeg')`, height: '240px', width: "100%", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                  <div className='fs-5 bg-black text-white p-3 bg-opacity-50 text-center'>
                    Benefits Management
                  </div>
                </div>
                <Card.Text className="fs-5 p-4">
                  Easily design and roll-out innovative benefits plans to acquire new customers, cross-sell, reward customers, among others. This solution will help you to readily introduce and manage several financial and non-financial rewards and in a dynamic manner, while the core systems continue to manage pricing.
                </Card.Text>
              </Card.Body>
              <Link href="/platforms/Benefits-Management-Datasheet.pdf" target='_blank' className='expand-btn w-50 '>Read the Datasheet</Link>
            </Card>
          </Col>

        </Row>
      </Container>
      <Container>
        <h4>Benefits</h4>
        <hr className='line-20'/>
        <Container>
        <Row  className="mt-5 d-flex flex-lg-row flex-column gap-3 ">
          <Col className='fs-5'>
          <p>Reduced Time-to-value</p>
          <hr className='line-20'/>
          <p>Pre-configured solution with defined onboarding framework helps you reduce time to leverage the solution and deliver value to business.</p>
          </Col>
          
          <Col className='fs-5'>
          <p>Lower Upfront Costs</p>
          <hr className='line-20'/>
          <p>Move from an upfront capex model to a complete pay as you go, opex model. Pay more only when you grow.</p>
          </Col>

          <Col className='fs-5'>
          <p>Continuous Innovation</p>
          <hr className='line-20'/>
          <p>Access to continuous innovation and the latest features through continuous development and continues integration with no downtime.</p>
          </Col>
        </Row>
        </Container>
      
      </Container>
      <Insights tags='321' />
      <Footer />
    </>
  )
}

export default Saas