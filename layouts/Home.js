// Components
import Boot from '../components/Boot'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Content from '../pages/index.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
            <div className='page'>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col left-col'>
                            <img src='/static/svg/chipgr8-mono.svg' className='home-logo' />
                        </div>
                        <div className='col right-col'>
                            <Content />
                        </div>
                    </div>
                </div>
                <Socials />
            </div>
        </>
    )
}