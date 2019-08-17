// Components
import Boot from '../components/Boot'
import Logos from '../components/Logos'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Content from '../content/index.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
            <div className='page home'>
                <Navbar page='home' />
                <div className='content-container container'>
                    <div className='row'>
                        <Logos.Logo />
                        <div className='content'>
                            <Content />
                        </div>
                        {/* <div className='col left-col'>
                            <Logos.Logo />
                        </div>
                        <div className='col right-col'>
                            <Content />
                        </div> */}
                    </div>
                </div>
                <Logos.Waves />
            </div>
        </>
    )
}