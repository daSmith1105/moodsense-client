import React from 'react';
import './mood-select.css';

export function MoodSelect(props) {

const moodList = [
  {
    title: 'happy',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Slightly_Smiling_Face_Emoji_Icon_42x42.png?16228697460559734940'
  }, 
  {
    title: 'excited',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_42x42.png?6135488989279264585'
  }, 
  {
    title: 'relieved',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Relieved_Emoji_Icon_42x42.png?7614083643283495824'
  },
  {
    title: 'confident',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sunglasses_Emoji_42x42.png?2976903553660223024'
  },
  {
    title: 'content',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Smiling_Face_Emoji_with_Blushed_Cheeks_42x42.png?2976903553660223024'
  },
  {
    title: 'hopeful',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Smiling_Emoji_with_Smiling_Eyes_Icon_42x42.png?16228697460559734940'
  },
  {
    title: 'motivated',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji_42x42.png?6135488989279264585'
  },
  {
    title: 'energetic',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Smiling_with_Sweat_Emoji_Icon_42x42.png?14173495976923716614'
  },
  {
    title: 'nervous',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji_Icon_42x42.png?7614083643283495824'
  },
  {
    title: 'anxious',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Grinning_Emoji_with_Smiling_Eyes_42x42.png?8026536574188759287'
  },
  {
    title: 'angry',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Mad_Emoji_42x42.png?2976903553660223024'
  },
  {
    title: 'confused',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji_42x42.png?6135488989279264585'
  },
  {
    title: 'blah',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Neutral_Face_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'weak',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Disappointed_Face_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'iritated',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Confounded_Face_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'hurt',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Face_With_Head-Bandage_Emoji_42x42.png?6135488989279264585'
  },
  {
    title: 'tired',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sleeping_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'scared',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Grinmacing_Face_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'furious',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Angry_Emoji_42x42.png?2976903553660223024'
  },
  {
    title: 'lonely',
    icon:'https://cdn.shopify.com/s/files/1/1061/1924/files/Face_With_Rolling_Eyes_Emoji_42x42.png?6135488989279264585'
  },
  {
    title: 'invisible',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Emoji_Face_without_Mouth_42x42.png?8026536574188759287'
  },
  {
    title: 'goofy',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hungry_Face_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'surprised',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Flushed_Face_Emoji_42x42.png?8026536574188759287'
  },
  {
    title: 'sad',
    icon: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Crying_Face_Emoji_42x42.png?8026536574188759287'
  }
];

const moods = moodList.map(mood => 
        <div className="mood-container" key={mood.title}>
            <div className="icon-container">
                <img src={mood.icon} alt={mood.title}/>
                <p>{mood.title}</p>
            </div>
            <div className="rating-container">
                <div className="mood-rating">
                <input type="radio" name={mood.title} value={mood.title + '1'}/>
                <p>1</p>
                </div>
                <div className="mood-rating">
                <input type="radio" name={mood.title} value={mood.title + '2'}/>
                <p>2</p>
                </div>
                <div className="mood-rating">
                <input type="radio" name={mood.title} value={mood.title + '3'}/>
                <p>3</p>
                </div>
                <div className="mood-rating">
                <input type="radio" name={mood.title} value={mood.title + '.clear'} defaultChecked/>
                <p>clear</p>
                </div>
            </div>
            <hr className="seperator"/>
        </div>);  

    return (
        <div className="mood-select-container">
           {moods}
        </div>
    )
}

export default MoodSelect;