import Vars from '../Vars';

export default ( { className }) => {
    return (
        <div className={ className ? className + ' soc-wrapper' : 'soc-wrapper'}>
          <div className='soc-icons'>
            <a target='_blank' href={Vars.github}>
                <i className='sm fab fa-github'></i>
                {/* <p className='icon-text'>awiggs</p> */}
              </a>
              <a target='_blank' href={Vars.instagram}>
                <i className='sm fab fa-instagram'></i>
                {/* <p className='icon-text'>a.wiggins.w</p> */}
              </a>
              <a target='_blank' href={Vars.linkedin}>
                <i className='sm fab fa-linkedin'></i>
                {/* <p className='icon-text'>/in/awiggs96</p> */}
              </a>
          </div>
          <div className='soc-location'>
            <a>
              <i className='sm fas fa-map-marker-alt'></i>
              <p className='icon-text'>Victoria, BC</p>
            </a>
          </div>
        </div>
    );
}