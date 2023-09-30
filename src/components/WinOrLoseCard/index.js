import './index.css'

const WinOrLoseCard = ({score, playButtonClicked, emojisList}) => {
  const isWin = score === emojisList.length

  const winningCard = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const title = isWin ? 'You Won' : 'You Lose'
  const titleNameScore = isWin ? 'Best Score' : 'Score'

  return (
    <div className="loss-container">
      <div className="small-containers">
        <img
          className="loss-image small-image"
          src={winningCard}
          alt="win or lose"
        />
        <h1 className="lose-heading">{title}</h1>
        <p className="loss-score">{titleNameScore}</p>
        <p className="span">
          {score}/{emojisList.length}
        </p>
        <button
          type="button"
          className="play-button"
          onClick={playButtonClicked}
        >
          Play Again
        </button>
      </div>
      <div>
        <img
          className="loss-image medium-image"
          src={winningCard}
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
