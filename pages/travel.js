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
  const PostTitle = "Pricing, Product & Billing Solutions for Travel";
  const PostDescription = "Capitalize on the benefits of SunTec Xelerate’s next-generation revenue management system. Build on top of your existing infrastructure, take your business to the next level and create multiple monetization opportunities on a single platform.";
  const PostImage = "/images/travel_banner.jpeg"; 


  return (
<>
<Header/>
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
<Col lg={5} xs={12} sm={12} md={6} className="bg-purple ms-lg-5 p-4 text-white">
<div>
<h1>Improving Revenue Management and Share of Wallet</h1>
<p>Capitalize on the benefits of SunTec Xelerate’s next-generation revenue management system. Build on top of your existing infrastructure, take your business to the next level and create multiple monetization opportunities on a single platform.</p>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<h1 className="fs-2 mt-5 mb-5">Travel Management Companies Are Struggling to Differentiate</h1>
<p className="fs-5">Demand for Corporate travel is growing but the competition is getting equally fierce. Barriers to entry are almost non-existent resulting in intense competition between suppliers and players. This directly impacts pricing and transaction fees creating consistent pressure on margins.</p>
<p className="fs-5">The sector continues to witness disruption across, forcing many established players to look at technology as a differentiator to connect better with the customer and stay ahead of its competitors. But it is not an easy decision, as most players that have been in the industry for a while have accumulated multiple legacy systems that are not integrated. More importantly, these systems do not have the agility and/or flexibility required for the next level of customer centric digital transformation that the Travel Management Companies (TMCs) need so badly today. A complete overhaul of the revenue management system is the need of the hour for the TMCs.</p>


<h2 className="fs-2 mt-5 mb-3">The Challenges</h2>
<hr className='line-21'/>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-lg-row justify-content-center border-0 bg-transparent align-content-center align-items-center c-height">
      <Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon__moun.png"/>
      <Card.Body>
        <Card.Title>Declining Margins</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-lg-row justify-content-center border-0 bg-transparent align-content-center align-items-center c-height">
      <Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_22.png"/>
      
      <Card.Body>
        <Card.Title>Slow Time to Market</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-lg-row justify-content-center border-0 bg-transparent align-content-center align-items-center c-height">
      <Card.Img className="card-icon-left p-2 p-lg-3" src="images/filter.png"/>
      <Card.Body>
        <Card.Title>Increased Operational Overheads</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-lg-row justify-content-center border-0 bg-transparent align-content-center align-items-center c-height">
      <Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_24.png"/>
      <Card.Body>
        <Card.Title>Manual Processes</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-lg-row justify-content-center align-content-center align-items-center c-height">
      <Card.Img  className="card-icon-left p-2 p-lg-3" src="images/icon_25.png"/>
      <Card.Body>
        <Card.Title>Missing Travel Ecosystem</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-lg-row justify-content-cente border-0 bg-transparent align-content-center align-items-center c-height">
      <Card.Img className="card-icon-left p-2 p-lg-3" src="images/icon_26.png"/>
      <Card.Body>
        <Card.Title>Discrete Systems Across Different Countries</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>


</Container>
<Container lg={5} md={6} sm={12} className="gra_color d-flex flex-lg-row border-0 bg-transparent flex-column justify-content-center align-items-center align-content-center p-5" fluid style={{height:45 + 'em'}}>
<Row className="d-flex flex-lg-row flex-column">
  <Col className="mt-5 d-flex flex-column justify-content-center align-items-center">
  <Col className="d-flex flex-column justify-content-center">
  <Image src="/images/xelerate.png" 
  className='w-100 h-auto mb-1'
  height="300"
  width="400"
    />
  </Col>
  </Col>
  <Col lg={5} xs={12} sm={12} md={6} className="d-flex flex-column justify-content-center">
  <h3 className="text-white mt-5 fs-3">How Can SunTec Help Unlock Value?</h3>
  <ul className="mt-5 ">
   <li className="text-white fs-6"><strong>Build new capabilities into your existing infrastructure:</strong> Transform, optimize and grow your Travel Management Company with next-generation revenue management capability .</li> 
   <li className="text-white fs-6"><strong>Get a unified platform:</strong> Monetize all your service offerings in a hassle-free manner through a single platform.</li>
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
        <Card.Title>Create Win-win Deals with Deal Management Features</Card.Title>
        <Card.Text>
        In complex business scenarios, where the deals involve multiple parameters, creating the right deal which stands out as a win-win for both you and the client is extremely important.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Manage Contracts, Calculate Fees, Expense and Revenue Shares</Card.Title>
        <Card.Text>
        Handle customer contracts with ease and quickly launch innovative pricing models.
Move towards commitment-based revenue sharing.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Automate Your Client Billing; Make it Faster and Error-free</Card.Title>
        <Card.Text>
        Create invoice grouping based on customer preferences and support for bulk invoice generation and
pattern-based selective invoice review to ensure quick revenue realization.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Global Platform Across Markets</Card.Title>
        <Card.Text>
        Support complex market requirements and provide a single global platform for pricing and billing needs across markets.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Personalized Dashboards Powered by Analytics</Card.Title>
        <Card.Text>
        Create customer persona-based dashboard and analytics that provides detailed insights on client usage patterns.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Relationship-Based Pricing and Value Management</Card.Title>
        <Card.Text>
        Analyze customer data in real time and provide them with context-specific offers at the right time and location.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">130+ leading organizations across 45+ countries use SunTec’s Xelerate to deliver value.</h1>
<Button className="b-btn">See SunTec Xelerate in action</Button>
</Container>

<Insights tags='323'/>

<Footer/>
</>


  );
}

export default LinksExample;