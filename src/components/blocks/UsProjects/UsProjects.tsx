import Title from "../../ui/title/Title";
import projects from "../../../mock/projects";
import UsProjectCard from "../../ui/UsProjectsCard/UsProjectCard";

export default function UsProjects() {
  return (
    <div id="usProjects" className="w-full h-[1000px]">
      <div className="w-[1280px] h-[1000px] mx-auto">
        <Title className="font-light text-[62px] pt-20 underline decoration-solid decoration-2 underline-offset-[20px] text-[#D5D6D2]">
          Наши проекты
        </Title>
        <section className="w-[1280px] my-10 flex justify-between">
          {projects &&
            projects.map(({ index, image, title, smallDescription }) => (
              <UsProjectCard
                key={index}
                title={title}
                image={image}
                smallDescription={smallDescription}
                index={index}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
