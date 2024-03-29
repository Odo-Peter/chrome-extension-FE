import { BiLogOut } from 'react-icons/bi';

const DropDown = ({ handleLogout }) => {
  return (
    <button
      to={'/auth/sign_in'}
      onClick={handleLogout}
      className=" flex items-center gap-3 justify-center mt-2 h-8 w-[9.5rem] border border-primary-100 rounded-md hover:bg-primary-50 cursor-pointer transition-all"
    >
      <p className="text-sm font-semibold text-primary-800">Logout</p>
      <BiLogOut className="cursor-pointer opacity-80 hover:opacity-100" />
    </button>
  );
};

export default DropDown;
