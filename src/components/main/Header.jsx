import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../helpers';
import { notificationsBtn, profilePicture, settingsBnt } from '../../assets';
import { Search } from './';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const pageName = path.split('/')[1];

  return (
    <header className="flex justify-between items-center h-[100px] px-10 font-inter">
      <span className="text-darkBlue font-semibold text-[28px]">
        {pageName === 'dashboard'
          ? 'Overview'
          : capitalizeFirstLetter(pageName)}
      </span>
      <div className="flex gap-5">
        <Search />
        <button>
          <img src={settingsBnt} alt="profilePicture" />
        </button>
        <button>
          <img src={notificationsBtn} alt="profilePicture" />
        </button>
        <button className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            className="w-[60px] h-[60px]"
            src={profilePicture}
            alt="profilePicture"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
