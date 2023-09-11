import { v4 as uuidv4 } from "uuid";
import MenuButton from "../../ui/button/MenuButton";
import Logo from "../../ui/logo/Logo";

const menuButtonsName = [
  "Модульные здания",
  "Наши проекты",
  "Проектирование",
  "Калькулятор",
  "О нас",
  "Контакты",
];

export default function Header() {
  return (
    <div
      className="fixed flex items-center w-full h-20 bg-[rgba(47,46,51,0.90)] bg-opacity-90 shadow backdrop-blur-xl z-50"
      style={{
        boxShadow: "0px 0px 30px 6px rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="w-[1280px] h-2/3 mx-auto flex items-center justify-between">
        <Logo src="public/image/LogoWhite.png" className="w-[200px] h-fit" />
        <nav>
          {menuButtonsName.map(name => {
            const id = uuidv4();
            return (
              <MenuButton key={id} href="">
                {name}
              </MenuButton>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
