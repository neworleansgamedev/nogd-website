//Gerardo Colon
//NOGD internship
//About Page
//Last edited:9/6/2023

//classic imports
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


//const stuff
const AboutPage = () => {
  
  return (

    <Layout PageHeading='Who, What, Where?' PageTitle='About Page'>
      We are a bunch of game developers in the Greater New Orleans area who meet on a monthly basis to network, collaborate, and share knowledge.

      Each month we have a rotation selection of events that help the gamedev community present on interesting topics, showcase their projects, and encourage game development in the local area.

      Until further notice we are meeting online on the third Thursday of every month at 7:00 pm. Join our discord for more info or find us on youtube. We also host an informal Hack Night at 7:00pm every Tuesday.
    </Layout>

  )
}

//exporting 
export default AboutPage