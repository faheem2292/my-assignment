import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
  <div>
    <Image 
      className="size-48 shadow-xl rounded-md" 
      alt="Class Warfare Cover" 
      src="/img/qqq.jpeg"
      width={192}
      height={192}
    />
  </div>
  <div className="flex flex-col items-center md:items-start">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>
  )
}

export default page