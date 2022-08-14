'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-practice documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' : 'data-target="#xs-controllers-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' :
                                            'id="xs-controllers-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' : 'data-target="#xs-injectables-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' :
                                        'id="xs-injectables-links-module-AppModule-dd9378010e0465539733faa0be10255daf6d342f02b6c78202dc5755f0a3080d4c5cdc5ad475e1cd9e26915825806d1d57ba9ee1776542180151ce7ee40a643b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' : 'data-target="#xs-controllers-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' :
                                            'id="xs-controllers-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' : 'data-target="#xs-injectables-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' :
                                        'id="xs-injectables-links-module-AuthModule-95fb44496ea74d3f811dfd4c3f518715b0a2183cc4f1ae34e4be1f06f92b7ac0e2a1e46cb417efdda8ca9ddcc3c9a1e72a9ecbf188e2fbdb1ca79db8bf3231c1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' : 'data-target="#xs-controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' :
                                            'id="xs-controllers-links-module-HealthModule-f36e1750a0323d8a7d6bca097e0bc20c3e35791b6d788201b37fbaf94d08b8a4f10c6064f64d1a0ae5e97cab5a4f34fa333ad4aa67ac3ceb7a0eef9f0c24a97e"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TodosModule.html" data-type="entity-link" >TodosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' : 'data-target="#xs-controllers-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' :
                                            'id="xs-controllers-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' }>
                                            <li class="link">
                                                <a href="controllers/TodosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' : 'data-target="#xs-injectables-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' :
                                        'id="xs-injectables-links-module-TodosModule-e4ef6baa4e7c7eb1241571fd9fbee39809493b2741507105f780dcdfecbffe8c66359670ec3af8040dbb07d9be6dac6c87a23391e3d680adf1f080b591ee5ca5"' }>
                                        <li class="link">
                                            <a href="injectables/TodosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' : 'data-target="#xs-controllers-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' :
                                            'id="xs-controllers-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' : 'data-target="#xs-injectables-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' :
                                        'id="xs-injectables-links-module-UsersModule-746054e23bdb26abf4957e77336dec4d3ef2b006b08672f065030a394e8681f5eb1fee89ac6267c9fe42c43a2a6ce871f64adb38cb768900de1c3eb38a6990a8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateTodoDto.html" data-type="entity-link" >CreateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/Todo.html" data-type="entity-link" >Todo</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoDto.html" data-type="entity-link" >UpdateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" >ResponseTransformInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});