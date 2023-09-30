import './index.css'

const NavBar = ({score, topScore, gameEnd}) => (
  <nav className="nav-container">
    <div className="first-nav">
      <img
        className="image-logo"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1 className="title-heading">Emoji Game</h1>
    </div>
    {gameEnd === false && (
      <div className="second-nav">
        <p className="nav-para">Score: {score}</p>
        <p className="nav-para">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
)
export default NavBar
