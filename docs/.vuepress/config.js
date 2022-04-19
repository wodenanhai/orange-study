module.exports = {
    base: '/orange-study/', //基础虚拟路径
    dest: 'dist',
    /* 打包文件基础路径, 在命令所在目录下 */
    title: '模糊的大橙子', // 标题
    description: '路漫漫其修远兮，吾将上下而求索', // 标题下的描述
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.jpg'
        }]
    ],
    themeConfig: { // 主题配置
        logo: "/logo.jpg",
        nav: [{
                text: "主页",
                link: '/'
            },
            {
                text: "指南",
                link: '/guide/',
            },
            {
                text: "语言",
                items: [{
                        text: "Chinese",
                        link: "/language/chinese"
                    },
                    {
                        text: "English",
                        link: "/language/english"
                    }
                ]
            },
            {
                text: "拓展",
                link: 'https://www.baidu.com'
            },
        ],
        sidebarDepth: 2,
        sidebar: [ // 左侧导航
            {
                title: '指南',
                collapsable: false,
                path: "/guide/",
            }, {
                title: '一、关于插件',
                collapsable: false,
                children: [{
                    title: '初识插件',
                    children: [
                        '/guide/InstallComponents'
                    ]
                }]
            }, {
                title: '二、关于TypeScript',
                collapsable: false,
                children: [{
                    title: '初识TypeScript',
                    children: [
                        '/guide/TypeScript'
                    ]
                }]
            }
        ]
    }
}
