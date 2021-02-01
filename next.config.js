module.exports = {
    images: {
        domains: [
            'source.unsplash.com',
            's3-us-west-2.amazonaws.com',
            'd3t3ozftmdmh3i.cloudfront.net'
        ]
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    }
};
