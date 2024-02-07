import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About safeSpace
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              safeSpace is an ideological virtual space that offers an ear to listen,
              a mind to process and an opinion to share without fear or shame. Every 
              opinion counts is our mantra! 
            </p>
            <p>
              In current Times, we are all going through something and sharing can be difficult.
              safeSpace provides a platform for all voices to be heard from young to old,
              white collars to blue collars... you get the idea.
            </p>
            <p>
              All posts are drafted and written from true events! Kindly leave a comment/opinion
              and engage with other safeSpacers! We believe that a community of elites can help 
              each other grow and improve. 
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
