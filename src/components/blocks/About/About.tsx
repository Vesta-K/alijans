import Button from "../../ui/button/Button";
import Title from "../../ui/title/Title";
export default function About() {
  return (
    <div
      className="w-full h-[1000px] relative
                    bg-[url('src/assets/image/537bcd9d7a68711989a5cff4c4c65716.jpg')] 
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
      <div className="absolute right-0 my-52 mx-10 space-y-8 text-9xl text-right font-ultraBold">
        <Title className="text-[#2F2E33] ">МОДУЛЬНЫЕ</Title>
        <Title className=" text-[#D5D6D2]">БЫСТРОВОЗВОДИМЫЕ</Title>
        <Title className=" text-[#D5D6D2] ">ЗДАНИЯ</Title>
        <div className="absolute w-fit right-0 p-20 space-x-40">
          <Button>РАССЧИТАТЬ СТОИМОСТЬ</Button>
          <Button>ОБРАТНЫЙ ЗВОНОК</Button>
        </div>
      </div>
    </div>
  );
}
