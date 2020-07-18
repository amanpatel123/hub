import React from 'react';

import { Inject, ScheduleComponent,Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

const TimeTable = () => {

  const data = [{
    Id: 2,
    Subject: 'Meeting',
    StartTime: new Date(2020, 5, 24, 10, 0),
    EndTime: new Date(2020, 5, 24, 12, 30),
    IsAllDay: false,
    Status: 'Completed',
    Priority: 'High'
}];
  return (
    <ScheduleComponent eventSettings={{dataSource: data}}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default TimeTable;