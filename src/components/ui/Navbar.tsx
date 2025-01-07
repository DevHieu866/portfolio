
const Navbar = () => {
  return (
    <>
      <nav className="bg-navColor shadow-xl fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 justify-center">
            <div className="hidden md:block">
              <div className="mx-4 flex items-center space-x-8">
                <a href="#about" className="text-titleText hover:text-black rounded-lg text-2xl">
                  About
                </a>
                <a href="#projects" className="text-titleText hover:text-black rounded-lg text-2xl">
                  Projects
                </a>
                <a href="#contact" className="text-titleText hover:text-black rounded-lg text-2xl">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
