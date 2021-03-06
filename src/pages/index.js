import * as React from "react"
import { info } from "../pageData"
import '../styles/slyles.sass'

// markup
const IndexPage = () => {
  return (
    <main className='main'>
        <title>АЛЕКСАНДР С ДНЁМ РОЖДЕНИЯ!!</title>
        <header className='header'>
            <h1>С ДНЁМ РОЖДЕНИЯ, АЛЕКСАНДР!</h1>
            <marquee behavior="alternate" direction="right" className={'header__marquee'}>ДИРЕКТОР!</marquee>
        </header>
        <div className={'image__wrapper'}>
            <img src={info.imageLink2} className={'image horisontal'}/>
            <img src={info.imageLink} className={'image'}/>
            <img src={info.imageLink2} className={'image horisontal'}/>
        </div>

        <h2>СЧАСТЬЯ И ЗДОРОВЬЯ!</h2>

        <div className={'image__wrapper'}>
            <img
                className={'image'}
                src={info.dogGif}
            />
            <img
                className={'image text'}
                src={'https://3dtext2gif.com/exported_stickers/_3dtext2gif_tduicibfxamt.gif'}
            />
            <img
                className={'image'}
                src={info.dogGif}
            />
        </div>

        <div className={'header'}>
            <h2>ВИДЕО ПОЗДРАВЛЕНИЯ</h2>
            <marquee behavior="alternate" direction="right" className={'header__marquee'}>(ЭТО ОТ ВСЕХ!)</marquee>
            <h3>КРОМЕ ЛЁХИ</h3>
            <img
                className={'image'}
                src={info.dogsVideo2}
            />
        </div>

        <iframe src="https://www.youtube.com/embed/OmIdjBAjU90" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
        />
        <h2>ЛЁХА НЕМНОГО ОПОЗДАЛ</h2>
        <iframe src="https://www.youtube.com/embed/mBaV6tMAHDo?controls=0"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>

        <div className={'header'}>
            <h2>ОТДЕЛЬНЫЙ РОЛИК ОТ РАЗРАБОТКИ</h2>
            <marquee behavior="alternate" direction="right" className={'header__marquee'}>(он смешной)</marquee>
            <iframe
                src="https://www.youtube.com/embed/14HlCre0fRI?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
        </div>


    </main>
  )
}

export default IndexPage
