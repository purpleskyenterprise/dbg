import Head from "next/head";

 
import Header from "@/src/components/Header/header";

import Footer from "@/src/components/Footer";
import BannerPage from "@/src/components/Banner/bannerPage";
import CompanyInfo from "@/src/components/commonComponents/companyInfo";
import AboutMission from "@/src/components/commonComponents/aboutMission";
import Advisor from "@/src/components/commonComponents/advisor";

import Image from "next/image";

export default function About() {
   const  pageText = {
        title: "Compliance and IT Excellence.",
        breadcrumb: [
            {
                link: "/",
                text: "Home"
            },
            {
                link: "#",
                text: "About Us"
            }
        ]
    }
  return (
    <>
      <Head>
        <title>Digital Business Growers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main>
      <div className="mainHeader-banner">
      <Header/>
      <BannerPage pageText={pageText} />
      </div>
    
        
      <section className="about-page-sec">
  <div className="container">
    <div className="row">
      <div className="col-md-6 img-box">
        <img src="/assests/images/innerpage/about-04.jpg" alt="" />
      </div>
      <div className="col-md-6 content-box">
        <div className="sub-title">About Us</div>
        <h2>DBG IT Solution: Your Complete Compliance & IT Solution</h2>
        <p>At DBG IT Solution, we provide a full suite of compliance and IT services designed to meet the unique needs of your business. Our team of experts is dedicated to ensuring your company stays ahead in the ever-evolving landscape of regulatory requirements and technological advancements. With a focus on tailored solutions, we help you navigate complex compliance issues, streamline IT operations, and enhance overall business performance. Trust DBG IT Solution to be your partner in achieving compliance excellence and IT efficiency.</p>
        <p>we are committed to providing an extensive range of compliance and IT services tailored to meet the specific needs of your business. Our team of seasoned professionals brings a wealth of experience and expertise to ensure that your company remains compliant with the latest regulatory standards and stays ahead in the rapidly changing technological landscape.</p>
      </div>
    </div>
  </div>
 </section>

      <CompanyInfo />


<AboutMission />


<Advisor />


<Footer/>



       
      </main>
    </>
  );
}
