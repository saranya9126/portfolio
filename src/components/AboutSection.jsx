import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="container max-w-5xl mx-auto ">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">About <span className="text-primary">Me</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className="text-lg font-semibold">Passionate Web Developer & <br />Creative Learner</h3>
            <p className="text-muted-foreground text-sm">
              I’m a web developer who enjoys building clean, responsive, and user-friendly websites. I focus on turning ideas into real, working interfaces using modern web technologies.
            </p>
            <p className="text-muted-foreground text-sm">
              I’m constantly learning and improving my skills, exploring new tools, and challenging myself to write better code every day while growing as a developer.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button text-sm'>Get In Touch</a>
              <a href="https://drive.google.com/file/d/1q3lDrYSYUBfIHN-rcqkn7mfxx9ijdUGI/view?usp=drive_link" className='px-6 py-2 rounded-full border border-primary text-primary text-sm hover:bg-primary/10 transition-colors duration-300'>Download Resume</a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    Web Development
                  </h4>
                  <p className='text-muted-foreground text-sm'>Building responsive and user-friendly websites with modern web technologies.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                 <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    UI/UX Design
                  </h4>
                  <p className='text-muted-foreground text-sm'>Creating intuitive and visually appealing user interfaces and experiences.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                 <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    Project Management
                  </h4>
                  <p className='text-muted-foreground text-sm'>Organizing and overseeing projects from conception to completion, ensuring timely delivery and quality outcomes.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
