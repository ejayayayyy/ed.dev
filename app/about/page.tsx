
import AboutMe from "./ui/aboutMe/aboutMe"
import Skills from "./ui/skills/skills"

export default function About() {
  return (
    <div className="container w-full max-w-7xl mx-auto px-6 py-12 pt-28 min-h-screen flex flex-col bg-red-00">
      <div className="flex flex-col gap-12">
        {/* about me */}
        <AboutMe />

        {/* skills */}
        <Skills />

      </div>
    </div>
  )
}
