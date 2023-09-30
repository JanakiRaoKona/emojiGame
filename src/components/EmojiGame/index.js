import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

// Write your code here.
class EmojiGame extends Component {
  state = {
    randomEmojiList: emojisList,
    clickedEmojisList: [],
    score: 0,
    gameEnd: false,
    topScore: 0,
  }

  clickedEmoji = id => {
    this.setState({randomEmojiList: emojisList.sort(() => Math.random() - 0.5)})
    const {clickedEmojisList, score} = this.state
    const gameCheck = clickedEmojisList.includes(id)
    if (gameCheck === false) {
      this.setState(prevState => ({score: prevState.score + 1}))
    }
    if (gameCheck === true) {
      const {gameEnd} = this.state
      this.setState({gameEnd: !gameEnd})
    }
    if (score === 11) {
      const {gameEnd} = this.state
      this.setState({gameEnd: !gameEnd})
    }

    this.setState(previousState => ({
      clickedEmojisList: [...previousState.clickedEmojisList, id],
    }))
  }

  gameStarted = () => {
    const {randomEmojiList} = this.state
    return (
      <>
        <ul className="ul-list">
          {randomEmojiList.map(eachItem => (
            <EmojiCard
              emojiItem={eachItem}
              key={eachItem.id}
              clickedEmoji={this.clickedEmoji}
            />
          ))}
        </ul>
      </>
    )
  }

  playButtonClicked = () => {
    const {gameEnd, score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    if (score === 12) {
      this.setState({gameEnd: !gameEnd, score: 0, clickedEmojisList: []})
    }
    this.setState({gameEnd: !gameEnd, score: 0, clickedEmojisList: []})
  }

  render() {
    const {score, gameEnd, topScore} = this.state

    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} gameEnd={gameEnd} />
        {gameEnd === false ? (
          this.gameStarted()
        ) : (
          <WinOrLoseCard
            score={score}
            playButtonClicked={this.playButtonClicked}
            emojisList={emojisList}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
