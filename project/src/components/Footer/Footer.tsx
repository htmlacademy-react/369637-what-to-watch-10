import React from 'react';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className='page-footer'>
      <Logo classNameModifier={'logo__link--ligh'} />
      <div className='copyright'>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
