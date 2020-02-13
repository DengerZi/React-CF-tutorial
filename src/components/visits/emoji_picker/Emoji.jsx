import React from 'react';
import emojione from 'emojione'

const heart = {
  __html: emojione.shortnameToImage(':heart_eyes:')
}

function getEmojiHTML(code){
  return {
    __html: emojione.shortnameToImage(code)
  }
}

const Emoji = (props) => {
  return(
    <div onClick={() => props.onClick(props.code)} dangerouslySetInnerHTML={getEmojiHTML(props.code)} className="Emoji-emoji">
      
    </div>
  )

}

export default Emoji