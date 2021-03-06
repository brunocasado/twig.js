var Twig = Twig || requireUncached("../twig"),
    twig = twig || Twig.twig;

describe("Twig.js Embed ->", function() {
    // Test loading a template from a remote endpoint
    it("it should load embed and render", function() {
        twig({
            id:   'embed',
            path: 'test/templates/embed-simple.twig',
            async: false
        });
        // Load the template
        twig({ref: 'embed'}).render({ }).trim().should.equal( ['START',
                                                               'A',
                                                               'new header',
                                                               'base footer',
                                                               'B',
                                                               '',
                                                               'A',
                                                               'base header',
                                                               'base footer',
                                                               'extended',
                                                               'B',
                                                               '',
                                                               'A',
                                                               'base header',
                                                               'extended',
                                                               'base footer',
                                                               'extended',
                                                               'B',
                                                               '',
                                                               'A',
                                                               'Super cool new header',
                                                               'Cool footer',
                                                               'B',
                                                               'END'].join('\n') );
    });

    it("should skip an non existant embed flagged wth 'ignore missing'", function() {
        twig({
            id:   'embed-ignore-missing',
            path: 'test/templates/embed-ignore-missing.twig',
            async: false
        });

        twig({ref: 'embed-ignore-missing'}).render().should.equal( "ignore-missing" );
    });

});
