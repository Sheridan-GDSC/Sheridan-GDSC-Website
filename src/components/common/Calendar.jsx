import * as React from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  font-family: "Open Sans";
  padding: 32px;
  background-color: #ffffff;
  border-radius: 60px;
  box-shadow: -5px 5px 10px #00000029;
`;

const CalendarTitle = styled.h1`
  margin: 0 0 0.35rem 0;
  padding: 0;
  font-weight: 500;
  font-size: 2.5rem;
  color: #3d9a45;
  letter-spacing: 0px;
`;

const CalendarTable = styled.table`
  table-layout: fixed;
`;

const CalendarTableHead = styled.thead`
  color: #5a8bea;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0px;

  th {
    margin: 0.25rem;
    padding: 0.5rem 0.25rem;
  }
`;

const CalendarTableBody = styled.tbody`
  text-align: center;
`;

const CalendarCell = styled.td`
  background-color: ${(props) => (props.active ? "#5a8bea" : "")};
  color: ${(props) => (props.active ? "#ffffff" : "#9d9e9f")};
  border-radius: 25%;
  padding: 0.5rem 0.25rem;
`;

const Calendar = ({
  month = "",
  activeDate = 0,
  startingDay = 0,
  maxDate = 31,
  monthLength = 0
}) => {
  let dates = [];
  let offset = 0;
  for (let i = 0; i < startingDay; i++) {
    dates.push(null);
    offset++;
  }
  for (let i = 1; i <= monthLength; i++) {
    dates.push(i.toString());
  }
  let rows = [];
  for (let i = 0; i < dates.length; i += 7) {
    rows.push(
      <>
        <CalendarCell active={activeDate === i + 1 - offset}>
          {dates[i]}
        </CalendarCell>
        <CalendarCell active={activeDate === i + 2 - offset}>
          {dates[i + 1]}
        </CalendarCell>
        <CalendarCell active={activeDate === i + 3 - offset}>
          {dates[i + 2]}
        </CalendarCell>
        <CalendarCell active={activeDate === i + 4 - offset}>
          {dates[i + 3]}
        </CalendarCell>
        <CalendarCell active={activeDate === i + 5 - offset}>
          {dates[i + 4]}
        </CalendarCell>
        <CalendarCell active={activeDate === i + 6 - offset}>
          {dates[i + 5]}
        </CalendarCell>
        <CalendarCell active={activeDate === i + 7 - offset}>
          {dates[i + 6]}
        </CalendarCell>
      </>
    );
  }
  return (
    <>
      <CalendarContainer>
        <CalendarTitle>{month}</CalendarTitle>
        <CalendarTable>
          <CalendarTableHead>
            <tr>
              <th>SUN</th>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
            </tr>
          </CalendarTableHead>
          <CalendarTableBody>
            {rows.map((row, i) => (
              <tr key={i}>{row}</tr>
            ))}
          </CalendarTableBody>
        </CalendarTable>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
