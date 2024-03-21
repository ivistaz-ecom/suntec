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


const Cloud = () => {

  const router = useRouter()  
  const PdfLink = '';
  const PostTitle = "SunTec Cloud";
  const PostDescription = "Capitalize on flexibility, improve time to market, and ensure enhanced security. Make your enterprise’s cloud journey seamless.";
  const PostImage = "images/cloud.jpeg"; 

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
            alt: {PostTitle},
            type: 'image/jpeg',
          },
          {
            url: `${PostImage}`,
            width: 900,
            height: 800,
            alt: {PostTitle},
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
<Breadcum PostTitle={PostTitle}/>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})`,
      height: "450px" 
    }}>

        <Row>
          <Col sm={4}>
            <div className="r-text">
              <div class="ribbon-1"></div>
              <h1 className="fs-1">SunTec Cloud</h1>
              <div className="wbg-gr p-2 w-text">
                <p className="fs-5">Capitalize on flexibility, improve time to market, and ensure enhanced security. Make your enterprise&apos;s cloud journey seamless.
                </p>
              </div>
            </div>
          </Col>
          <Col >
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <h2 className="fs-3">Improve Agility and Efficiency with SunTec Cloud</h2>
        <p className="fs-6 mt-5">The need of the hour for organizations is the adoption of an agile, customer-first business model to thrive in rapidly evolving markets, while optimizing operational efficiency. Cloud-based deployments of business applications is therefore on the rise for some very good reasons – it enhances business and technological agility, accelerates time to market and time-to-value and increases economies of scale.</p>
        <p className="fs-6">SunTec&apos;s flagship platform Xelerate and its products are cloud-enabled and readily compatible with industry leading cloud platforms such as AWS, Microsoft Azure and IBM Cloud. SunTec Xelerate on Cloud is designed and built to ease the stress of cloud adoption that comes with operating in highly regulated markets, to ensure that organizations reap the benefits of this robust platform and products quickly and efficiently without compromising on security, compliance and risk management.</p>
      </Container>
      <Container fluid className="wbg-gy pt-1 pb-5">
        <h2 className="text-center mt-5 mb-5">Features</h2>
        {/* <hr className='line-21 d-flux justify-content-center'/> */}
          <Container>
        <Row>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_1.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">Cloud Agnostic</Card.Title>
              <Card.Text className="fs-6">Our SunTec Xelerate platform, products and solutions can be easily deployed in and are optimized for any industry-leading platforms such as AWS, Microsoft Azure and IBM Cloud.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_2.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">Multi-Cloud Extensibility</Card.Title>
              <Card.Text className="fs-6">The platform is enabled with standard extensions and services. This allows organizations with multiple cloud platforms within their existing infrastructure to operate SunTec Xelerate across the different cloud platforms without incurring any functional limitations or maintenance overheads.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_3.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">On Demand Scalability</Card.Title>
              <Card.Text className="fs-6">In addition to the vertical and horizontal scalability enabled by the native micro-services architecture of the platform, SunTec Xelerate on Cloud facilitates auto-scalability to solve for any workload fluxes and to ensure consistent performance.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_4.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">Enhanced Security</Card.Title>
              <Card.Text className="fs-6">The platform applies multiple, stringent controls to safeguard customer data, including data encryption while in transit and at rest. It is GDPR-ready, is SAML2 compliant and adheres to ISO 27002, PCI-DSS and SoC-2 guidelines. In addition, the dedicated security team ensures comprehensive treatment of information security through periodic Vulnerability Assessment and Penetration Testing cycles and, thereby, enforces data confidentiality and integrity.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_5.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">High Availability</Card.Title>
              <Card.Text className="fs-6">The native open architecture of the platform supports industry-standard features such as clustering, load-balancing, fail-over and hybrid to ensure high-availability. Furthermore, SunTec Xelerate can be deployed and managed as containers using Kubernetes, and this enables native cloud features including multi-availability zone deployment for disaster recovery and product clustering with auto-scaling, all of which enable peak operational performance and integrity.Our dedicated security team gives a comprehensive treatment to information security by enforcing periodic VA and PT cycles, to ensure data confidentiality and integrity across all levels. Solution adheres to various international standards like ISO 27001 and SOC2.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_6.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">Easy Migration</Card.Title>
              <Card.Text className="fs-6">The platform&apos;s open architecture was designed to cater to the evolving needs of organizations on the path towards digital transformation and to enable a seamless transition from on-premise to cloud. SunTec Xelerate, therefore, can be deployed on public or private clouds and can switch between deployment models based on the organization&pos;s business priority and preference.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_7.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">Cost Optimization</Card.Title>
              <Card.Text className="fs-6">Deploying SunTec Xelerate on cloud, requires minimum upfront infrastructure investment and zero depreciation or renewal costs. This also reduces the bank’s capital expenditure, which helps minimize financial risk associated with enabling innovation projects facilitated by the SunTec Xelerate platform and products.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className='p-4'><Card className="sa_shadow h-100" >
            <Card.Img className="card-icon-left" src="/images/cloud_icon_8.png" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-5">Collaborative Framework</Card.Title>
              <Card.Text className="fs-6">SunTec Xelerate is a no-code platform with an open architecture and standard extensions to ensure seamless integration and interoperability. It is built to operate and collaborate effectively in multi-application, multi-cloud ecosystems.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
      
        </Row>
        </Container>
      </Container>      
<Insights tags='321'/>     
      <Footer />
    </>
  )
}

export default Cloud