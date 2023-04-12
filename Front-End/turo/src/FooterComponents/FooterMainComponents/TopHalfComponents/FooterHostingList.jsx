import React from 'react'

export default function FooterHostingList() {

  const HostingOptions = ['List your car', 'Carculator', 'All-Star Hosts', 'Host tools', 'Insurance & Protection', 'FAQs'];


  return (
    <div>
      <h2 className='header'> Hosting </h2>
      <div className='list'>
        {HostingOptions.map(option => {
              return (<a key={option} className='option'>{option}</a>)
            })}
      </div>  
    </div>
  )
}
