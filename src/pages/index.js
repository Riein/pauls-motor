import React from 'react'

import Layout from '../components/layout'
import "../styles/layout-overide.css"

const IndexPage = () => (
  <Layout>
    <div className="section1">

      <div className="section1Header">
          <h1>Paul's Motor Inc in Vancouver, WA</h1>
          <h1>Auto Repair Done by Professionals</h1>
      </div>

      <div className="section1Body">
        <h2>Experience and Trust</h2>
        <p>Established in 1994, Paul's Motor Inc has had over 24 years of
        experience with used car sales and automotive repair. We understand
        what it takes to provide dependable auto service and repairs at a
        fair price to ensure our customers' needs are met. This has helped
        build loyalty and trust with customers who happily return to us with
        their auto repair needs over and over again.
        </p>

        <h2>Auto Repair and Maintenance</h2>
        <p>While initially specializing in Jeep Cherokees, Paul's Motor has
        expanded to repair and service all kinds of makes and models.
        Some of these brands include Volkwagen, Honda, Toyota, Kia, Ford,
        Lexus, Subaru and many more. Whether you need your brake pads
        replaced, oil changed or engine repaired, we will do our best to
        ensure your vehicle is fixed to your satisfaction.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
