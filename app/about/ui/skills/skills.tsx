'use client'

import { useState } from "react"
import TechStack from "./techStack"
import Tools from "./tools"

const components = {
    techStack: TechStack,
    tools: Tools
}

export default function Skills() {
    const [selectedOption, setSelectedOption] = useState<'techStack' | 'tools'>('techStack');

    const SelectedComponent = components[selectedOption]

    return (
        <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold text-green-500">Skills</p>

            <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-sm">
                    {Object.keys(components).map((key) => (
                        <button key={key} className={`px-6 py-2 rounded-full transition-colors duration-150 ${selectedOption === key ? 'bg-green-500 text-white' : 'text-gray-500 transition-colors duration-150 bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedOption(key as 'techStack' | 'tools')}>
                            {key === 'techStack' ? 'Tech Stack' : 'Tools'}
                        </button>
                    ))}
                </div>

                {/* options here */}
                <div>
                    <SelectedComponent />
                </div>
            </div>
        </div>
    )
}