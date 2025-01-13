import MyProjects from "./ui/myProjects/projects"

export default function Projects() {
  return (
    <div className="container w-full max-w-7xl mx-auto px-6 py-12 pt-28 min-h-screen flex flex-col bg-red-00">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1 text-center">
          <p className="text-2xl font-bold text-green-500 ">Past Project Experience</p>
          <span className="text-gray-500 text-sm">
            Explore the project I've worked so far
          </span>
        </div>

        <MyProjects />
      </div>
    </div>
  )
}
