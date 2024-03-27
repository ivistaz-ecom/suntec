import {
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Card,
  Button,
  Offcanvas,
  ListGroup,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import configData from '../config.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import CtaCall from '../components/CtaCall'
import Breadcum from '../components/Breadcum'
import Insights from '../utils/FetchInsights'
import InsightsBtn from '../utils/InsightsBtn'
import CardBox from '../utils/Card'

function Platforms() {
  const router = useRouter()
  const PdfLink = ''
  const PostTitle = 'Solutions'
  const PostDescription =
    'Build relationships, enhance efficiency, and ensure compliance'
  const PostImage = '/images/Solutions-overview.jpg'

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

      <Container
        className="p-3 b-banner"
        fluid
        style={{
          backgroundImage: `url(${PostImage})`,
        }}
      >
        <Row className='mt-5'>
          <Col xm={12} sm={4}>
            <div className="square-dark mt-5">
              <div class="lin-dark"></div>
              <div className="square-text-dark ">
                <h1 className="fs-1">{PostTitle}</h1>
                <p className="fs-5 ">{PostDescription}</p>
              </div>
              <div class="lin-dark"></div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <p className="fs-5">
          SunTec solutions are context driven based on the requirements of our
          customers. These could be driven by region, regulation environment,
          customer demand or other such factors. Delivered on-premise, on
          private cloud and as SaaS, our solutions are designed to fulfil every
          customer need.
        </p>
      </Container>
      <hr />
      <Container className="mt-5">
        <h2>Our Solutions</h2>
        <Row className="mt-5">
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 38 + 'em'}}
            >
              <Card.Body className="c_body g-5">
                <Card.Title className="mb-4 fs-3 px-3">Account Analysis Solution</Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                To charge or not to charge is the question that looms large over most
                 commercial banking executives. Given that customers today expect 
                 hyper-personalized services, transparency, and high-speed on-demand
                  services, billing automation becomes crucial to ensure customer
                   satisfaction, profitability, and stability.
                </Card.Text>
              </Card.Body>
              <Link href="/account-analysis-solution/" target='_blank' className="expand-btn w-50 ">
                Learn more
              </Link>
            </Card>
          </Col>
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow "
              style={{ height: 38 + 'em'}}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                Banking-as-a-Service Solution
                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                Alibaba and Amazon use the same horizontal approach in the B2B 
                space, where curated ecosystems from different organizations, 
                with different offerings, meet multiple client needs and offer
                 them more than a channel to sell their products.


                </Card.Text>
              </Card.Body>
              <Link href="/suntec-banking-as-a-service-solution/" target='_blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 38+ 'em' }}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">e-Invoicing Solution</Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                Access our e-Book to get started with e-invoicing. In this eBook,
                 we provide guidance to financial institutions in the KSA about the nuances 
                 of e-invoicing, how to ensure a smooth integration of VAT and e-invoicing 
                 systems, and considerations for deploying a robust e-invoicing solution
                  with the right partner to get you ready in time.
                </Card.Text>
              </Card.Body>
              <Link href="/suntec-e-invoicing/" target='_blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 50 + 'em'}}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                ESG Solutions
                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                Banks can leverage SunTec’s ESG Solution to improve their customers’ social
                 impact, including employee wellbeing and customer satisfaction. 
                 This will not only assess business influence on society but will also encourage
                  companies to enhance their practices. By enabling donations to social causes,
                   banks offers customers the chance to contribute financially to charities,
                    with tax benefits and global reach. Furthermore, with SunTec’s ESG Solution, 
                    banks can develop financial inclusion products, extending services to
                     those in need. This approach highlights the importance of social 
                     indicators in ESG efforts, empowering banks to make meaningful societal contributions.
                </Card.Text>
              </Card.Body>
              <Link href="/accelerate-your-banks-progress-on-its-esg-journey-with-the-suntec-esg-solution/"target='_blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 50 + 'em'}}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                Packages and Bundles
                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                To drive customer loyalty, banks must counter the fragmentation of services 
                with highly customized offers built on deep analysis of customer insights.
                 They must bundle offers such that they resonate with the customer’s
                  context and are perceived as attractive and valuable. The ability to 
                  personalize, coupled with agility, is imperative to growing the customer graph.
                </Card.Text>
              </Card.Body>
              <Link href="/packages-and-bundles/" target='-blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 50 + 'em' }}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                Payments and Cash Management
                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                  
                In the evolving landscape of global business, banks have a critical 
                opportunity to become strategic enablers in corporate cash management. 
                By providing treasury management services that offer a centralized, 
                real-time view of cash flows and transactions, banks can not only 
                facilitate better cash flow forecasting and matching but also
                 enhance their role in transforming corporate cash management for 
                 businesses expanding globally.

                </Card.Text>
              </Card.Body>
              <Link href="/payments-and-cash-management/" target='-blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 38 + 'em'}}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                Personalization

                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                Our Personalization Solutions, powered by our flagship platform 
                Xelerate, empower organizations to dynamically tailor their offerings 
                based on the customer journey and overall relationship, to solve 
                each customer’s unique needs.
                </Card.Text>
              </Card.Body>
              <Link href="/personalization/" target='-blank' className="expand-btn w-50 ">
                Learn more
              </Link>
            </Card>
          </Col>
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 38 + 'em',  }}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                Product Rationalization
                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                Our Product Rationalization Solution on our proprietary platform 
                Xelerate, enables banks to rationalize their product and service 
                offerings using a centralized product catalog, while balancing 
                agility and stability. It facilitates development of highly 
                differentiated offerings based on context and without adding new products.

                </Card.Text>
              </Card.Body>
              <Link href="/product-rationalization/" target='-blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
          <Col xm={12} sm={4}>
            <Card
              className="rounded-0 shadow"
              style={{ height: 38 + 'em' }}
            >
              <Card.Body className="c_body">
                <Card.Title className="mb-4 fs-3 px-3">
                VAT for GCC
                </Card.Title>
                <hr className="line-20 m-3" />
                <Card.Text className="fs-5 px-3">
                Our GCC VAT Solution, deployed on our flagship platform Xelerate,
                 enables financial services organizations and banks to smoothly 
                 comply with VAT regulations. Pre-packaged with over 200 features, 
                 our out-of-the box VAT solution has been designed to react seamlessly
                  to changes in VAT law, policies, and practices.
                </Card.Text>
              </Card.Body>
              <Link href="/suntec-vat/" target='-blank' className="expand-btn w-50">
                Learn more
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Platforms
