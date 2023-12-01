import { navigation } from "../../data";

const NavDesktop = () => {
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm xl:pr-[35rem] lg:pr-[10rem] text-textWhite">
      {navigation.map((item, index) => {
        return (
          <li key={index}>
            <a
              className="capitalize text-white text-[16px] hover:border-b transition-all"
              href={item.href}
            >
              {item.name}
            </a>
          </li>
          
          
        );
      })}
      
    </ul>
    
    
    </div>
    
  );
};

export default NavDesktop;
