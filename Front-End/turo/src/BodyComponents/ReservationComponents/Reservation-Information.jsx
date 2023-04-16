import React from "react";
import PricePerDay from "./DivComponents/PricePerDay";
import Calender from "./DivComponents/Calender";
import PickupAndDropoff from "./DivComponents/PickupAndDropoff";
import TripWarning from "./DivComponents/TripWarning";
import ContinueButton from "./DivComponents/ContinueButton";
import Canceled from "./DivComponents/Canceled";
import Distance from "./DivComponents/Distance";
import InsurancePlan from "./DivComponents/InsurancePlan";
import Icons from "./DivComponents/Icons";
import Report from "./DivComponents/Report";
import Line from "./DivComponents/Line"


// different components merged into one

export default function ReservationInforamtion() {
    return(
        <div>
            <PricePerDay />
            <Line />
            <Calender />
            <PickupAndDropoff />
            <TripWarning />
            <ContinueButton />
            <Line />
            <Canceled />
            <Line />
            <Distance />
            <Line />
            <InsurancePlan />
            <Line />
            <Icons />
            <Line />
            <Report />
        </div>
    )
}