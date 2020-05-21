import { HomeItem } from '../home/home-item.model';


export const HOME_ITEMS_LINKS: HomeItem[] = [

  // {
  //   label: 'User',
  //   link: '../user',
  //   icon: 'fa-user',
  //   // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN']
  // },
  {
    label: 'Student',
    link: 'student',
    icon: 'school',
    // permissions: ['SUPER_ADMIN']
  },{
    label: 'Class',
    link: 'class',
    icon: 'chrome_reader_mode',
    // permissions: ['SUPER_ADMIN']
  },
  {
    label: 'Teacher',
    link: 'teacher',
    // icon: 'fas fa-chalkboard-teacher',
    icon: 'person',
    // permissions: ['INVENTORY_ADMIN']
  },
  {
    label: 'Exam',
    link: 'exam',
    // icon: 'fas fa-award',
    icon: 'assignment',
    // permissions: ['INVENTORY_ADMIN']
  },
  {
    label: 'Year',
    link: 'year',
    // icon: 'fas fa-database ',
    icon: 'date_range',
    // permissions: ['INVENTORY_ADMIN']
  },
{
    label: 'Backup',
    link: 'backup',
    // icon: 'fas fa-database ',
    icon: 'backup',
    // permissions: ['INVENTORY_ADMIN']
  },


];





