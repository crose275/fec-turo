import React from "react";
// import '../ReservationComponent.css';

export default function Calender(){
    return(
        <div id="trip-container">
            <div id="trip-summary">
                <div>
                    <div id="trip-start">
                        <label> Trip Start</label>
                            <div id="calender-row">
                                <div id="calender">
                                    <input type="date" />
                                </div>
                                <div id="time">
                                    <select name="time" id="time">
                                        <option value="12:00">12:00</option>
                                        <option value="12:01">12:01</option>
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div id="trip-end">
                    <label> Trip End</label>
                        <div className="calender-row">
                            <div className="calender">
                                <input type="date" />
                            </div>
                            <div className="time">
                                <select name="time" className="time">
                                    <option value="12:00">12:00</option>
                                    <option value="12:01">12:01</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}