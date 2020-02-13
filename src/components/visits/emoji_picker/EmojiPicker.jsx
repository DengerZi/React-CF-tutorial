import React from 'react';
import Emoji from './Emoji'
import { emojis, relation } from './emojis'

export default class EmojiPicker extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      emojis
    }

    this.emojiSelected = this.emojiSelected.bind(this)
  }
  
  buildEmojis(){
    return this.state.emojis.map((short_code, index) => {
      return <Emoji code={short_code} key={index} onClick={this.emojiSelected} />
    } )
  }
  
  emojiSelected(code){
    const reaction = relation[code]
    const emojisReordered = [code].concat(emojis.filter(el => el != code))

    this.props.onSelect(reaction);

    this.setState({
      emojis: emojisReordered
    })
  }

  render(){
    return(
      <div>
        <ul className="Emoji-picker">
          {this.buildEmojis() }
          {/* <li><Emoji /></li> */}
        </ul>
      </div>
    )
  }
}
