import React from "react";
// import '../ReservationComponent.css';

import '../DivComponentsCss/Calender.css'

export default function Calender(){

    const hoursOptions=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return(
        <div id="trip-container">
            <div id="trip-summary">
                <div>
                    <div id="trip-start">
                        <label className="TripHeader"> Trip Start</label>
                            <div className="calender-row">
                                <div id="calender">
                                    <input className="DateInput" type="date" />
                                </div>
                                <div id="time">
                                    <select className="TimeInput" name="time" id="time">
                                    <option value="Midnight">Midnight</option>
                                        {hoursOptions.map((hour) => {
                                                return (
                                                    <option value={hour}>{hour}:00 AM </option>
                                                 )})
                                        }
                                         <option value="Noon">Noon</option>
                                        {hoursOptions.map((hour) => {
                                                return (
                                                    <option value={hour}>{hour}:00 PM </option>
                                                 )})
                                        }
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div id="trip-end">
                    <label className="TripHeader"> Trip End</label>
                        <div className="calender-row">
                            <div className="calender">
                                <input className="DateInput" type="date" />
                            </div>
                            <div className="time">
                            <select className="TimeInput" name="time" id="time">
                                        <option value="Noon">Noon</option>
                                        {hoursOptions.map((hour) => {
                                                return (
                                                    <option value={hour}>{hour}:00 PM </option>
                                                 )})
                                        }
                                    </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}