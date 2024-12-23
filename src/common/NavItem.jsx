import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { activeLinkIcon } from '../assets';

const NavItem = ({ item }) => {
  const location = useLocation();
  const pageName = location.pathname.split('/')[1];
  
  const isActive = `/${pageName}` === item.path;

  return (
    <li className="relative flex gap-6 pl-11 py-4">
      <img src={isActive ? item.icon.active : item.icon.notActive} alt="icon" />
      <NavLink
        to={item.path}
        className={`text-lg font-medium  ${
          isActive ? 'text-activeBlue' : 'text-lighterGray_3'
        }`}
      >
        {item.name}
      </NavLink>
      {isActive && (
        <img
          src={activeLinkIcon}
          className="absolute left-0 top-0"
          alt="activeLinkIcon"
        />
      )}
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      active: PropTypes.string.isRequired,
      notActive: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NavItem;
