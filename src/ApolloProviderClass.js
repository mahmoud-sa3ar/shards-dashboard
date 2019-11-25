import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});


class ApolloProviderClass extends React.Component {
    render(){
        return (
            <ApolloProvider client={client}>
                {this.props.children}
            </ApolloProvider>
        );
    }
}

export default ApolloProviderClass;