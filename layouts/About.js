// Components
import Boot from '../components/Boot'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Content from '../content/about.mdx'

export default ({ pageName }) => {
    return (
        <>
            <Boot title={pageName}/>
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
            </div>
        </>
    )
}