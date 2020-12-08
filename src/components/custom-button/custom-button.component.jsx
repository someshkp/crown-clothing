import React from 'react';

import './custom-button.styles.scss';

const CoustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) => (
    <button className={` ${inverted ?'inverted':''}    ${isGoogleSignIn ?'google-sign-in':''} custom-button`} {...otherProps}>
       {children}
    </button>
);

export default CoustomButton;