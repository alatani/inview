## requsetAnimationFrame.js
`requestAnimationFrame`によるin-view検知です

この仕組だと、InView or Not-InView のbinaryの値のみが取得できて、hoge%可視みたいな値は計測できないみたいです。
その代わりcross-domain iframeでもsafariでも動きます。
環境によっては計測ミス(全部in-view扱いしちゃう)があるかも

