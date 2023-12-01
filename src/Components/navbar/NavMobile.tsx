import { useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from 'react-use';
import { navigation } from "../../data";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger toggled={isOpen} size={23} toggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="fixed left-0 shadow-2xl right-0 top-[6rem] p-5 pt-0 bg-gradient-to-r from-[#3BA29B] to-[#E4FDE5]">
          <ul className="">
            {navigation.map((navItem) => (
              <li key={navItem.name} className="w-full p-[0.08rem] rounded-xl bg-gradient-to-r from-[#3BA29B] to-[#E4FDE5]">
                <a
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full p-5 rounded-xl bg-white"
                  href={navItem.href}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
         
        </div>
      )}
    </div>
  );
};

export default NavMobile;
