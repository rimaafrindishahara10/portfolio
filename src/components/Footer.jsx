const Footer =()=>{
    return (
        <>
    <div className="py-5 border-gray-300 bg-gray-100 flex justify-between px-35">
        <div>
            <p>
                @2025 Rima Afrin Dishahara <span>All Rights Reserved</span>
                
            </p>
        </div>

        <div className="space-x-3">
          <a href="/about" className="hover:underline">About</a>
          <a href="/privicy" className="hover:underline">Privicy</a>
          <a href="/lincensing" className="hover:underline">Lincensig</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
    </div>
    </>
    )
}
export default Footer;