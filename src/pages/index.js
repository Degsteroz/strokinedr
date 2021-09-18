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
            <img src={info.imageLink2} height={300} className={'image'}/>
            <img src={info.imageLink} height={300} className={'image'}/>
            <img src={info.imageLink2} height={300} className={'image'}/>
        </div>

        <h2>СЧАСТЬЯ И ЗДОРОВЬЯ!</h2>

        <div className={'image__wrapper'}>
            <img src={'https://media2.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif?cid=ecf05e4783p7b8k334hhddh8st3353dn92olc1685lv3g2pu&rid=giphy.gif&ct=g'}/>
            <img src={'https://3dtext2gif.com/exported_stickers/_3dtext2gif_tduicibfxamt.gif'}/>
            <img src={'https://media2.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif?cid=ecf05e4783p7b8k334hhddh8st3353dn92olc1685lv3g2pu&rid=giphy.gif&ct=g'}/>
        </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/OmIdjBAjU90" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
        />
        <h2>ЛЁХА НЕМНОГО ОПОЗДАЛ</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mBaV6tMAHDo?controls=0"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>

        <div className={'header'}>
            <h2>ОТДЕЛЬНЫЙ РОЛИК ОТ РАЗРАБОТКИ</h2>
            <marquee behavior="alternate" direction="right" className={'header__marquee'}>(он смешной)</marquee>
            <iframe
                width="560"
                height="315"
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
