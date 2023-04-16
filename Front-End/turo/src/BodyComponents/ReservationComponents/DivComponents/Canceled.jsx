import React from "react";
import "../DivComponentsCss/Canceled.css";
import { BsHandThumbsUp } from "react-icons/bs"

export default function Canceled(){
    return(
        <div>
            <BsHandThumbsUp id="thumb"/>
            <div id="rows">
                <div id="FreeCancel">
                    Free cancellation
                </div>
                <div id="StartDate">
                24 hrs from the start date
                </div>
            </div>
        </div>
    )
}