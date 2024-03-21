import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

function LinksExample() {
  return (
<>
<Link href="/request-a-demo" className="demo">Request a Demo</Link>
<Container className="wbg-black p-3 mt-4" fluid>
<Row>
<Col sm={6} lg={3} xs={6} md={6}>
<h2 className="text-white fs-5">Products</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/enterprise-product-management">Enterprise Product Management</Link></li>    
<li><Link href="/dynamic-offer-management">Dynamic Offer Management</Link></li>    
<li><Link href="/deal-management">Deal Management</Link></li>    
<li><Link href="/relationship-based-pricing-management">Relationship-Based Pricing Management</Link></li>    
<li><Link href="/enterprise-billing-and-statements-management">Enterprise Billing and Statements Management</Link></li>    
<li><Link href="/ecosystem-management-and-monetization">Ecosystem Management and Monetisation</Link></li>    
<li><Link href="/benefits-and-loyalty-management">Benefits and Loyalty Management</Link></li>
<li><Link href="/enterprise-indirect-taxation-management">Enterprise Indirect Taxation Management</Link></li>    

</ul>
</Col>
<Col sm={6} lg={2} xs={6} md={6}>
<h2 className="text-white fs-5">Industries</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/financial-services">Financial Services</Link></li>
<li><Link href="/industries-insurance">Insurance</Link></li>
<li><Link href="/telecom">Telecom</Link></li>
<li><Link href="/travel">Travel</Link></li>
</ul>
</Col>
<Col sm={6} lg={3} md={6} xs={6}>
<h2 className="text-white fs-5">Solutions</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/personalization">Personalization</Link></li>
<li><Link href="/suntec-banking-as-a-service-solution">Banking-as-a-Service</Link></li>
<li><Link href="/product-rationalization">Product Rationalization</Link></li>
<li><Link href="/suntec-vat">VAT for GCC</Link></li>
<li><Link href="/suntec-negative-interest-management">Negative Interest Management</Link></li>
<li><Link href="/invoicing-solution-for-swedish-banks">Invoicing Solution for Swedish Banks</Link></li>
<li><Link href="/suntec-e-invoicing">e-Invoicing Solution for KSA</Link></li>
<li><Link href="/credit-card-solutions">Credit Card Solution</Link></li>
<li><Link href="/accelerate-your-banks-progress-on-its-esg-journey-with-the-suntec-esg-solution">ESG Solution</Link></li>
<li><Link href="/personalization">Payments and Cash Management</Link></li>
<li><Link href="/personalization">Packages and Bundles</Link></li>
              
</ul>
</Col>
<Col sm={6} lg={2} xs={6} md={6}>
<h2 className="text-white fs-5">Insights</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/articles">Articles</Link></li>
<li><Link href="/blogs">Blogs</Link></li>
<li><Link href="/case-studies">Case Studies</Link></li>
<li><Link href="/datasheets">Datasheets</Link></li>
<li><Link href="/ebooks">eBooks</Link></li>
<li><Link href="/podcasts">Podcasts</Link></li>
<li><Link href="/point-of-view">Point of View</Link></li>
<li><Link href="/reports">Reports</Link></li>
<li><Link href="/videos">Videos</Link></li>
<li><Link href="/whitepapers">Whitepapers</Link></li>
<li><Link href="/webinars">Webinars</Link></li>
</ul>
</Col>
<Col sm={6} lg={2} xs={6} md={6}>
<h2 className="text-white fs-5">About</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/company">Company</Link></li>
<li><Link href="/contact-us">Contact Us</Link></li>
<li><Link href="/events">Events</Link></li>
<li><Link href="/career">Careers</Link></li>
<li><Link href="/blogs/suntecs-strategic-response-to-covid-19">Covid Response</Link></li>
<li><Link href="/corporate-social-responsibility">CSR</Link></li>
<li><Link href="/hr-initiative">HR Initiative</Link></li>
<li><Link href="/news-room">Newsroom</Link></li>
<li><Link href="/partners">Partners</Link></li>
<li><Link href="/notices">Notices</Link></li>
<li><Link href="/sitemap">Sitemap</Link></li>
<li><Link href="/privacypolicy">Privacy Policy</Link></li>
</ul>
</Col>

<Col lg={3} sm={6} xs={6} className='d-lg-none d-xl-none'>
<h2 className="text-white fs-5">Platforms</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/suntec-xelerate">Xelerate</Link></li>
<li><Link href="/suntec-cloud">Cloud</Link></li>
<li><Link href="/suntec-saas">Saas</Link></li>
</ul>
</Col>          
<Col lg={3} sm={12} xs={12}>
<h2 className="text-white fs-5">Contact Info</h2>
<hr className="border"/>
<p className="text-white">info@suntecgroup.com</p>
</Col>          
<Col sm={2} className=' d-lg-block d-xl-block'></Col>
<Col sm={3} className=' d-lg-block d-sm-none d-md-none d-xs-none d-none'>
<h2 className="text-white fs-5">Platforms</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/suntec-xelerate">Xelerate</Link></li>
<li><Link href="/suntec-cloud">Cloud</Link></li>
<li><Link href="/suntec-saas">Saas</Link></li>
</ul>
</Col>
            
</Row>

</Container>
<Container className="wbg-dark text-white middle " fluid style={{height:5 +'em'}}>
<Row>
<Col className="center fs-5 fw-bold d-flex justify-content-end">Follow us</Col>  
<Col>
<img src="/images/f_icon_link.svg"/>
<img src="/images/f_icon_twitter.svg"/>
<img src="/images/f_icon_you.svg"/>
</Col>  
</Row>
</Container>
<Container className="wbg-black p-3" fluid>
<p className="text-white">All Rights Reserved. © 2023 SunTec Business Solutions.</p>
<p className="text-white">SunTec® and Xelerate® are registered trademarks of SunTec Business Solutions.</p>
</Container>
</>
  );
}

export default LinksExample;