import React from 'react'
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/skills/github.svg"
import sticker1 from "../assets/sticker1.png"
import sticker2 from "../assets/sticker2.png"
import sticker3 from "../assets/sticker3.png"

const Contact = () => {
  return (
    <div id="contact" className='relative z-2 bg-primary h-screen text-secondary'>
      <h1 className='bbh-bogle-regular text-center pt-20 text-6xl text-secondary main-title'>CONTACT</h1>
      <p className='text-center nunito pt-5 text-2xl subtitle'>Whether you’re looking for a developer, collaborator, or just want to say hi —
        I’d love to hear from you.</p>

      <div className='flex justify-center py-20 relative'>
        <div className='border-2 border-dotted rounded-full h-80 w-80'></div>
        <img src={sticker2} alt="" className='absolute h-39 top-5' />
        <img src={sticker1} alt="" className='absolute h-40 bottom-25 left-150' />
        <img src={sticker3} alt="" className='absolute h-33 bottom-30 right-150' />
      </div>

      <div className='px-60 flex justify-between'>
        <div className='flex flex-col items-center gap-5'>
          <div className='flex items-center gap-5'>
            <img src={gmail} alt="" className='w-10 h-10' />
            <h1 className='text-3xl bbh-bogle-regular'>Email</h1>
          </div>
          <a href="mailto:gurpreet.reehal29@gmail.com">gurpreet.reehal29@gmail.com</a>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <div className='flex items-center gap-5'>
            <img src={linkedin} alt="" className='w-10 h-10' />
            <h1 className='text-3xl bbh-bogle-regular'>LinkedIn</h1>
          </div>
          <a href="https://www.linkedin.com/in/gurpreet-kaur-49a3b7255/">https://www.linkedin.com/in/gurpreet-kaur-49a3b7255/</a>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <div className='flex items-center gap-5'>
            <img src={github} alt="" className='w-10 h-10' />
            <h1 className='text-3xl bbh-bogle-regular'>Github</h1>
          </div>
          <a href="https://github.com/gurpreetkaur22/">https://github.com/gurpreetkaur22/</a>
        </div>
      </div>

<div className='text-center mt-10 p-3 bg-alt nunito'>Made with ❤️ by Gurpreet Kaur</div>

    </div>
  )
}

export default Contact