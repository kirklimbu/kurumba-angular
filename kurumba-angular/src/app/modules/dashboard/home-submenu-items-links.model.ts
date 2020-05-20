import { HomeItem } from '../home/home-item.model';

export const HOME_SUBMENU_ITEMS_LINKS: HomeItem[] = [

   {
    label: 'New Student',
    link: '../student',
    icon: 'group_add',

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
    icon: 'class',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Student'],

  },
  {
    label: 'New Teacher',
    link: '../teacher',
    icon: 'person_add',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Teacher'],

  },
  {
    label: 'Teacher subject',
    link: '../teacherSubject',
    icon: 'subject',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Teacher'],

  },
  {
    label: 'DLE/SEE',
    link: '../exam/dle-see',
    icon: 'verified_user',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Exam'],

  },{
    label: 'Internal',
    link: '../exam/internal',
    icon: 'question_answer',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Exam'],

  },{
    label: 'Marksheet',
    link: '../exam/result',
    icon: 'print',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Exam'],

  },{
    label: 'New year',
    link: '../year',
    icon: 'today',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Year'],

  },
  {
    label: 'Data-Backup',
    link: '../backup',
    icon: 'storage',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN'],
    parentMenu: ['Backup'],

  },
]
