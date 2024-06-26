import React from 'react'

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full container mx-auto pt-[10px] sm:pt-[10px] md:pt-[40px] flex justify-center flex-col text-[#052e58] pb-10">
      {children}
    </div>
  )
}

export default Container
