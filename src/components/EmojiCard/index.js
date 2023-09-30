// Write your code here.
import './index.css'

const EmojiCard = ({emojiItem, clickedEmoji}) => {
  const {emojiName, emojiUrl, id} = emojiItem

  const onClickEmoji = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emoji-cont">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img className="image-emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
