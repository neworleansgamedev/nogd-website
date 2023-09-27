//Gerardo Colon
//NOGD internship
//About Page
//Last edited:9/20/2023

//classic imports
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import TitledList from '../components/TitledList'; 

// Lists
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


function AboutPage() {
  return (
    <Layout PageHeading='About' PageTitle='About Page'>
      <div className="lists-container">
        <TitledList title="Who?" list={list1} />
        <TitledList title="What?" list={list2} />
        <TitledList title="Where?" list={list3} />
      </div>
    </Layout>
  );
}

export default AboutPage;