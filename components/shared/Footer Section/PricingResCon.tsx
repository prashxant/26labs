import React from 'react'

export const PricingResCon = () => {
  return (

     <div className="mx-auto max-w-7xl  px-6">

      <div className="grid grid-cols-3 gap-8 text-center text-3xl font-medium">
        <h3>Pricing</h3>
        <h3>Resource</h3>
        <h3>Contact</h3>
      </div>


      <div className="mt-6 space-y-4 text-xl  text-black/80">
        {[
          ["Basic", "Design", "Blog"],
          ["Standard", "Development", "About"],
          ["Premium", "Maintenance", "Careers"],
          ["Custom", "Student program", "Support"],
        ].map((row, i) => (
          <div key={i}>
            <div className="grid grid-cols-3  gap-24
              text-center">
              <p>{row[0]}</p>
              <p>{row[1]}</p>
              <p>{row[2]}</p>
            </div>
            <div className="mt-3 h-px w-full bg-black/10" />
          </div>
        ))}
      </div>


   </div>
  )
}
