import PropTypes from 'prop-types';
import { Title } from '../../common';

const SectionWrapper = ({ wrapperClass, title, content }) => {
  return (
    <div className={wrapperClass}>
      <Title title={title} />
      <div className="bg-white mt-5 rounded-[25px]">{content}</div>
    </div>
  );
};

SectionWrapper.propTypes = {
  wrapperClass: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
};

export default SectionWrapper;
