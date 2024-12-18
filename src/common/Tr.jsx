import PropTypes from "prop-types";

const Tr = ({ children }) => {
  return (
    <tr className="text-desaturatedBlue text-base font-medium border-b border-lighterGray_2">
      {children}
    </tr>
  );
};

Tr.propTypes = {
    children: PropTypes.node,
};

export default Tr;
