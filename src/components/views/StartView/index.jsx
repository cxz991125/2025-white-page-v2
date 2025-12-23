import { useNavigate } from 'react-router-dom'
import { getImg}from "@/common/utils";
import { useEffect, useState, useRef } from 'react'
import Swiper from 'swiper';
import './index.scss'

const StartView = () => {
    const navigate = useNavigate()

    const go = () => navigate('/tab')

    const [progress, setProgress] = useState(0);

    const img = useRef();

    const [_swiper, setSwiper ] = useState()


    useEffect(() => {
        const swiper = new Swiper(document.querySelector('.swiper-container'), {
            direction: 'vertical',
            slidesPerView: "auto",
            spaceBetween: 30,
            on: {
                slideChange(swiper) {
                    if (swiper.isEnd) {
                        swiper.disable()
                    }
                    img.current.parentElement.scrollTop = 0;
                },
                touchEnd(swiper) {
                    if (swiper.isEnd) {
                        go()
                    }
                }
            }
        })

        setSwiper(swiper)
    }, [])

    const handleScroll = (event) => {
        const c = img.current
        const p = c.parentElement
        const t = p.scrollTop
        if (t == 0 || t >= c.clientHeight - p.clientHeight - 20) {
            _swiper.enable()
        }
        // if (sec.scrollTop > 0 && sec.scrollTop !== imgHeight - document.body.clientHeight) {
        //     event.stopPropagation()
        // }
    }

    useEffect(() => {
        if (progress > 100) return;
        setTimeout(() => setProgress(progress + 1), 10);
      }, [progress])

    return (
        <div className='start-page'>
            <div className='swiper-container w-full h-full'>
                <div className='swiper-wrapper w-full h-full'>
                    <div className='swiper-slide swiper-slide-active relative'>
                        <img className='w-full h-full object-cover' src={getImg("feng1.png")} alt="" />
                        <img className='w-full absolute bottom-0' src={getImg("logo.png")} alt="" />
                    </div>
                    {/* <div className='swiper-slide sec'>
                        <div className="w-full h-full overflow-y-auto" onScroll={handleScroll}>
                            <img className='w-full' src={getImg('feng2.png')} alt="" ref={img}/>
                        </div>
                    </div> */}
                </div>
            </div>
            <img className="down-icon" src={getImg('downIcon.png')} alt="" />
            {progress <= 100 && (<div className="loading-wrapper">
                <div className='w-120px h-120px loading-con'>
                    <div className='w-full h-full relative'>
                        <img src={getImg('loading.gif')} alt="" />
                        <span>{progress}%</span>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default StartView