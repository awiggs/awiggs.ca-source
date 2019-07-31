// Components
import Boot from '../components/Boot'
import Image from '../components/Image'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Content from '../content/index.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
            <div className='page home'>
                <Navbar />
                <div className='content container'>
                    <div className='row'>
                        <div className='col left-col'>
                            <Image 
                                src={`/static/Logo-Light.png`}
                                className={`home-logo`}
                            />
                        </div>
                        <div className='col right-col'>
                            <Content />
                        </div>
                    </div>
                </div>
                <Socials className='home-soc' />
            </div>
        </>
    )
}