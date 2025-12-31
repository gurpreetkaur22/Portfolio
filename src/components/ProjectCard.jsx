import React from 'react'

const ProjectCard = ({ project }) => {
    console.log('ProjectCard rendering with project:', project)
    
    // Check if project and required properties exist
    if (!project) {
        console.error('ProjectCard: No project data provided')
        return <div>Error: No project data</div>
    }

    if (!project.skills) {
        console.error('ProjectCard: No skills array in project:', project)
        return <div>Error: No skills data</div>
    }

    console.log('ProjectCard skills:', project.skills)

    return (
       <div className='flex gap-5'>
         <div className=" -top-4 -left-4 text-6xl font-bold text-accent opacity-70 bbh-bogle-regular">
                        {project.id.toString().padStart(2, '0')}
                    </div>
         <div className="flex flex-col gap-2 ">

            <div className='flex gap-10'>
                <div className="relative mb-4">
                   
                    <img
                        className="h-96 w-auto object-cover rounded-xl"
                        style={{ 
                            boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                        }}
                        src={project.url}
                        alt={project.title}
                        onError={(e) => {
                            console.error('Failed to load project image:', project.url, e)
                        }}
                        onLoad={() => {
                            console.log('Successfully loaded project image:', project.url)
                        }}
                    />
                </div>

                {/* Project Skills */}
                <div className="flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-4">
                        {project.skills.map((skill, index) => {
                            console.log(`Rendering skill ${index}:`, skill)
                            return (
                                <div key={index} className="group relative bg-white rounded-xl cursor-pointer border border-accent w-20 h-15 flex justify-center items-center">
                                    <img
                                        src={skill.icon}
                                        className="w-12 h-12 hover:scale-110 transition-transform"
                                        alt={skill.name}
                                        onError={(e) => {
                                            console.error('Failed to load skill icon:', skill.name, skill.icon, e)
                                        }}
                                        onLoad={() => {
                                            console.log('Successfully loaded skill icon:', skill.name, skill.icon)
                                        }}
                                    />
                                    {/* Tooltip */}
                                    <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-secondary text-primary px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        {skill.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Project Image and Description */}
                <div className="w-197.75 flex flex-col items-center">
                    <p className="text-secondary nunito leading-relaxed text-lg text-center">
                        {project.about}
                    </p>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-2">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-accent text-primary rounded-md text-sm nunito-bold hover:bg-opacity-90 transition-colors"
                                onClick={() => console.log('Clicked live demo for:', project.title)}
                            >
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-accent text-accent rounded-md text-sm nunito-bold hover:bg-accent hover:text-primary transition-colors"
                                onClick={() => console.log('Clicked GitHub for:', project.title)}
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
        </div>
       </div>
    )
}

export default ProjectCard