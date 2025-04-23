import { useState } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { DynamicData } from "./DynamicData";
import {content} from "./data/content"
import Footer from "./Footer";

const sections = ["About Me", "Work Experience", "Education", "Skills", "Projects"];
function App() {
  const [selected , setSelected]= useState("About Me");
  
  return (
    <div className="min-h-screen flex flex-col text-blue-800">
      <Header/>
      <Menu sections={sections} selected={selected} setSelected={setSelected} />
      <DynamicData content={content} selected={selected} />
       <Footer /> 
    </div>

    
  )
}

export default App
