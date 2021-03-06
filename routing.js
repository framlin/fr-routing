function configureRouter(router, builder) {

    function ciStyle(site, stylePath) {
        builder.ciStyle(this, site, stylePath);
    }

    function ciPartial(partialPath) {
        builder.ciPartial(this, partialPath);
    }

    function coArticle(site, articlePath) {
        builder.coArticle(this, site, articlePath);
    }

    function coImage(site, imagePath) {
        builder.coImage(this, site, imagePath);
    }

    function coAudio(site, articlePath) {
        builder.coAudio(this, site, articlePath);
    }

    function ciImage(imagePath) {
        builder.ciImage(this, imagePath);
    }

    function ciFont(fontPath) {
        builder.ciFont(this, fontPath);
    }

    //function lib(libPath) {
    //    builder.lib(this, libPath);
    //}
    //
    //function behave(behavePath) {
    //    builder.behave(this, behavePath);
    //}


    router.get('/co/:site/article/:path', coArticle);
    router.get('/co/:site/audio/:path', coAudio);
    router.get('/co/:site/images/:path', coImage);

    router.get('/ci/:site/style/:path', ciStyle);
    router.get('/ci/partial/:path', ciPartial);
    router.get('/ci/image/:path', ciImage);
    router.get('/ci/font/:path', ciFont);

    router.get('/disclaimer', builder.disclaimer);
    router.get('/impressum', builder.impressum);
    router.get('/about', builder.about);

    //router.get('/lib/:path', lib);
    //router.get('/behave/:path', behave);

    router.get('/', builder.home);

//---- LEGACY Routes ----------------------
    router.get('/index.html', builder.home);
//------------------------------------------
}


module.exports = {
    configure: configureRouter
};