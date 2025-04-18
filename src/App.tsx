
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

//Creating first component 
function Header(){
  return  (
  <header>
    <img src={reactLogo} alt ="React logo" />
    <h1>React Essential</h1>
    <p>Fundamentals</p>
  </header>
  )

}

// Creating first component with props
function CoreConcept(props: { image: string | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }){
  return (
    <li>
      <img src={props.image} alt=""/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {

  return (
    <div>
      <Header></Header>
    <main>
      <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          <CoreConcept 
          title="Components" 
          description="The core UI building block."
          image={reactLogo}
          />
        </ul>
      </section>
      <h2>Time to get started</h2></main>
   </div>
  )
}

export default App
