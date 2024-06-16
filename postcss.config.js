module.exports = {
    parser: require('postcss-comment'),
    plugins: [
        require('postcss-combine-media-query'), // メディアクエリの結合
        require('postcss-easy-import')({
            prefix: '_',
            extensions: ['.css'],
            glob: true
        }), // インポート
        require('postcss-flexbugs-fixes'), // flexバグ
        require('postcss-nested'), // ネスト用
        require('postcss-simple-vars'), // 変数用
        require('postcss-calc'), // calc
        require('postcss-functions')({
            functions: {
                getVw: function(size, viewport = 390) {
                    return (size / viewport) * 100 + 'vw';
                }
            }
        }),
        require('autoprefixer') // ベンダープレフィックスの追加
    ]
}

