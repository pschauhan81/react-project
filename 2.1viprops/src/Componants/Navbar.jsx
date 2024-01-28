

function Navbar(props) {
  return (

    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Your Website</h1>
        <nav className="space-x-4">
          <a href="#" className="text-white">{props.home}</a>
          <a href="#" className="text-white">{props.about}</a>
          <a href="#" className="text-white">Contact</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">View</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
