// import Blogs from "./components/Blogs"
import { ContactMe } from "./components/ContactMe"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Timeline } from "./components/Timeline"
import Footer from "./components/Footer"
import CodingActivity from "./components/CodingActivity"
import StarPrompt from "./components/StarPrompt"
// import Cursor from "./components/Cursor"

const App = () => {


  return (
    <>
        <>
          <div className="main">
            <Navbar />
            <Hero />
            <Timeline />
            <Projects />
            <CodingActivity />
            <Skills />
            {/* <Blogs/> */}
            <ContactMe />
            <Footer />
            <StarPrompt/>
            {/* <Cursor/> */}
          </div>
        </>
      {/* ) */}
      {/* } */}
    </>
  )
}

export default App
