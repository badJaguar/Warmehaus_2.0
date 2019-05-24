
export interface IItem {
/* A main model for displaying data in table.
Can be used for displaying complex data in one general table.
*/
/*
For example:
Warmehaus / mats = (only mats data)
Warmehaus / termostats = (only termostats data)
Warmehaus = (data of termostats and mats)
*/
    id: number;
    name: string;
    nominal: string;
    price: number;
  }
