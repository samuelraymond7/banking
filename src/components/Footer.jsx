import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia} from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" className=" w-[266px] h-[72px] object-contain"/>
      </div>
      <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payment easy, reliable, and secure.</p>
    </div>

    <div className="flex-[1.5] w-full flex-row flex justify-between flex-wrap md:mt-0 mt-10">
      {footerLinks.map((footerLink,index)=>(
        <div key={index} className=" flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
          <ul className=" list-none mt-4">
            {footerLink.links.map((link,index)=>(
              <li key={link.name+index} className={` font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index!==footerLink.links.length-1?"mb-4":"mb-0"}`}>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className=" w-full flex justify-between items-center md:flex-row flex-col pt-3 mt-3 border-t-[1px] border-t-[#3f3e45]">
      <a className=" font-poppins font-normal text-[18px] leading-[27px] text-white text-center hover:underline" href="https://youtu.be/_oO4Qi5aVZs?si=9nAsZsMP-4hSjjIX" target="_blank"rel='noopener noreferrer'>Design by JavaScript Mastery</a>
      
      <div className=" flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social,index)=>(
          <img src={social.icon} key={social.id} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1?"mr-6":"mr-0"}`}/>
        ))}
      </div>
    </div>
  </section>
)
export default Footer