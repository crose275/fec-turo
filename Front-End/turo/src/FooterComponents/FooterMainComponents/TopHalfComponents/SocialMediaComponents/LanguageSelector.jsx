import React, {useState} from 'react';
import LanguageModal from './LanguageModal';
import './LanguageSelector.css';

export default function LanguageSelector() {

    const flags = {
      American : "https://static.vecteezy.com/system/resources/previews/011/571/446/non_2x/circle-flag-of-usa-free-png.png",
      Austrailian: "https://static.vecteezy.com/system/resources/previews/011/571/471/original/circle-flag-of-australia-free-png.png",
      UK : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png",
      Canada : "https://static.vecteezy.com/system/resources/previews/011/571/442/original/circle-flag-of-canada-free-png.png"
    }

    const [imgSrc, setImgSrc] = useState([flags.American]);
    const [LanguageModalToggle, setLanguageModal] = useState(false);

  function handleClick(){
    console.log(LanguageModalToggle);
      const newLanguageModal = !LanguageModalToggle;
      setLanguageModal(newLanguageModal);
  }

  return (
    <>
      <div className={LanguageModalToggle ? 'LanguageModalOn':'LanguageModalOff'}>
        <LanguageModal flags={flags}/>
      </div>      
      <div className='LanguageSelectorContainer' onClick={handleClick}>
        <a className='UpArrow'>^</a>
        <img className="FlagIcon" src={imgSrc}></img>
        <span>English</span>
      </div>
    </>
  )
}
