//Higher Order Component (HOC) - A component that renders another component 


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info</h1>
        <p> The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private information please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
         {props.isAuthenticated ? (
             <WrappedComponent { ...props} />
         ) : (
             <p>Please login to view the info</p>
         )}
        
        </div>
    )
}



const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info = "These are the details" />, document.getElementById('app'));