// Components
import Boot from '../components/Boot'
import Navbar from '../components/Navbar'
// import Scroll from '../components/Scroll'
import Footer from '../components/Footer'
import Socials from '../components/Socials'
import Content from '../content/about.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
            {/* <Scroll /> */}
            <div className='page work'>
                <Navbar page='work' />
                <div className='content-container container'>
                    <div className='row'>
                        <div className='col content-col'>
                            <Content />
                            {/* <Socials /> */}
                        </div>
                    </div>
                </div>
                {/* <Socials /> */}
                <Footer />
            </div>
        </>
    )
}