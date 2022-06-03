
interface Block {
  title: string
  description: string
}

const GridBlock_Profile = (block:Block) => {
  return (
    <>
      <li className="font-semibold">
        <a className="text-2xl md:text-2xl lg:text-3xl text-whiteish pointer-events-auto">{block.title}</a>
      </li>
      <li className="md:col-span-2">
        <p className="text-base md:text-lg text-greyish font-normal">
          {block.description}
        </p>
      </li>
    </>
  )
}

export default GridBlock_Profile