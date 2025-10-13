import React from 'react'

const TeachSection = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900">
      <h1 className="text-center text-white text-4xl md:text-6xl font-light leading-snug px-100">
        We only{" "}
        <span className="text-teal-400 font-semibold">teach</span>{" "}
        what we are really really{" "}
        <span className="italic text-teal-300 font-semibold">good</span> at.
      </h1>
    </div>
  )
}

export default TeachSection;