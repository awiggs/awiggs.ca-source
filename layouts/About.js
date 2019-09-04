// Components
import Boot from '../components/Boot'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../content/about.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
            <div className='page about'>
                <Navbar page='about' />
                <div className='content container'>
                    <div className='row'>
                        <div className='col'>
                            <Content />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}