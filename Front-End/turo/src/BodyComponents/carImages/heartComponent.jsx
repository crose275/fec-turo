import React, {useState} from 'react';
import Heart from 'react-heart';
import './heartIcon.css';
import { CSSTransition } from "react-transition-group";


export function HeartIcon() {
    const [active, setActive] = useState(false)
   
    return (
        <div className="wrapper" style={{ width: "2rem" }}>
          <Heart className='heart-icon' isActive={active} onClick={() => setActive(!active)} style = {{fill: active ? "red" : "white", stroke: !active ? "black":"transparent"}} />
          <CSSTransition
          mountOnEnter
          unmountOnExit
          in={active}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
          <h1 id='removed'>Saved to your favorites</h1>
        </CSSTransition>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={!active}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
          <h1 id='saved'>Removed from your favorites</h1>
        </CSSTransition>
        </div>
    );
  }