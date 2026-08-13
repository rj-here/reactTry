import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
          <h1>My Summer Reads</h1>
          <p>
            I'm trying to create a basic React project. I thought of just sharing my summer reads as a starting point.
          </p>
        <div id="books">
        <ul>
          <h2>Deep Work: Rules for Focused Success in a Distracted World</h2>
          <p>Cal Newport</p>            
        </ul>
        <ul>
          <h2>Modern Friendships: How to Nurture Our Most Valued Connections</h2>
          <p>Anna Goldferb</p>
        </ul>
        <ul>
          <h2>Platonic: How the Science of Attachment Can Help You Make—And Keep—Friends</h2>
          <p>Marisa G. Franco</p>
        </ul>
        <ul>
          <h2>Stranger Things: The Dustin Experiment</h2>
          <p>J.L.D'Amato</p>
        </ul>
        <ul>
          <h2>Feel Good Productivity: How to Do More of What Matters to You</h2>
          <p>Ali Abdaal</p>
        </ul>
        </div>
      </section>
      <section id="next-steps">
        <div id="social">
          <h1>Connect with me</h1>
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <ul>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
