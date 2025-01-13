import Image from "next/image"

export default function AboutMe() {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow flex flex-col gap-6 items-center">
            {/* header */}
            <p className="text-2xl font-bold text-green-500">Get To Know Me</p>

            <div className="flex flex-col items-center justify-center lg:flex-row gap-8 sm:gap-12 ">
                {/* left */}
                <div className="flex items-center justify-center bg--500">
                    <Image
                        src='/image_1.png'
                        alt="Image 1"
                        height={300}
                        width={300}
                        className=" block sm:hidden"
                    >
                    </Image>
                    <Image
                        src='/image_1.png'
                        alt="Image 1"
                        height={400}
                        width={400}
                        className=" hidden sm:block lg:hidden"
                    >
                    </Image>
                    <Image
                        src='/image_1.png'
                        alt="Image 1"
                        height={600}
                        width={600}
                        className=" hidden lg:block"
                    >
                    </Image>
                </div>

                {/* right */}

                <div className="w-full flex flex-col gap-8 bg-blue-0 text-gray-500 text-justify">
                    <div className="flex flex-col gap-8">
                        <p className="indent-12">
                            I am <span className="text-green-500 font-medium">Edward Gatbonton</span>, a dedicated 3rd Year Bachelor of Science in Information Technology (BSIT) student at 
                            <span> <a href="https://www.minsu.edu.ph/" target="_blank" className="text-green-500 font-medium underline underline-offset-4 transition-colors duration-150 hover:text-green-600">Mindoro State University</a></span>. My passion lies in the world of <span className="text-green-500 font-medium">Frontend Development,</span> where I bring creativity and technical skills together to craft seamless and engaging user experiences.
                            Over the past few years, I have honed my ability to design and develop interactive web interfaces that prioritize user satisfaction by ensuring easy navigation, responsiveness, and visually appealing aesthetics.

                        </p>
                        <p className="indent-12">
                            I enjoy exploring the latest web technologies and best practices, continuously pushing myself to learn and grow in this ever-evolving field.
                            My ultimate goal is to bridge the gap between users and technology by building accessible, efficient, and intuitive websites that enhance digital interactions.
                            With a strong foundation in web design principles and a passion for problem-solving, I am committed to making meaningful contributions to the digital landscape and delivering exceptional web solutions.

                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}