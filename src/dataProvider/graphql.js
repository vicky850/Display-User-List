import buildApolloClient from 'ra-data-graphql-simple';

export default () => {
    const getGqlResource = resource => {
        switch (resource) {
            case 'customers':
                return 'Customer';
            case 'products':
                return 'Product';
            default:
                throw new Error(`Unknown resource ${resource}`);
        }
    };

    return buildApolloClient({
        clientOptions: {
            uri: 'http://localhost:4000/graphql',
        },
    }).then(dataProvider => (type, resource, params) =>
        dataProvider(type, getGqlResource(resource), params)
    );
};
