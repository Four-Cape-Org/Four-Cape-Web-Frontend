import BubbleButtonPrimary from "../Elements/BubbleButtonPrimary"

// Image imports
import AboutHeroImg from '../../assets/img/about/AboutHero.png'

const AboutHero = () => {
  return (
    <div className='flex lg:flex-row md:flex-col justify-center lg:items-start items-center lg:mt-[4em] sm:mt-[2em] mt-[1em]'>

        <div className='flex flex-col justify-center items-start py-[30px] sm:px-[5em] lg:w-[50%] md:w-[90%]'>
          <h1 className='font-secondary font-semibold lg:text-[40px] md:text-[40px]  sm:text-[90px] text-[40px] leading-[1em]'>Helping businesses deliver exceptional buyer experiences.</h1>
          <p className='my-[30px] font-secondary text-[#8A8A8A] lg:text-[17px] md:text-[17px] text-gray-700 text-opacity-100]'>Vidyard is the leading video messaging and asynchronous communications platform for go-to-market teams. Millions of sales professionals and more than 250,000 go-to-market teams use Vidyard’s AI-powered video messaging, video hosting, and digital sales rooms to connect with more prospects and generate more revenue.</p>
          <BubbleButtonPrimary className='mx-auto' sendTo='/services' text='VIEW OUR SERVICES' />
        </div>

        <div className='lg:w-[40%] md:w-[60%]'>
          <img src={AboutHeroImg} alt="" />
        </div>

    </div>
  )
}

export default AboutHero