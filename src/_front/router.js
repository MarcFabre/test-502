import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 

/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"bc8d8dfa-de3a-43e3-bed5-0b756a2b3872","homePageId":"ba6648dc-fa0d-42a2-ad60-fee817db2425","authPluginId":"6a64802c-52f8-4637-9932-580bf178aaa7","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true},{"lang":"fr","default":false,"isDefaultPath":false}],"background":{},"workflows":[{"id":"ab090fd0-e123-4e3d-a99f-6ad4c2b582ed","actions":{},"trigger":"onload-app"}],"pages":[{"id":"a6f4dd08-bde7-45df-a7a5-261148686c6d","linkId":"8e106f57-c664-4b2a-90e5-97bfc461d9d2","name":"Singup","folder":null,"paths":{"en":"home","fr":"accueil","default":"home"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"f639ed48-ed28-4da7-bf88-98a02d26968d","sectionTitle":"Login Section","linkId":"05b1c248-05c5-482e-95f3-ae9062468119"}],"pageUserGroups":[],"title":{"en":"Home Page","fr":"Page d'Accueil"},"meta":{"desc":{"en":"Home page","fr":"Page d'accueil"},"keywords":{"en":"Home, page","fr":"Accueil, page"},"socialDesc":{"en":"Home Page","fr":"Page d'Accueil"},"socialTitle":{"en":"Home Page","fr":"Page d'Accueil"}},"metaImage":"public/images/si7lskld38461.png?_wwcv=25"},{"id":"ba6648dc-fa0d-42a2-ad60-fee817db2425","linkId":"ba6648dc-fa0d-42a2-ad60-fee817db2425","name":"epmty","folder":null,"paths":{"en":"epmty/{{param|sefsef}}","default":"epmty/{{param|sefsef}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5daea74c-fe1f-4164-beae-e40d839976e6","sectionTitle":"Housing Marketplace Header","linkId":"9ce17730-d681-4417-b06a-b903fc19b7f5"},{"uid":"1cf1f48c-cb2b-4860-b008-f42ef2a0b4ee","sectionTitle":"Hero Search Section","linkId":"d4551dbd-4218-4684-a40a-6140446dd233"},{"uid":"1f8ca7ed-75e4-4c2c-85d6-6e5362aeb329","sectionTitle":"Featured Properties","linkId":"78f89b2d-cbce-40cc-a1a9-87910f79ed1d"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"54108bb4-413a-47d0-a0cc-51815c986a54","linkId":"54108bb4-413a-47d0-a0cc-51815c986a54","name":"Team","folder":"","paths":{"en":"team/{{param|cfdvxrv}}","fr":"","default":"team/{{param|cfdvxrv}}"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"350386ee-2f23-4157-be87-83b6cef68745","sectionTitle":"Dashboard Header","linkId":"6d6aa3c1-529b-4cae-9251-132ab54b15e9"}],"pageUserGroups":[],"title":{"en":"Our Team | Company Name","fr":"Notre Équipe | Company Name"},"meta":{"desc":{"en":"Meet our talented team of professionals dedicated to delivering excellence. Discover the experts and leaders behind our success.","fr":"Rencontrez notre équipe talentueuse de professionnels dédiés à l'excellence. Découvrez les experts et les leaders derrière notre succès."},"keywords":{"en":"team, leadership, professionals, experts, company team, management team, staff","fr":"équipe, leadership, professionnels, experts, équipe d'entreprise, équipe de direction, personnel"},"socialDesc":{"en":"Get to know the passionate professionals and industry experts driving innovation and excellence at our company.","fr":"Découvrez les professionnels passionnés et les experts de l'industrie qui stimulent l'innovation et l'excellence dans notre entreprise."},"socialTitle":{"en":"Meet Our Exceptional Team | Company Name","fr":"Rencontrez Notre Équipe Exceptionnelle | Company Name"}},"metaImage":""},{"id":"ce29182d-3cda-498f-86c2-185dccfec35e","linkId":"ce29182d-3cda-498f-86c2-185dccfec35e","name":"Home - NO REMOVE","folder":null,"paths":{"en":"home-copy","default":"home-copy"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"508ab822-efe8-4b31-b3b4-7ecaf3c77b3b","sectionTitle":"Navigation Bar","linkId":"e0c06d8a-dae3-42f5-b30c-d04a40232e78"},{"uid":"839d6f8e-574c-414a-929d-b62f3b97917b","sectionTitle":"Main Content","linkId":"ceec77f0-e03e-4521-8844-aec2453e10ad"}],"pageUserGroups":[],"title":{"en":"Home Page","fr":"Page d'Accueil"},"meta":{"desc":{"en":"Home page","fr":"Page d'accueil"},"keywords":{"en":"Home, page","fr":"Accueil, page"},"socialDesc":{"en":"Home Page","fr":"Page d'Accueil"},"socialTitle":{"en":"Home Page","fr":"Page d'Accueil"}},"metaImage":"public/images/si7lskld38461.png?_wwcv=25"},{"id":"3362b6be-f0fc-4bca-b196-c9df879bdf09","linkId":"3362b6be-f0fc-4bca-b196-c9df879bdf09","name":"Dashboard","folder":null,"paths":{"en":"dashboard","default":"dashboard"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"6a64802c-52f8-4637-9932-580bf178aaa7","name":"WeWeb Auth","namespace":"wewebAuth"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 25;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
