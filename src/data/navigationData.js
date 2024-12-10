import {
  currenciesActive,
  currenciesIcon,
  homeActiveIcon,
  homeIcon,
  ordersActiveIcon,
  ordersIcon,
  productsActive,
  productsIcon,
  reviewsActive,
  reviewsIcon,
  settingsActive,
  settingsIcon,
  statisticsActive,
  statisticsIcon,
} from '../assets';

const navigationData = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: {
      active: homeActiveIcon,
      notActive: homeIcon,
    },
  },
  {
    name: 'Orders',
    path: '/orders',
    icon: {
      active: ordersActiveIcon,
      notActive: ordersIcon,
    },
  },
  {
    name: 'Products',
    path: '/products',
    icon: {
      active: productsActive,
      notActive: productsIcon,
    },
  },
  {
    name: 'Reviews',
    path: '/reviews',
    icon: {
      active: reviewsActive,
      notActive: reviewsIcon,
    },
  },
  {
    name: 'Statistics',
    path: '/statistics',
    icon: {
      active: statisticsActive,
      notActive: statisticsIcon,
    },
  },
  {
    name: 'Currencies',
    path: '/currencies',
    icon: {
      active: currenciesActive,
      notActive: currenciesIcon,
    },
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: {
      active: settingsActive,
      notActive: settingsIcon,
    },
  },
];

export default navigationData;
