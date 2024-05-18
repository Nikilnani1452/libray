namespace com.satinfotech.cloudapps;

using { managed,cuid } from '@sap/cds/common';

entity Library : managed ,cuid {
    @title:'Name'
    name:String(10);
    @title:'Book ID'
    addr1:String(40);
    @title:'Book Name'
    addr2:String(40);
    @title:'Author'
    city:String(40);
    @title:'Place'
    state:String(40);
    @title:'Start Date'
    pincode:String(40);
    @title:'Return Date'
    phone:String(40)
}