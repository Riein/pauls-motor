import React from 'react'

import Layout from '../components/layout'

const ServicesPage = () => (
  <Layout>
    <div className="section1">

      <div className="section1Header">
        <h1>Services and Repairs Offered</h1>
      </div>

      <div className="section1Body">
        <p>Our auto repair is your dealership alternative in Vancouver, WA.
          We provide services for oil changes, electrical repair, brakes,
          tires, A/C repair, air filters, batteries and maintenance.
          Additionally we repair vehicle body damage whether it is interior
          or exterior. For the full list of services, check the information
          below.
        </p>
      </div>
    </div>

    <div className="services-content">
      <a id="major"></a>
      <p></p>
      <div className="services-left">
        <div className="services-div">
          <h4 className="services-h4">General Repair</h4>
          <ul className="services-ul">
            <li>Oil, Lube and Filter</li>
            <li>Filters</li>
            <li>Wipers</li>
          </ul>
        </div>

        <div className="services-div">
          <h4 className="services-h4">Collision Repair</h4>
          <ul className="services-ul">
            <li>Front end</li>
            <li>Read end</li>
            <li>Side doors</li>
            <li>Bumper repair</li>
            <li>Virtually any angle</li>
          </ul>
        </div>

        <div className="services-div">
          <h4 className="services-h4">Engine Repair</h4>
          <ul className="services-ul">
            <li>Timing Belts</li>
            <li>Fan Belts</li>
          </ul>
        </div>

        <div className="services-div">
          <h4 className="services-h4">Tires and Undercar</h4>
          <ul className="services-ul">
            <li>Tire rotation</li>
            <li>Brakes</li>
            <li>Exhaust</li>
          </ul>
        </div>

        <div className="services-div">
          <h4 className="services-h4">Interior/Doors</h4>
          <ul className="services-ul">
            <li>Airbags</li>
            <li>Seatbelts</li>
            <li>Door windows</li>
          </ul>
        </div>

      </div>

      <div className="services-right">
        <div className="services-div">
          <h4 className="services-h4">Electrical</h4>
          <ul className="services-ul">
            <li>Batteries</li>
            <li>Starters</li>
            <li>Alternators</li>
          </ul>
        </div>

        <div className="services-div">
          <h4 className="services-h4">Heating and Cooling</h4>
          <ul className="services-ul">
            <li>Air Conditioning</li>
            <li>Water Pumps</li>
            <li>Radiators</li>
            <li>Heater</li>
          </ul>
        </div>

        <div className="services-div">
          <h4 className="services-h4">Vehicle Makes</h4>
          <ul className="services-ul">
            <li>Jeep</li>
            <li>Toyota</li>
            <li>Honda</li>
            <li>Kia</li>
            <li>Volkwagen</li>
            <li>Ford</li>
            <li>GMC</li>
            <li>Chevrolet</li>
            <li>Subaru</li>
            <li>Nissan</li>
          </ul>
        </div>

        {/*<!-- Template code
        <div class="services-div">
          <h4 class="services-h4"></h4>
          <ul class="services-ul">
            <li></li>
          </ul>
        </div>  --> */}

        </div>
      </div>
  </Layout>
)

export default ServicesPage
