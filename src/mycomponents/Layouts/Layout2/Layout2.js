import React from "react";
import "./layout2.scss";
import { Col, Row } from "react-bootstrap";
import image1 from "../../../assest/earth.png";
import vector from "../../../assest/Vector 9.png";
import image2 from '../../../assest/dice.png'
import image3 from '../../../assest/thirdtable.png'

import image4 from '../../../assest/Rectangle 406.png'

export default function Layout2() {
  const array = [
    {
      title: "International Education Bridge Program",
      description:
        "Our dedicated support guarantees a stress-free transition abroad, empowering you to focus on global education with confidence.",
      icon: image1,
    },
    {
      title: "Blockchain Protocol Program",
      description:
        "We design industry-aligned curricula in partnership with leaders, preparing you to contribute at full capacity from Day 1.",
      icon: image2,
    },
    {
      title: "Industry Experience And Training Program",
      description:
        "Gain hands-on experience and industry insights through our partnered training programs, setting you up for success.",
      icon: image3,
    },
    {
      title: "University Credit Score Program",
      description:
        "We equip students to acquire skills and earn credits simultaneously, merging learning with practical experience.",
      icon: image4,
    },
  ];

  return (
    <div className="container2">
      <h2 className="heading">Programs that Enrich Ambitions</h2>
      {array.map((item, index) => {
          return (
            <Row className="outer underline-row">
              <Col colspan={2} id="item1">
                <img src={item?.icon} alt="" />
              </Col>
              <Col colspan={6} id="item2">
              <h5>{item?.title}</h5>
              <p>{item?.description}</p>
              </Col>
              
              <Col colspan={2} id='item3'>
                <img src={vector} alt=""/>
                </Col>
                </Row>
          );
        })}
            {/* <Row className='table'>
                <Col colspan={3} className='image'>
                <img src={image1} alt=""/>
                </Col>
                <Col colspan={6} className='text'>
                <h3>
                International Education Bridge Program
                </h3>
                <p>
                Our dedicated support guarantees a stress-free transition abroad, empowering you to focus on global education with confidence. 
                </p>
                </Col>
                <Col colspan={2} className='sign'>
                <img src={vector} alt=""/>
                </Col>
            </Row> */}
    </div>
  );
}
