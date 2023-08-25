import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

 
const Footer = () => {
  return (
     <footer className="max-container">
      <div className="flex justify-between items-start
       gap-20 flex-wrap max-lg:flex-col">
       <div className=" flex flex-col items-start">
        <a href="/">
          <img 
          src={footerLogo}
          alt="nike"
          width={130}
          height={40} />
        </a>
        <p className="mt-4 sm:max-w-sm">Get shoes ready to your nearest Nike store. Find your perfect size</p>
         <div className="flex justify-center items-center gap-5 mt-8">
          {socialMedia.map((social) => (
            <div key={social} className="flex justify-center items-center w-11 h-11 bg bg-white rounded-full cursor-pointer">
              <img 
              src={social.src} 
              alt={social.alt}
              width={27}
              height={24}/>
            </div>
          ))}
         </div>
       </div>
       <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10 ">
        {footerLinks.map((section)=> (
          <div key={section}>
           <h4 className="text-2xl font-montserrat">{section.title}</h4>
           <ul>
            {section.links.map((link) => (
              <li key={link} className="mt-3 hover:text-slate-gray cursor-pointer">
                <a>{link.name}</a>
              </li>
            ))}
           </ul>
          </div>
        ))}
       </div>
      </div>
       <div className="flex justify-between mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer">
         <img 
         src={copyrightSign} 
         alt="copy right sign" 
         width={20} 
         height={20} 
         className="rounded-full m-0" />
         <p>Copyright. All rigths reserved</p>
        </div>
        <p>Terms & Conditions</p>
       </div>
     </footer>
  )
}

export default Footer
