// Root layout component
import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            {/* Header could go here */}
            {children}
            {/* Footer could go here */}
        </div>
    );
};

export default Layout;