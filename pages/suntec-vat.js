import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';

function productRationalization() {
    const router = useRouter()  
    const [showModal, setShowModal] = useState(false);
    const PdfLink = 'pdf/VAT-Solution-Overview_30-Oct_v1-1.pdf';
    const PostTitle = "SunTec VAT";
    const PostDescription = "Complying with Value Added Tax (VAT) in the GCC with SunTec VAT Solution";
    const PostImage = '/images/SunTec-VAT-Solution.jpg';  

    const handleShowModal = () => {
        setShowModal(true);
    };
    
      const handleCloseModal = () => {
        setShowModal(false);
    };  


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
<Breadcum PostTitle={PostTitle} />
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
          }}>
<Row className='mt-5'>
<Col className='d-flex align-content-center '>
<div className="square-dark mt-5">
<div class="lin-dark"></div>
<div className="square-text-dark ">
<h1 className="fs-1">SunTec VAT</h1>
<p className="fs-5">Complying with Value Added Tax (VAT) in the GCC with SunTec VAT Solution</p>
</div>
<div class="lin-dark"></div>
</div>
</Col> 

</Row>      

</Container>      
          <Container className="mt-5 mb-5">
              <h2>What is VAT and What Does it Entail for Banks and Financial Institutions?</h2>
              <p className="fs-5">VAT (Value-Added Tax) is essentially a consumption tax levied at every stage of the supply chain (added on the value of goods and services) – from raw materials to the end product. It serves as a source of revenue for governments.</p>
              <p className="fs-5">Six GCC countries signed the VAT Framework Agreement in 2016 as part of which the tax is applicable to all goods and services that are bought and sold for use or consumption in the GCC.</p>
              <p className="fs-5">This makes it imperative for banks and financial institutions to have a comprehensive and scalable VAT solution to meet their specific needs. The VAT solution must not just comply with all indirect taxation requirements but also offer scalability to quickly adapt to the constantly evolving regulatory changes. Banks must ensure that all the aspects of Indirect Taxes such as Output Tax, Input Tax, and Regulatory Reporting are taken care of.</p>
              <p className="fs-5">Learn more about our <Link href="/enterprise-indirect-taxation-management/">Enterprise Indirect Taxation Management</Link> product</p>
              
          </Container>
<Container className="p-3  pe-banner" fluid style={{ 
backgroundImage: `url("/images/suntec-vat.jpg")` 
}}>
<Row >
<Col className='d-lg-flex d-none'>
</Col>
<Col >
<div className="pe-text " >
<h1 className=''>Understanding the Complexity of Deploying a VAT Solution</h1>
                          <p className="fs-5">A VAT compliance solution comes with its own complexity. Designing and maintaining a future-proof VAT compliance system and its impact on the entire process cannot be underemphasized. There is an added pressure to comply with constantly changing regulations.</p>
                          <p className="fs-5">Failure to comply would lead to severe penalties and reputational risk for banks. It is, therefore, imperative to efficiently integrate the VAT solution into the bank’s existing processes and technology to ensure VAT compliance.</p>
</div>
</Col> 
</Row>           
</Container>
<Container fluid className='wbg-gy'>
<Container className="mt-0 pt-5">
          <h2>SunTec's GCC VAT Compliance Solution to Aid Banks</h2>
          <p className="fs-5">SunTec GCC VAT Solution is deployed on its flagship platform SunTec Xelerate, which enables financial services organizations and banks to smoothly comply with VAT regulations. Pre-packaged with over 200 features, our out-of-the-box VAT solution has been designed to react seamlessly to changes in VAT law, policies, and practices. Over 20 banks across the GCC have partnered with us to comply with VAT regulations. Uniquely designed to be an over-the-top (OTT) solution over the bank’s core solution, our GCC VAT Solution can easily integrate with the bank’s existing technology landscape. It has been designed to de-clutter core engines, bring out the indirect taxation logic and ensure a smooth journey towards GCC VAT compliance for banks. SunTec GCC VAT Solution a market leader in indirect taxation, is primed to ensure greater efficiency and transparency in tax compliance.</p>    
      </Container>
          <Container className="mt-5">      
        <h2 className='mb-5'>SunTec's GCC VAT Compliance Solution to Aid Banks</h2>
              
        <Row >
          <Col xm={12} sm={12}  lg={4} className='sm{4}'>
<div claclassNamess="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/centralize.svg" className="card-img-top n_icon" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">A single source of truth for VAT compliance and audit</h5>
    
  </div>
</div>
</Col>
<Col sm={12} lg={4} className='sm{4}'>
<div className="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/agile.svg" className="card-img-top n_icon" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">Rapid go-live</h5>
    
  </div>
</div>
</Col>
<Col sm={12} lg={4} className='sm{4}'>
<div className="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/stability.svg" className="card-img-top n_icon" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">Analytical capability</h5>
  </div>
</div>
</Col>
</Row>      
</Container>
<CtaCall text='' url={PdfLink} btn="Download our Solution Overview to learn more" />
</Container>
<Container>
      <Row className="row m-lg-5 position-relative p-0">
          <Col sm={12} lg={6} className='p-0'>
            <img className="img-fluid "
              src="images/vat-bottom-banner.jpg"
            />
          </Col>
          <Col lg={7} className='d-lg-flex d-none flex-column justify-content-center position-absolute top-50 bottom-50 end-0 ' >
            <Card className=' shadow rounded-0 p-4 '>
              <h3>VAT Deployment 101 for GCC Banks and Financial Services Firms</h3>

              
                <p className="fs-5">Given the intricacies of deploying a VAT solution, here is a quick guide to help you decide whether to buy a VAT solution or build one from ground up. Understand the difference between a centralized and decentralized implementation approach and discover the key aspects when embarking on a VAT implementation project to make your VAT adoption a success.</p>

                
              <Link href="/ebooks/e-invoicing-ebook/" target='_blank' className='rounded-1 expand-btn w-50'>Download the eBook Now</Link>
            </Card>
          </Col>
          <Col className='d-lg-none d-flex flex-column justify-content-center p-0' >
            <Card className='c_shadow rounded-0 p-4 '>
              <h3>VAT Deployment 101 for GCC Banks and Financial Services Firms</h3>

              
                <p className="fs-5">Given the intricacies of deploying a VAT solution, here is a quick guide to help you decide whether to buy a VAT solution or build one from ground up. Understand the difference between a centralized and decentralized implementation approach and discover the key aspects when embarking on a VAT implementation project to make your VAT adoption a success.</p>

              
              <Link href="/ebooks/e-invoicing-ebook/" target='_blank' className='rounded-1 expand-btn w-100'>Download the eBook Now</Link>
            </Card>
          </Col>
        </Row>
      </Container>
<CtaCall text='Be up to speed in a changing market with SunTec Xelerate by your side.' url='/request-a-demo/' btn="Accelerate with SunTec Xelerate!" />          
      <Footer/>
    </>
  )
}

export default productRationalization