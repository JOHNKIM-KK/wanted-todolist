import React, { useState } from "react";
import useIntever from "../../../../hooks/useInterval";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  border-radius: 20px 20px 0 0;
  border-bottom: 3px solid #33bb77;
  background-color: #fff;
`;

const TimeText = styled.div`
  padding-top: 10px;
  padding-right: 18px;
  text-align: end;
  font-size: 18px;
  font-weight: 600;
  color: #119955;
`;

const DateText = styled.div`
  padding-top: 15px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: #119955;
`;

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octber",
  "November",
  "December",
];

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let currentDate = `${DAYS[day]}  ${MONTHS[month]} ${date}, ${year}`;
  let currentTime = `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;

  const [totalDate, setTotalDate] = useState({
    dates: currentDate,
    time: currentTime,
  });

  console.log(day);

  useIntever(() => {
    setTotalDate({
      dates: currentDate,
      time: currentTime,
    });
  }, 1000);

  return (
    <TodoHeadBlock>
      <TimeText>{totalDate.time}</TimeText>
      <DateText>{totalDate.dates}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
