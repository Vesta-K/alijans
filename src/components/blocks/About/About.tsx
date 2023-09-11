import Button from "../../ui/button/Button";
import Title from "../../ui/title/Title";
export default function About() {
  return (
    <div
      id="about"
      style={{
        backgroundImage: "url('./image/537bcd9d7a68711989a5cff4c4c65716.jpg')",
      }}
      className="w-full h-[1000px] relative
                    
                    bg-center 
                    bg-cover 
                    bg-no-repeat

                    before:content-[''] 
                    before:h-[1000px] 
                    before:w-full 
                    before:absolute 
                    before:inset-0 
                    before:block 
                    before:bg-gradient-to-t 
                    before:from-[#2F2E33]"
    >
      <div className="absolute w-full pt-32 pr-10">
        <Title className="text-[#2F2E33] text-[180px] text-right font-ultraBold ">
          МОДУЛЬНЫЕ
        </Title>
        <Title className=" text-[#D5D6D2] text-9xl -mt-5 mb-8 text-right font-ultraBold">
          БЫСТРОВОЗВОДИМЫЕ
        </Title>
        <Title className=" text-[#D5D6D2] text-9xl text-right font-ultraBold ">
          ЗДАНИЯ
        </Title>
        <div className="text-right my-28 space-x-20">
          <Button>РАССЧИТАТЬ СТОИМОСТЬ</Button>
          <Button>ОБРАТНЫЙ ЗВОНОК</Button>
        </div>
      </div>
    </div>
  );
}
