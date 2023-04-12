import React, {useState} from 'react';
import Heart from 'react-heart';
import './heartIcon.css'


export function HeartIcon() {
//     const [active, setActive] = useState(false)
//     return (
//         <div style={{ width: "2rem" }}>
//           <Heart className='heart-icon' isActive={active} onClick={() => setActive(!active)} />
//         </div>
//     );
//   }

    const [active, setActive] = useState(false)
    return (
        <div style={{ width: "2rem" }}>
          <Heart className='heart-icon' isActive={active} onClick={() => setActive(!active)} style = {{fill: active ? "transparent" : "red", stroke: active ? "black":"transparent"}} />
        </div>
    );
  }