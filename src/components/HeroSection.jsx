import { ArrowDown } from 'lucide-react'
import React from 'react'

export const HeroSection = () => {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-2xl md:text-3xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I’m</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Saranya</span>
                    </h1>

                    <p className="text-center text-sm text-muted-foreground text-base md:text-lg opacity-0 max-w-2xl mx-auto animate-fade-in-delay-3">
                        I’m a web developer who loves turning ideas into
                        <span className="text-violet-400 font-medium"> interactive websites</span>.
                        <br />
                        Focused on learning, building, and improving every day.
                    </p>
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href="#projects" className='cosmic-button text-sm '>
                            View My Work
                        </a>
                    </div>

                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className=' text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className='h-5 w-5 text-primary'/>
            </div>

        </section>
    )
}
