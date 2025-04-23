process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"en","title":"","cacheVersion":16,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dbdf6bd3-90fc-4421-9c6b-c1681585151b.localhost.3160/"},{"rel":"alternate","hreflang":"en","href":"https://dbdf6bd3-90fc-4421-9c6b-c1681585151b.localhost.3160/"}],"chunks":["chunk-vendors","chunk-common","index"]},"gpt-4-1":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./gpt-4-1/index.html","lang":"en","title":"","cacheVersion":16,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dbdf6bd3-90fc-4421-9c6b-c1681585151b.localhost.3160/gpt-4-1/"},{"rel":"alternate","hreflang":"en","href":"https://dbdf6bd3-90fc-4421-9c6b-c1681585151b.localhost.3160/gpt-4-1/"}],"chunks":["chunk-vendors","chunk-common","gpt-4-1"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
