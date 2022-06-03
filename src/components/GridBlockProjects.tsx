
interface Block {
  title: string
  year: string
  description: string
  link: string
}

const GridBlockProjects = (block:Block) => {
  return (
    <>
      <li className="font-semibold">
        <a href={block.link} className="text-2xl md:text-2xl lg:text-3xl text-whiteish underline pointer-events-auto">{block.title}</a>
        <p className="text-lg md:text-xl text-greyish">{block.year}</p>
      </li>
      <li className="md:col-span-2">
        <p className="text-base md:text-lg text-greyish font-normal">{block.description}</p>
      </li>
    </>
  )
}

export default GridBlockProjects