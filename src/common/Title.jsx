import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h1 className="text-darkBlue text-[22px] font-semibold">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
