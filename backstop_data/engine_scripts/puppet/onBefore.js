module.exports = async (page, scenario, vp) => {
    await require('./loadCookies')(page, scenario);
    
    //UA設定
    if (vp.label === "phone") {
        page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1");
    } else {
        page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36");
    }
    
    //画像のスタブ置換
    // require('./interceptImages')(page, scenario);
};
