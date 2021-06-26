import { TopNavbar } from ".";

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
};

export default BasicLayout;
