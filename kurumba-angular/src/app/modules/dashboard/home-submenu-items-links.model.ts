import { HomeItem } from '../home/home-item.model';

export const HOME_SUBMENU_ITEMS_LINKS: HomeItem[] = [

   {
    label: 'New Student',
    link: '../student',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Student'],

  },
  //  {
  //   label: 'addStudent',
  //   link: '../student/addStudent',
  //   icon: 'fas fa-database',
  //   // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
  //   parentMenu: ['Student'],

  // },
  {
    label: 'New Class',
    link: '../student/class',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Student'],

  },
  {
    label: 'New Teacher',
    link: '../teacher',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Teacher'],

  },
  {
    label: 'Teacher subject',
    link: '../teacherSubject',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Teacher'],

  },
  {
    label: 'DLE/SEE',
    link: '../exam/dle-see',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Exam'],

  },{
    label: 'Internal',
    link: '../exam/internal',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Exam'],

  },{
    label: 'Marksheet',
    link: '../exam/result',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Exam'],

  },{
    label: 'New year',
    link: '../year',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Year'],

  },
  {
    label: 'Data-Backup',
    link: '../backup',
    icon: 'fas fa-database',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Backup'],

  },
]
