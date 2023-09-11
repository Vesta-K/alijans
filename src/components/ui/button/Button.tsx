export default function Button({ children }: { children: string }) {
  return (
    <button
      className="w-[271px] h-[52px] bg-[#3A5199] text-white text-[18px] font-thin tracking-wider
    transition duration-200
    hover:bg-[#D5D6D2]
    hover:text-[#3A5199]
    hover:font-light"
    >
      {children}
    </button>
  );
}
