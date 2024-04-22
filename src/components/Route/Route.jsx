import { useState } from "react";
import { TbArrowRightRhombus } from "react-icons/tb";

import styles from "./route.module.css";
import extractNames from "../../utils/extractName";
import formatDate from "../../utils/formatDate";

const Route = ({ orderItem }) => {
  const { fullRouteName, departAt, route, interconnection } = orderItem;
  const getNames = extractNames(fullRouteName);
  const departures = formatDate(departAt);
  const [departureName, setDeparture] = useState(getNames.departure);
  const [arrivalName, setArrivalName] = useState(getNames.arrival);
  const [departureTime, setDepartureTime] = useState(departures.date);
  const [time, setTime] = useState(departures.time);

  const handleChange = (typeFormat) => {
    setDepartureTime(departures[typeFormat]);
  };
  return (
    <div>
      <p className={styles.routeName}>
        <span>{fullRouteName}</span>
        {route}
        {interconnection && interconnection === "INTERCONNECTION" && (
          <>
            <TbArrowRightRhombus />
          </>
        )}
      </p>
      <p>
        <span>departure:</span>
        <span>{departureName}</span>
      </p>
      <p>
        <span>Arrival:</span>
        <span>{arrivalName}</span>
      </p>
      <div className={styles.datetime}>
        <span>date: {departureTime}</span>
        <div>
          <button onClick={() => handleChange("localTime")}>to local</button>
          <button onClick={() => handleChange("cet")}>to CET</button>
        </div>
      </div>
      <p>
        <span>time: {time}</span>
      </p>
    </div>
  );
};

export default Route;
