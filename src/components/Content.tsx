import GridBlockProfile from "./GridBlockProfile"
import GridBlockProjects from "./GridBlockProjects"

interface ContentState {
  visible: boolean
  window: string
}

const Content = (contentState:ContentState) => {

  return (
    <>
      <div className={"col-start-1 row-start-1 w-full h-full backdrop-blur-lg " + (contentState.visible ? 'opacity-100' : 'opacity-0') + " rounded-3xl shadow-xl z-10 transition-opacity duration-300 pointer-events-none"} />
      <div className={"grid grid-cols-1 col-start-1 row-start-1 w-full h-full bg-slate-500 "  + (contentState.visible ? 'bg-opacity-10' : 'bg-opacity-0') + " rounded-3xl z-20 transition duration-300 pointer-events-none"}>
        <div className={"col-start-1 row-start-1 " + (contentState.visible && contentState.window=="profile" ? 'opacity-100' : 'opacity-0') + " duration-300"}>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 gap-y-6 lg:gap-y-9 lg:gap-4 w-full p-14 items-center">
            <GridBlockProfile 
              title={"Aspiring Developer"} 
              description={"I started off as a game modder, using both my skills with coding and art to make objects in the games that developers never bother to implement. I hope to develop my own games and even softwares for public use."} 
              />
            <GridBlockProfile 
              title={"Experienced Coder"} 
              description={"Even during my junior highschool days I have always found interest in coding. And ever since then I continued my study to the point that I have learned 7 coding languages. The prominent ones being C#, python, and Java. However, I find great interest with Godot's GDscript as it is efficient in developing softwares and most especially games."} 
              />
            <GridBlockProfile 
              title={"Robotics Competitor"} 
              description={"During my elementary and highschool days, I competed in robotics tournaments held Philippine Robotics Olympiad. My team always reached the finals and once gotten close to internationals, placing 3rd in nationals."} 
              />
          </ul>
        </div>
        <div className={"col-start-1 row-start-1 " + (contentState.visible && contentState.window=="projects" ? 'opacity-100' : 'opacity-0') + " duration-300"}>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 gap-y-6 lg:gap-y-9 lg:gap-4 w-full p-14 items-center">
            <GridBlockProjects 
              title={"Nui-Library"} 
              year={"2021-Present"} 
              description={"Designed for Godot developers as a library for user interface navigation and animation."} 
              link={"https://github.com/Nif-kun/Nui-Library"} 
              />
            <GridBlockProjects 
              title={"Instax"} 
              year={"2020-2021"} 
              description={"An auto resizing and editing software that places images on an instax film design. Currently used by Eunik Printing, speeding up employee's editing time by 150%."} 
              link={""} 
              />
            <GridBlockProjects 
              title={"A.E. Fences"} 
              year={"2020-2021"} 
              description={"As an example project for ToolBox, A.E. Fences were made. It provides 8 different types of fences for the game called Rimworld."} 
              link={"https://github.com/Nif-kun/ArchitectExpanded_Fences"} 
              />    
            <GridBlockProjects 
              title={"ToolBox"} 
              year={"2020-2021"} 
              description={"Game mod for Rimworld that acts as a framework for fellow modders. It allows the development of mod settings through the use of XML. By converting C# to XML, non-programmers are given an opportunity to make their own mods, lowering the learning curve."} 
              link={"https://github.com/Nif-kun/ToolBox"} 
              />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Content