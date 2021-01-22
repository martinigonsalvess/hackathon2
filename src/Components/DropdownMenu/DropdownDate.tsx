import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';
import { Label } from 'office-ui-fabric-react/lib/Label';

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',
};

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 0 0',
    width:'50vh',
  },
});

export const DropdownDate: React.FC = () => {
  const [firstDayOfWeek] = React.useState(DayOfWeek.Sunday);

 return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <Label>Date</Label> 
        <DatePicker
        className={controlClass.control}
        firstDayOfWeek={firstDayOfWeek}
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
      />
     
    </div>
  );
};
