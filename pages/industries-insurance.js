import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
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


function LinksExample() {


  const router = useRouter()  
  const PdfLink = '/pdf/Relationship-based-Pricing-Management.pdf';
  const PostTitle = "Insurance";
  const PostDescription = "A low risk approach to identify and mitigate revenue leakages, rationalize products, connect with external partner ecosystems and present highly contextual offers.";
  const PostImage = "/images/insurance_banner.jpeg"; 

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
      backgroundImage: `url(${PostImage})` 
    }}>
<Row>
<Col lg={5} xs={12} sm={12} md={6} className="bg-purple text-white ms-lg-4 p-4">
<div>
<h1>Insurance</h1>
<p>A low risk approach to identify and mitigate revenue leakages, rationalize products, connect with external partner ecosystems and present highly contextual offers.</p>
</div>
</Col> 

</Row>
</Container>
<Container>
<h1 className="fs-2 mt-5 mb-5">Focus on Operational Efficiency and Personalization</h1>
<p className="fs-5">The insurance sector is going through an unprecedented shift with rising customer expectations, increasing regulatory requirements and new competition from fintech startups. Insurers fully understand that digital transformation is critical to improving both operational efficiency and the customer experience. Organizations have initiated multiple steps to modernize their back and front offices, but the pace of progress is yet to pick up. This is partially the case because of burdensome legacy systems that insurers are finding hard to navigate, before they are able to address the real customer experience issue. At the same time, they need to find ways to partner with emerging fintechs to increase the extent of personalization they offer to their customers. It is not an easy path, but insurance companies have no choice. The only way to stay relevant and competitive is to move up the value chain – give up the traditional product-based approach and transition to a customer focused organization.</p>



<h2 className="fs-2 mt-5 mb-3">The Challenges</h2>
<hr className="line-21"/>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-lg-row bg-transparent border-0 flex-column justify-content-center align-items-center align-content-center">
      <Card.Img className="card-icon-left p-2 p-lg-3"  src="images/icon_2_1.png"/>
      <Card.Body>
        <Card.Title>Legacy System Transformation</Card.Title>
        <Card.Text>
        Updating technology without disrupting daily activities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-lg-row bg-transparent border-0 flex-column justify-content-center align-items-center align-content-center">
<Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_2_2.png"/>
      <Card.Body>
        <Card.Title>Expanding Competitive Landscape</Card.Title>
        <Card.Text>
        Traditional insurance areas are being disrupted by FinTechs and other players
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-lg-row bg-transparent border-0 flex-column justify-content-center align-items-center align-content-center">
<Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_2_3.png"/>
      <Card.Body>
        <Card.Title>Regulatory Compliance</Card.Title>
        <Card.Text>
        Handling quick changes, transparency and easy audit
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-lg-row bg-transparent border-0 flex-column justify-content-center align-items-center align-content-center">
<Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_2_4.png"/>
      <Card.Body>
        <Card.Title>Digital Savvy Customer</Card.Title>
        <Card.Text>
        Needs faster processes, more options and a better experience to attract the discerning customer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-lg-row bg-transparent border-0 flex-column justify-content-center align-items-center align-content-center">
<Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_2_5.png"/>
      <Card.Body>
        <Card.Title>Operational Efficiency</Card.Title>
        <Card.Text>
        Process automation, new RegTech capabilities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-lg-row bg-transparent border-0 flex-column justify-content-center align-items-center align-content-center">
<Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_2_6.png"/>
      <Card.Body>
        <Card.Title>Multi-party Approval Process</Card.Title>
        <Card.Text>
        Digital payments workflow to accommodate multiparty approval processes
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>


</Container>
<Container className="gra_color d-flex flex-lg-row flex-column justify-content-center align-items-center align-content-center p-5" fluid style={{height:42 + 'em'}}>
<Row className="d-flex flex-lg-row flex-column">
  <Col className="mt-5 d-flex flex-column justify-content-center align-items-center">
  <Col className=" d-flex flex-column justify-content-center">
  <Image src="/images/xelerate.png" 
  height="300"
  width="400"
  className='w-100 h-auto  mt-5'
    />
  </Col>
  </Col>
  <Col className="d-flex flex-column justify-content-center">
  <h3 className="text-white fs-2 mt-5">How Can SunTec Help Unlock Value?</h3>
  <ul className="mt-5">
   <li className="text-white fs-6"><strong>Build new capabilities into your existing infrastructure:</strong> Transform, optimize and grow your Travel Management Company with next-generation revenue management capability .</li> 
   <li className="text-white fs-6" ><strong>Get a unified platform:</strong> Monetize all your service offerings in a hassle-free manner through a single platform.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">SunTec Offerings</h1>
<p className="fs-5">See how we combine components of SunTec Xelerate to create specific solutions for digital transformation, revenue management, customer experience orchestration and partner ecosystem management.</p>
<Row>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Dynamic Offer Bundling</Card.Title>
        <Card.Text>
        Enable dynamic offers to customers with pick and choose flexibility treating every customer individually with different risk covers and benefits.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Partner Management</Card.Title>
        <Card.Text>
        Partner management for distributors, data providers, agencies and other players. Handles onboarding to actual revenue share computations and settlement.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Billing Consolidation</Card.Title>
        <Card.Text>
        SunTec Xelerate facilitates consolidated bills for partners covering multiple products and services (even if their charging / utilization is done using a different platform).
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col lg={4}>
<Card className="c_shadow"  style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Complex Deal Management</Card.Title>
        <Card.Text>
        Orchestrate complex deals with an E2E workflow to streamline processes, acting as a single source of truth and bringing in operational efficiencies.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col className="d-flex d-lg-block d-none"></Col>
</Row>

</Container>
<CtaCall text='Drive organizational success with personalization and improve customer experience journeys.' btn='Tell me more' url='/whitepapers/personalization-key-to-the-success-of-insurance-companies-in-the-new-world/'/>
<Insights tags='324'/>
<Footer/>
</>


  );
}

export default LinksExample;