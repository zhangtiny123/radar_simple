var radarData = [
    {
        "category": "",
        "value": "1",
        "name": "grunt",
        "description": "已经被广泛使用的前端构建工具"
    },
    {
        "category": "",
        "value": "2",
        "name": "bower",
        "description": "前端js的依赖管理工具"
    },
    {
        "category": "",
        "value": "3",
        "name": "git",
        "description": "非常好用的代码版本管理工具，以及配套的非常好的代码托管和开源平台github"
    },
    {
        "category": "",
        "value": "4",
        "name": "maven",
        "description": "业界广泛使用的java构建工具，包含了最大的java依赖仓库maven repositories"
    },
    {
        "category": "",
        "value": "1",
        "name": "jenkins",
        "description": "持续集成和持续部署的的工具"
    },
    {
        "category": "",
        "value": "2",
        "name": "postman",
        "description": "在REST风格的web应用的开发中，用来测试API，分析request和response"
    },
    {
        "category": "",
        "value": "3",
        "name": "Citrix",
        "description": "远程桌面用作off-shore开发"
    },
    {
        "category": "",
        "value": "4",
        "name": "phantomjs",
        "description": "一个基于WebKit的服务器端 JavaScript API"
    },
    {
        "category": "",
        "value": "1",
        "name": "soapUI",
        "description": "一个用来测试web driver的工具"
    },
    {
        "category": "",
        "value": "3",
        "name": "npm",
        "description": "node 依赖管理工具"
    },
    {
        "category": "",
        "value": "6",
        "name": "GO CD",
        "description": "由ThoughtWorks打造的开源工具，可以快速可靠的将高质量的软件持续交付到生产环境中"
    },
    {
        "category": "",
        "value": "8",
        "name": "flyway",
        "description": "随着持续交付这样的技术更加主流，自动化数据库迁移已经成为许多团队的基本技能，flyway在这方面值得推荐，因为它具有迁移时的低摩擦性"
    },
    {
        "category": "",
        "value": "7",
        "name": "NoMachine or Cloud9 IDE",
        "description": "相比于Citrix，NoMachine or Cloud9 IDE将是更好的远程桌面的解决方案"
    },
    {
        "category": "",
        "value": "13",
        "name": "gulp",
        "description": "相比于grunt，在前端构建方面gulp有自己的优势"
    },
    {
        "category": "",
        "value": "12",
        "name": "gradle",
        "description": "虽然还是会用到maven仓库，但是gradle比起maven在很多方面有了改进，配置文件看起来清爽了很多"
    },
    {
        "category": "tools",
        "value": "17",
        "name": "docker",
        "description": "docker是一个开源应用容器，让开发者可以将应用和依赖全部打包到一个可移植的容器中，发布到任意Linux机器上"
    },
    {
        "category": "",
        "value": "1",
        "name": "spring-framework",
        "description": "spring框架"
    },
    {
        "category": "",
        "value": "2",
        "name": "AngularJs",
        "description": "google推出的前端框架，数据的双向绑定是其最大的特点"
    },
    {
        "category": "",
        "value": "3",
        "name": "jasmine",
        "description": "javascript的测试框架"
    },
    {
        "category": "",
        "value": "4",
        "name": "protractor",
        "description": "angular.js的e2e测试框架"
    },
    {
        "category": "",
        "value": "1",
        "name": "request",
        "description": "用来向服务器发送HTTP request"
    },
    {
        "category": "",
        "value": "2",
        "name": "html/css/less",
        "description": "前端基本的语言"
    },
    {
        "category": "",
        "value": "3",
        "name": "java",
        "description": "用作服务器后端的开发"
    },
    {
        "category": "",
        "value": "4",
        "name": "javascript",
        "description": "用作前端开发"
    },
    {
        "category": "",
        "value": "7",
        "name": "java8",
        "description": "用作服务器后端的开发,在java7的基础上增加了lambda演算等特性"
    },
    {
        "category": "",
        "value": "12",
        "name": "CoffeeScript",
        "description": "参照了ruby的风格，没有了花括号，但是CoffeeScript会通过编译器编译成标准的javascript"
    },
    {
        "category": "",
        "value": "13",
        "name": "react.js",
        "description": "用作服务器后端的开发"
    },
    {
        "category": "",
        "value": "12",
        "name": "Flight.js",
        "description": "Flight.js是一个极其轻量级的框架，只需要很少的工作量就能在DOM节点添加行为，它有事件驱动和基于组件的特点"
    },
    {
        "category": "language_framework",
        "value": "18",
        "name": "AngularJs 2.0",
        "description": "并没有提供一套从angular.js 1.x 迁移到angular.js 2.0的方法，并且还处在开发当中，时间也许会帮助更多的开发者接受它"
    },
    {
        "category": "",
        "value": "1",
        "name": "TDD",
        "description": "测试驱动开发，敏捷团队通常都采用这种方式来开发代码"
    },
    {
        "category": "",
        "value": "2",
        "name": "CI/CD",
        "description": "持续集成/持续交付，同样是敏捷方法中的核心部分，持续交付可运行的产品，就是持续创造价值"
    },
    {
        "category": "",
        "value": "3",
        "name": "responsive web design",
        "description": "响应式web设计，就是让我们设计的页面布局可以很好的适应各种设备，以及不同的尺寸"
    },
    {
        "category": "",
        "value": "4",
        "name": "REST without PUT",
        "description": "PUT可以完成的更新操作，可以使用POST发送数据，然后后台查找数据库修改，从而将命令和查找接口分离"
    },
    {
        "category": "",
        "value": "1",
        "name": "automatic deploy pipeline",
        "description": "建立pipeline，通过自动化部署工具将测试通过的应用自动部署到不同的产品环境"
    },
    {
        "category": "",
        "value": "2",
        "name": "domain service",
        "description": "软件开发越来越需要不同的领域只是，代码要越来越接近业务流程"
    },
    {
        "category": "",
        "value": "3",
        "name": "spring-test",
        "description": "spring提供的一套测试框架"
    },
    {
        "category": "",
        "value": "4",
        "name": "cors-filter",
        "description": "跨域资源共享的过滤"
    },
    {
        "category": "",
        "value": "3",
        "name": "solr",
        "description": "apache一个开源的搜索服务器"
    },
    {
        "category": "",
        "value": "4",
        "name": "现行CSS样式指南",
        "description": "styleguide保证合作开发过程中样式的一致性"
    },
    {
        "category": "",
        "value": "6",
        "name": "Structured logging",
        "description": "结构化日志记录"
    },
    {
        "category": "",
        "value": "7",
        "name": "云开发环境",
        "description": "将计算或者存储这些事都交给服务器去做，只需要一个远程桌面"
    },
    {
        "category": "",
        "value": "8",
        "name": "创建机器映像的构建管道",
        "description": "许多部署方式都需要为不同角色的服务器提供机器映像，比如应用服务器数据库服务器，以及反向代理服务器等。由于使用操作系统ISO和配置脚本从零开始构建机器映像可能需要大量时间，因此创建机器映像的构建管道将很有用"
    },
    {
        "category": "",
        "value": "7",
        "name": "定制服务模板",
        "description": "定制服务模板用于快速植入新服务，进行预先配置，从而对组织的生产环境进行维护。该模板包含一组默认的决策"
    },
    {
        "category": "",
        "value": "8",
        "name": "canary build",
        "description": "为了确保构建过程可被重现,我们总是与固定版本 的外部依赖进行集成。但这就意味着我们与这些类库的新版本集 成并不及时,这将导致后面大量的合并工作。我们见到的避免这 个问题的方式之一是夜间的 Canary Build,它会尝试使用所有 外部依赖的最新版本进行构建。如果成功,就代表我们可以将外 部依赖修改为相应的版本。"
    },
    {
        "category": "",
        "value": "12",
        "name": "基于属性的单元测试",
        "description": "此实践运用数据生成器并基于所定义的有效范围来创建随机输入。它允许您快速检查边界状况和其他意外故障模式，而且它对多种平台的支持也正在迅速发展"
    },
    {
        "category": "",
        "value": "13",
        "name": "append-only data store",
        "description": "因为有像 Clojure 这样的函数式编程语言的默认支持,不可变数 据结构 (Immutable data structures) 开始变得越来越流行。“不 可变性”使得代码更容易被写、读和理解。使用“只追加”式的 数据存储 append-only data store 同样带给数据库层面一些这 方面的优点,同时也使得审计和历史查询更加简单"
    },
    {
        "category": "",
        "value": "17",
        "name": "DevOps作为一个团队",
        "description": "DevOps不是一个工作角色，而是一种旨在鼓励运维专家和开发人员紧密协作的文化运动。我们建议您不要创建这样一个独立团队，那可能会让您吞下康威定律引发的苦果，而应该将这些技术嵌入团队，通过消除摩擦来强化反馈回路，疏通沟通路径"
    },
    {
        "category": "tech",
        "value": "18",
        "name": "测试作为独立的组织",
        "description": "采用独立的QA团队会减慢反馈的速度，忘记”我们“的观念，代之以”我们和他们“的观念，让软件质量提升变得更为困难。测试应该是一个紧密集成的活动，团队不能对其进行外包。我们建议采用”一体化团队“，让测试人员与开发人员紧密协作"
    },
    {
        "category": "",
        "value": "2",
        "name": "AWS",
        "description": "亚马逊云计算平台"
    },
    {
        "category": "",
        "value": "3",
        "name": "Oracle",
        "description": "oracle云平台"
    },
    {
        "category": "",
        "value": "12",
        "name": "coreOS",
        "description": "CoreOS 是一个被设计为运行大型的、可扩展的系统的 Linux 发 行版。部署在一个 CoreOS 实例上的所有应用程序都运行在单 独的 Docker 容器中,并且 CoreOS 还提供了一套工具来帮助管 理它们,包括 etcd —— 它们自己的分布式配置存储"
    },
    {
        "category": "platform",
        "value": "13",
        "name": "MarialDB",
        "description": "MariaDB是一个由社区开发的且仅支 持 GPL 软件许可的 MySQL 分支。它旨在保持开源的纯粹性, 在完全兼容 MySQL 的同时,又具有与之匹敌的竞争力"
    }
];