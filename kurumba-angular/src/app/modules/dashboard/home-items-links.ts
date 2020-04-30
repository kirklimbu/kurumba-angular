import { HomeItem } from '../home/home-item.model';


export const HOME_ITEMS_LINKS: HomeItem[] = [

  {
    label: 'User',
    link: '../user',
    icon: 'fa-user',
    // permissions: ['SYSTEM_ADMIN', 'SUPER_ADMIN']
  },
  {
    label: 'Student',
    link: 'student',
    icon: 'fas fa-user-graduate',
    // permissions: ['SUPER_ADMIN']
  },
  {
    label: 'Teacher',
    link: 'teacher',
    icon: 'fas fa-chalkboard-teacher',
    // permissions: ['INVENTORY_ADMIN']
  },
  {
    label: 'Exam',
    link: 'exam',
    icon: 'fas fa-award',
    // permissions: ['INVENTORY_ADMIN']
  },
  {
    label: 'Backup',
    link: 'backup',
    icon: 'fas fa-database',
    // permissions: ['INVENTORY_ADMIN']
  },


];





