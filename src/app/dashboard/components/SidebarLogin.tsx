import React from 'react'
import SideOptions from './SideOptions'

const SidebarLogin = () => {
  return (
    <article className="flex sticky items-center justify-center" style={{zIndex:'99'}}>
      <div className="flex fixed">
        <div
          id="menu"
          className="backdrop-blur bg-softwhite shadow-xl rounded-3xl min-h-screen z-10 text-stone-800 w-60 fixed left-0 h-screen"
        >
          <div className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-black">
              Dashboard
            </h1>
            <p className="text-slate-500 text-sm">
              Manage your actions and activities
            </p>
          </div>
          <div id="profile" className="px-6 py-10">
            <p className="text-stone-800">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <img
                  className="rounded-full w-8 h-8"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt=""
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Santiago Sanchez
              </span>
            </a>
          </div>
          <div id="nav" className="w-full px-6">
            
            <SideOptions titlesection='Dashboard' briefoverview='Data Analysis' />
            <SideOptions titlesection='Users Mngmnt' briefoverview='User accounts'/>
            <SideOptions titlesection='Storage' briefoverview='Data Analysis'/>
            
          </div>
          <section className='flex bottom-0'>
        <h1>Logout</h1>
          </section>
        </div>
      </div>
    </article>
  )
}

export default SidebarLogin

