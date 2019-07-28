import Head from 'next/head';
import Vars from '../Vars';

// Load Sass styles
import '../styles/Boot.scss';

export default ({ 
    title, 
    keywords    = [], 
    description = '', 
    author      = 'Andrew Wiggins',
    favicon     = 'static/new-favicon.ico',
}) => (
    <Head>
        <title>{title}</title>
        <meta charSet='UTF-8' />
        <meta name='description' content={description} />
        <meta name='keywords'    content={keywords.join(', ')} />
        <meta name='author'      content={author} />
        <meta name='viewport'    content='width=device-width, initial-scale=1.0' />

        {/* Favicon */}
        <link rel='shortcut icon' href={Vars.sitePrefix + favicon} />

        {/* Static CSS */}
        <link rel='stylesheet' href={Vars.sitePrefix + 'static/css/all.min.css'} />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

        {/* JavaScript Includes */}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </Head>
);