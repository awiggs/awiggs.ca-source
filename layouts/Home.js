// Components
import Boot from '../components/Boot'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Content from '../content/index.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
            <div className='page home'>
                <Navbar page='home' />
                <div className='container'>
                    <div className='row'>
                        <div className='mr-auto col'>
                            <div className='content'>
                                <Content />
                            </div>
                        </div>
                        <div className='ml-auto col'>
                            <img className='home-svg' src='../static/svg/webDev.svg' />
                        </div>
                    </div>
                </div>
                <Socials className='container home-socials desktop-only'/>
            </div>
        </>
    )
}