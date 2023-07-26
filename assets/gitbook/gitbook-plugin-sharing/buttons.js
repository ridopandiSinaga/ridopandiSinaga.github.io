require(['gitbook', 'jquery'], function (gitbook, $) {
    var SITES = {
        'facebook': {
            'label': 'Facebook',
            'icon': 'fa fa-facebook',
            'onClick': function (e) {
                e.preventDefault();
                window.open();
            }
        },
        'twitter': {
            'label': 'Twitter',
            'icon': 'fa fa-twitter',
            'onClick': function (e) {
                e.preventDefault();
                window.open('https://twitter.com/ridopandi__');
            }
        },
        'github': {
            'label': 'Github',
            'icon': 'fa fa-github',
            'onClick': function (e) {
                e.preventDefault();
                window.open('https://github.com/ridopandiSinaga');
            }
        },
        'telegram': {
            'label': 'Telegram',
            'icon': 'fa fa-telegram',
            'onClick': function (e) {
                e.preventDefault();
                window.open('https://t.me');
            }
        },
        'gmail': {
            'label': 'Gmail',
            'icon': 'fa fa-envelope',
            'onClick': function (e) {
                e.preventDefault();
                window.open('mailto:ridosinaga037@gmail.com');
            }
        },
        // 'weibo': {
        //     'label': 'Weibo',
        //     'icon': 'fa fa-weibo',
        //     'onClick': function (e) {
        //         e.preventDefault();
        //         window.open('http://service.weibo.com/share/share.php?content=utf-8&url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title));
        //     }
        // },
        'instagram': {
            'label': 'Instagram',
            'icon': 'fa fa-instagram',
            'onClick': function (e) {
                e.preventDefault();
                window.open('http://www.instagram.com/ridopandi');
            }
        },
        'linkedin': {
            'label': 'LinkedIn',
            'icon': 'fa fa-linkedin',
            'onClick': function (e) {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/ridopandi-sinaga/");
            }
        }
    };



    gitbook.events.bind('start', function (e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function (id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // Direct actions to share
        $.each(SITES, function (sideId, site) {
            if (!opts[sideId]) return;

            var onClick = site.onClick;

            if (sideId === "github" && opts["github_link"] !== undefined && opts["github_link"] !== "") {
                onClick = function (e) {
                    e.preventDefault();
                    window.open(opts["github_link"]);
                }
            }
            if (sideId === "telegram" && opts["telegram_link"] !== undefined && opts["telegram_link"] !== "") {
                onClick = function (e) {
                    e.preventDefault();
                    window.open(opts["telegram_link"]);
                }
            }

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: onClick
            });
        });
    });
});
