import React from 'react'
import './LanguageModal.css'

export default function LanguageModal({ flags }) {

  const languageArray  = [];
  for(var language in flags) {
    languageArray.push(flags[language]);
  }

  return (
    <div className='LanguageModal'>
      {languageArray.map(languageImgSrc => {
       return (
        <div className='FlagLanguageSelection'>
          <img className='flags' key={languageImgSrc} src={languageImgSrc}></img>
          <a> English </a>
        </div>
       )
      })}
    </div>
  )
}
