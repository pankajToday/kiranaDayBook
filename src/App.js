import React from "react";
import TopNav from './components/TopNav'
import Header from './components/pages/header'
import About from './components/pages/aboutus'
import Services from './components/pages/services'
import ContactUs from './components/pages/contactus'
import Footer from  './components/footer'


function App() {
  let authorName = "Pankaj Kumar";
 
  return (
    <div className="App">
      <div id="page-top">
        <TopNav title={authorName} searchBar="false"/>
       <Header />
       <About />
       <Services />
       <ContactUs />
      <Footer />
      </div>

    
    </div>
  );
}




export default App;
