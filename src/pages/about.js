//Gerardo Colon
//NOGD internship
//About Page
//Last edited:9/13/2023

//classic imports
import * as React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

//lists
const list1 = [

  "We are a bunch of game developers in the Greater New Orleans",
  "area who meet on a monthly basis to network, collaborate, and share knowledge."


];

const list2 = [

  "Each month we have a rotation selection of events",
  "that help the gamedev community present on interesting topics, showcase their projects",
  "and encourage game development in the local area."
];

const list3 = [

  "Until further notice we are meeting online on the third Thursday of every month at 7:00 pm.",
  "Join our discord for more info or find us on youtube.",
  "We also host an informal Hack Night at 7:00pm every Tuesday."

];

//components and stuff
const AboutPage = () => {

  return (

    

<Layout PageHeading='About' PageTitle='About Page'>

  <div className="lists-container">
  <div className="list">
    <h2>Who?</h2>
     <ul>
      {list1.map((item, index) => (
      <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

<div className="list">
  <h2>What?</h2>
    <ul>
    {list2.map((item, index) => (
    <li key={index}>{item}</li>
    ))}
    </ul>
</div>

<div className="list">
  <h2>Where?</h2>
    <ul>
    {list3.map((item, index) => (
    <li key={index}>{item}</li>
    ))}
    </ul>
</div>
</div>

</Layout>

  )
}


export default AboutPage