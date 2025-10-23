import { foldersIcon } from '../../assets';
import { NavItem } from '../../common';
import navigationData from '../../data/navigationData';

const Navigation = () => {
  return (
    <nav className="h-full min-w-[250px] font-inter border-r border-lighterGray_2 border-solid">
      <header className="h-[100px] py-8 pl-10">
        <img src={foldersIcon} alt="foldersIcon" />
      </header>
      <ul className="mt-[14px]">
        {navigationData.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
