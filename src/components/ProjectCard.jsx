import React from 'react'
import Button from './Button'
import Button2 from './Button2'

const ProjectCard = ({ project }) => {
    
    const handleLiveDemo = () => {
        window.open(project.liveUrl, '_blank')
    }
    
    const handleGithub = () => {
        window.open(project.githubUrl, '_blank')
    }

    return (

       <div className='flex gap-5'>
         <div className=" -top-4 -left-4 text-6xl font-bold text-accent opacity-70 bbh-bogle-regular">
                        {project.id.toString().padStart(2, '0')}
                    </div>
         <div className="flex flex-col gap-2 ">

            <div className='flex gap-10'>
                <div className="relative">
                   
                    <img
                        className="h-96 w-198 object-cover rounded-xl shadow-lg"
                        style={{ 
                            boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                        }}
                        src={project.url}
                        alt={project.title}
                    />
                </div>

                {/* Project Skills */}
                <div className="flex flex-col justify-center gap-6">
                    {/* <h3 className="text-lg font-semibold text-secondary nunito-bold mb-2">
                        Tech Stack
                    </h3> */}
                    <div className="flex flex-col gap-4">
                        {project.skills.map((skill, index) => (
                            <div key={index} className="group relative bg-white rounded-xl cursor-pointer w-15 h-15 flex justify-center items-center shadow-lg">
                                <img
                                    src={skill.icon}
                                    className="w-12 h-12 hover:scale-110 transition-transform"
                                    alt={skill.name}
                                />
                                {/* Tooltip */}
                                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-secondary text-primary px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Project Image and Description */}
                <div className="w-198 flex flex-col items-center gap-5">
                    <h2 className="text-3xl font-bold text-secondary bbh-bogle-regular ">
                        
                    </h2>
                    <p className="text-secondary nunito leading-relaxed text-lg text-center">
                        <span className='text-3xl bbh-bogle-regular text-secondary tracking-wide'>{project.title} : </span> {project.about}
                    </p>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-2">
                        {project.liveUrl && (
                            <Button text="Live Demo" onClick={handleLiveDemo} />
                        )}
                        {project.githubUrl && (
                            <Button2 text="Github" onClick={handleGithub}  />
                        )}
                    </div>
                </div>


        </div>
       </div>
    )
}

export default ProjectCard