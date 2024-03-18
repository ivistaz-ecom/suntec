import {
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Card,
  Button,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BootstrapModal from '../components/Modal'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import CtaCall from '../components/CtaCall'
import Breadcum from '../components/Breadcum'
import Insights from '../utils/FetchInsights'
import InsightsBtn from '../utils/InsightsBtn'

function LinksExample() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const PdfLink = '/pdf/Ecosystem-Management-and-Monetization.pdf'
  const PostTitle = 'Ecosystem Management and Monetization'
  const PostDescription =
    'Embrace the open economy – adopt new business models and increase revenue sources. Become a true value aggregator through collaboration and co-innovation.'
  const PostImage = '/images/ecosystem_management_and_monetization.jpg'

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

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
        <Row>
          <Col lg={5} xs={12} sm={12} md={6}>
            <div className="b-text">
              <h1>Ecosystem Management and Monetization</h1>
              <p>
                Embrace the open economy – adopt new business models and
                increase revenue sources. Become a true value aggregator through
                collaboration and co-innovation.
              </p>
              <button onClick={handleShowModal} className="r-btn w-50">
                Read the Datasheet
              </button>
              <BootstrapModal
                show={showModal}
                handleClose={handleCloseModal}
                pdfLink={PdfLink}
                title={PostTitle}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex flex-column flex-lg-row mt-5 mb-5">
          <Col lg={6} sm={12}>
            <img src="/images/xelerate.png" height="350" className="w-100" />
          </Col>
          <Col lg={5} sm={12} className="m-2">
            <h2 className="fs-1">Why SunTec Xelerate?</h2>
            <p className="fs-5">
              SunTec&apos;s Ecosystem Management and Monetization on SunTec
              Xelerate platform enables financial services, telecom, travel and
              insurance organizations to embrace the open economy and use it to
              their advantage. It helps organizations transform from a utility
              provider to a value aggregator. Organizations can expand their
              products and services offering by collaborating with external
              partner ecosystems, providing innovative solutions, adopting new
              business models and maximizing revenue by delivering true value to
              its customers.
            </p>
            <p className="fs-5">
              SunTec&apos;s Ecosystem Management and Monetization achieves this
              through end-to-end management, monitoring, and monetization
              capabilities across the partner and the customer value chain. The
              solution is pre-packaged with powerful features that help
              organizations to leverage the true potential of the open economy.
            </p>
          </Col>
        </Row>
      </Container>
      <InsightsBtn tags="330" />
      <Container className="mb-5">
        <h1 className="fs-2 mt-5 mb-5">
          Features of SunTec&apos;s Ecosystem Management and Monetization
        </h1>
        <Row>
          <Col lg={4} md={6}>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_6.png" />
              <Card.Body className="c_body">
                <Card.Title>End-to-end Partner Management</Card.Title>
                <Card.Text>
                  API based end-to-end partner life cycle management from
                  on-boarding to financial settlement
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
              <Card.Body className="c_body">
                <Card.Title>Multi-business Models Support</Card.Title>
                <Card.Text>
                  Support for organizations in different roles – as producers,
                  distributors, co-innovators, aggregators, etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12}>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
              <Card.Body className="c_body">
                <Card.Title>Holistic Product Catalog</Card.Title>
                <Card.Text>
                  Manage third party products and services as part of the
                  centralized, holistic catalog
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={6}>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon4_3.png" />
              <Card.Body className="c_body">
                <Card.Title>Automated Revenue Settlement</Card.Title>
                <Card.Text>
                  Automated and controlled computation and settlement of revenue
                  share across the value chain
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_25.png" />
              <Card.Body className="c_body">
                <Card.Title>Experience Design Capabilities</Card.Title>
                <Card.Text>
                  Visualize the entire customer buying experience. Enable
                  product managers to create innovative offers using products
                  from a partner ecosystem
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12}>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_22.png" />
              <Card.Body className="c_body">
                <Card.Title>Monitoring Capabilities</Card.Title>
                <Card.Text>
                  Track and analyse pattern, volume and frequency of usage.
                  Real-time insights on revenue, cost and profitability across
                  the partner ecosystem
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="gra_color pt-3" fluid style={{ height: 45 + 'em' }}>
        <Row className="d-flex flex-lg-row flex-column">
          <Col className="center">
            <img
              src="/images/xelerate.png"
              height="300"
              width="400"
              className="w-100 h-auto mb-1"
            />
          </Col>
          <Col>
            <h3 className="text-white fs-4">
              &quot;Deliver value to customers with comprehensive partner
              management capabilities.&quot;
            </h3>
            <p className="text-white fs-6">
              Empower your organization with comprehensive partner management
              capabilities
            </p>
            <ul className="mt-5">
              <li className="text-white fs-6">
                <strong>Co-create solutions:</strong> Create an ecosystem for
                various players, thereby addressing the customer&apos;s
                lifecycle needs, as well as ensuring seamless revenue
                management.
              </li>
              <li className="text-white fs-6">
                <strong>
                  Comprehensive partner management in the API economy:
                </strong>{' '}
                From price tariff and contract management, to revenue sharing
                computation and settlement, get end-to-end partner management
                capabilities.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <h1 className="fs-2 mt-5 mb-5">Benefits</h1>
        <Row>
          <Col sm={12} lg={4} xs={12} md={6}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_1.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Build a partner ecosystem to offer complementary products to
                  customers and own the customer value chain
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} xs={12} md={6}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_2.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Co-innovate for customer-centric offers ensuring customer
                  retention and growth
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} xs={12} md={12}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_3.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Add new business models for additional sources of revenue
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12} lg={4} xs={12} md={6}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_4.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Manage external products within your enterprise product
                  catalog
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} xs={12} md={6}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_5.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Leverage insights to cross-sell innovative offers to customers
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} xs={12} md={12}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_6.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Monetize APIs which are accessed by third party partners
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={4} xs={12} md={12}>
            <Card className="c_shadow" style={{ height: 16 + 'em' }}>
              <Card.Img className="card-icon-left" src="/images/icon_4_7.png" />
              <Card.Body className="c_body">
                <Card.Text>
                  Customized plans for API monetization based on partner
                  profiling
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <CtaCall
        text="Rounding up the pulse of the industry as we go along."
        btn="Be up to date now!"
        url="/insights"
      />
      <Insights tags="330" />
      <Footer />
    </>
  )
}

export default LinksExample
