/** Settings modal — every pane. Namespace: `settings`. */
export default {
  en: {
    nav: {
      general: 'General',
      models: 'Models',
      agent: 'Agent',
      hotkeys: 'Shortcuts',
      health: 'KB health',
      tools: 'Tools',
      git: 'Git & GitHub',
    },
    privacyNote:
      'API keys and tokens stay in this browser only — sent straight to the provider, never through any other server.',
    back: 'Back',
    addProfile: 'Add model',
    editProfile: 'Edit model',
    discardProfile:
      'This model has not been saved — it still needs an API key and a model name. Discard what you entered?',
    discardProfileTitle: 'Discard this model?',
    discard: 'Discard',

    // General
    language: 'Language',
    languageDesc:
      'Interface language. The agent answers in whatever language you write to it in — this is only what it falls back to when your message gives it nothing to go on.',
    appearance: 'Appearance',
    appearanceDesc:
      'Colour scheme. “System” follows your operating system. The theme icon at the bottom of the icon bar switches the same setting.',
    richEditor: 'Live rendering while editing',
    richEditorDesc:
      'Show headings at their size, hide the markdown symbols, and draw images, formulas and task boxes in place. The line your cursor is on always shows the plain text, so you edit exactly what is in the file. Turn this off to see the raw markdown everywhere.',

    // Profile editor
    labelOptional: 'Label (optional)',
    maxTokensLabel: 'Longest reply, in tokens (default {n})',
    reasoningLabel: 'Thinking effort (default: the provider decides)',
    reasoning: {
      none: 'Off',
      minimal: 'Minimal',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      xhigh: 'Very high',
    },
    defaultPlaceholder: 'Default',
    profileHelp:
      'No data is sent to us. The key stays in this browser and every request goes straight to the provider you pick. Choose one, paste its API key and the model name. Local models are supported too.',
    baseUrlHelp:
      'The API root, not one of its endpoints — /chat/completions and /images/generations are added for you.',
    baseUrlResolved: 'A chat request goes to',
    capabilities: 'What it can do',
    capability: {
      chat: 'Chat',
      vision: 'Reads images',
      image: 'Generates images',
    },

    // Models list
    profilesHeading: 'Model profiles',
    noProfiles:
      'No models yet. Add a key from any provider — it stays in this browser and goes straight to them, never through us.',
    badge: { primary: 'Primary', vision: 'Vision', image: 'Image' },
    slotsHeading: 'Model roles',
    slot: { primary: 'Primary', vision: 'Vision', image: 'Image generation' },
    notConfigured: 'Not set',
    notMarkedFor: 'Not marked for this',
    markTitle: 'Use it for this role?',
    mark: 'Use and mark it',
    markConfirm: {
      chat: '“{label}” is not marked as a chat model. Use it as the primary anyway, and mark it?',
      vision:
        '“{label}” is not marked as reading images. Use it for this role anyway, and mark it?',
      image:
        '“{label}” is not marked as generating images. Use it for this role anyway, and mark it?',
    },
    visionHelp:
      'Vision model optional. Leave it empty and, when your primary model reads pictures, the agent shows them to the primary itself. Set it to send anything that needs looking at to a different model instead.',
    imageHelp:
      'Image generation model optional. Set it and the agent can make pictures and save them into your knowledge base; leave it empty and it makes none.',

    // Agent behavior
    writeMode: 'Write mode',
    writeModeDesc:
      'In ask mode every write, edit and delete stops in the chat, shows exactly what would change, and waits for your click. Deleting a folder, or a picture, video or PDF, asks in both modes — nothing brings those back. Either way, what did change is listed in the “Agent changes” panel.',
    writeAuto: 'Write directly (review afterward)',
    writeAsk: 'Ask first (approve each time)',
    multiTab: 'Multi-tab chats',
    multiTabDesc:
      'Let the agent panel hold several chat tabs at once; off means a single chat. A running chat is not interrupted by switching or closing its tab — only the stop button, deleting the chat, or closing the page stops it.',
    maxTabs: 'Max tabs',

    // Hotkeys
    hotkeysHeading: 'Keyboard shortcuts',
    resetDefaults: 'Reset to defaults',
    recordingHint: 'Press the new combo, Esc to cancel',
    recordHint: 'Click to record a new binding',
    recording: 'Recording…',
    resetOne: 'Reset to default',
    hotkeysHelp:
      'Click a binding on the right, then press the new combo (must include ⌘/Ctrl). When ⌘N, ⌘M, ⌘` and friends are taken by the browser or system, use ⌥⌘N, ⌥⌘M, ⌃` for the same command. Changes save instantly.',
    needsModifier: 'A shortcut must include ⌘ or Ctrl',
    conflictsWith: 'Conflicts with “{label}” — pick another',

    // KB health scope
    healthScope: 'Scan scope',
    healthDesc:
      "What the health check skips. 'raw/' skips that folder and everything in it, 'AGENTS.md' skips that name wherever it sits, and '*' stands for part of a name. Everything else is checked.",
    ignorePlaceholder: 'Search files and folders to ignore…',
    ignoreAddPattern: 'Ignore “{pattern}” as a pattern',
    ignoredHeading: 'Ignored ({n})',
    ignoredRow: 'Skipped by the health check: {pattern}',
    ignoreReset: 'Reset to defaults',
    ignoreEmpty: 'Nothing ignored — the whole knowledge base is scanned.',
    ignoreRemove: 'Stop ignoring',

    // External tools — recommended catalog
    recommended: 'Recommended tools',
    bundledGroup: 'Bundled tools',
    bundledDesc:
      'These ship with the app and need no setup. Today that is web search and page reading; the set can grow.',
    connectionsGroup: 'Connections',
    connectionsDesc: 'Anything that reaches a service outside this browser.',
    connectTitle: 'Connect something',
    connectDesc:
      'Say what you want the agent to reach — a reading app, an API, a service you use. It will look up how that service works, build and test the tools, and ask you for anything only you can give (a key, an extension).',
    connectAction: 'Describe it to the agent',
    installed: 'Installed',
    installedDesc:
      'Everything the agent can reach right now — one row per integration. Open one to see the tools inside it.',
    sourcePreset: 'Preset',
    sourceYours: 'Yours',
    sourceKb: 'KB',
    kindExtension: 'Extension',
    backToTools: 'Tools',
    noneInstalled:
      'Nothing installed yet — switch something on above, or ask the agent for what you want to reach.',
    noToolsHere:
      'No tools reported. If this is an extension or a server, it may not be connected.',
    removeEntry: 'Remove',
    presetLockedHint:
      'This is a preset: its tools are defined by the app, so only the fields you have to supply are editable here.',
    serverUrl: 'Server URL',
    signIn: 'Sign in',
    signOut: 'Sign out',
    signingIn: 'Waiting for sign-in…',
    checkChecking: 'Checking…',
    checkOk: 'Connected — it answered just now.',
    checkFailed: 'Still not connected.',
    lmdConnect: {
      setupNeeded: 'Setup needed',
      setupOpen: 'Open setup for this extension',
      reload: 'Reload this page',
      recheck: 'Check again',
      connected: 'Connected — localmd Connect is answering this site.',
      notDetected:
        'Not answering on this page — it may not be installed or enabled, or that changed after the page loaded. The extension attaches to a page as it loads, so reload after installing.',
      extension: 'Extension {id}',
      presentButSilent:
        'It is on this page but not answering it. Reload; if that does not help, check it is enabled here.',
      setupTitle: 'Set up localmd Connect',
      step1: 'Install it, then reload this page.',
      storeLink: 'Chrome Web Store →',
      stepScripts:
        'Optional: turn on “Allow user scripts” in its popup — only site scripts need it.',
      confirmNote:
        'Anything that could change a real site asks first, on a card in the chat. Site scripts can be paused or removed in the extension popup.',
    },
    advanced: 'Advanced',
    advancedDesc:
      'Build an integration by hand, if you would rather not have the agent do it.',
    customToolsDesc:
      'A tool is one HTTP request — URL template, parameters, and how to shape the response. The agent can build these for you; this editor is for doing it by hand.',
    addManually: 'Write a tool by hand',
    newToolTitle: 'New tool',
    editToolTitle: 'Edit tool',
    serversDesc:
      'A separate program (MCP) that contributes a whole bundle of tools at once, rather than a single request.',
    addServer: 'Add an MCP server',
    newServerTitle: 'New MCP server',
    editServerTitle: 'Edit MCP server',
    keys: 'Keys',
    keysDesc:
      'Keys the tools you installed need. They stay in this browser and are never shown to the agent — it knows a key by name only, so it can tell you which one is missing without seeing it.',
    getKey: 'Get one →',
    keyUsedBy: 'Read by {tools}',
    agentToolPrompt:
      'I need a new tool. Here is what it should do (which service, what I want back):\n\n',
    catalogFeatured: 'Start here',
    catalogNotConnected: 'not connected',
    catalogLearnMore: 'Learn more →',
    catalogRepo: 'Docs and source on GitHub',
    catalog: {
      'localmd-connect': {
        title: 'localmd Connect browser extension',
        desc: 'Your logged-in Chrome as agent tools: read pages, click and type, search, and open sites you are signed in to — including the many that a web page cannot reach on its own. Plus, experimental for now: site scripts that fix a page on every visit. Anything that posts to a real site or injects code asks you first.',
      },
      jina: {
        title: 'Jina web tools (web_search, web_fetch)',
        desc: 'Keyless web search and page reading through Jina AI Reader. Light, quick answers, and the only web access that keeps working when a server connection does not. No login or cookies, so sign-in walls and heavy bot protection will fail.',
      },
      parallel: {
        title: 'Parallel web search',
        desc: 'Web search and page extraction built for agents, keyless. Takes what you are trying to find out rather than just keywords, and returns long quotable excerpts — better answers than the Jina pack, and a fair slice of the chat to hold them.',
      },
    },

    helpLink: 'How tools work, and where they are stored →',

    // KB-carried tools
    kbToolsTitle: 'This knowledge base carries tools',
    kbToolsDesc:
      'Its .agents/tools.json defines the tools below. They came with the folder, so they stay off until you approve them. Check where each one sends data first.',
    kbToolsApprove: 'Approve these tools',
    kbToolsUsesKeys: 'reads your saved key: {ids}',

    // Custom tools
    kbToolHint:
      "Defined by this knowledge base's .agents/tools.json — ask the agent to change or remove it.",
    toolName: 'Name (as the agent calls it)',
    toolNameTaken: 'That name is already taken by another tool.',
    toolTransport: 'Send through',
    transportAuto: 'Auto (direct, then the browser extension)',
    transportDirect: 'Direct only',
    transportExtension: 'Browser extension only',
    toolDescription: 'Description',
    toolDescriptionPlaceholder:
      'What it does and when the agent should reach for it.',
    toolUrl: 'Request',
    toolUrlHelp:
      'Use {{param}} for a parameter and {{secret:id}} for a stored key. Must be https, and the host cannot contain a placeholder — a tool always talks to the server you approved.',
    toolParams: 'Parameters',
    addParam: '+ Add',
    paramDescription: 'What to pass (the agent reads this)',
    paramRequired: 'Required',
    toolHeaders: 'Headers (one per line)',
    toolBody: 'Body',
    toolResponse: 'Response',
    toolResponseHelp:
      'text returns the body as-is. json picks a list and renders each item with your template — do use it: a raw JSON payload can cost thousands of tokens per call.',
    toolSecretsNote:
      'Uses stored keys: {ids}. Add their values above, on the entry that owns them.',
    toolTest: 'Test with:',
    toolRunTest: 'Run test',
    toolTesting: 'Running…',
    toolTestChars: 'Result: {n} characters — this is what the agent sees.',
    toolInvalid: 'Needs a name and an https URL.',

    reconnect: 'Reconnect',
    status: {
      off: 'Disabled',
      connecting: 'Connecting…',
      failed: 'Connection failed',
      nTools: '{n} tools',
      oneTool: '1 tool',
    },
    kbServerTitle:
      "From the knowledge base's .agents/mcp.json — edit that file to change it",
    enable: 'Enable',
    disable: 'Disable (keep config)',
    editingServer: 'Editing “{name}”',
    namePlaceholder: 'Name',
    urlPlaceholder: 'https://…/mcp',
    serverUrlInvalid:
      'Needs an http(s) address — this field takes an MCP endpoint.',
    tokenPlaceholder: 'token (optional)',
    serverViaExtension: 'Reach it through the browser extension',
    serverViaExtensionHint:
      "Turn this on when the server won't talk to a web page. Most hosted MCP servers refuse browsers outright; the browser extension (localmd Connect) fetches on this page's behalf and is not bound by that.",
    serverViaExtensionMissing:
      'No browser extension is connected — this server cannot start until localmd Connect is.',
    toolsHelp:
      'Some servers refuse to answer a web page directly; those work through the browser extension instead. This is the global list — a knowledge base can also carry its own in .agents/mcp.json, which travels with it (keep tokens here, not in that file). Whatever a server returns is treated as untrusted.',

    // Git & GitHub
    gitHeading: 'Version history for your folder',
    gitDesc:
      'Optional. Turn the folder into a git repository and every change becomes a point you can go back to — the app commits from the git panel, and nothing is sent anywhere by doing so. Add a GitHub token as well and the same panel can push and pull, which is how a knowledge base moves between machines, or gets a backup that is not this browser.',
    commitAuthor: 'Commit author name',
    commitAuthorPlaceholder: '(defaults to the repo git config)',
    commitEmail: 'Commit email',
    githubToken:
      'GitHub token (needed to push; not required to pull public repos)',
    githubTokenLink: 'Create a fine-grained token here ↗',
    githubHelp:
      ': set Repository access to Only select repositories (just your KB repo), Permissions → Contents to Read and write, then paste the github_pat_… into the field above.',
  },
  zh: {
    nav: {
      general: '通用',
      models: '模型',
      agent: 'Agent',
      hotkeys: '快捷键',
      health: 'KB 健康',
      tools: '外部工具',
      git: 'Git & GitHub',
    },
    privacyNote:
      'API key 与 token 只存在本浏览器，直连服务商，不经其他服务器。',
    back: '返回',
    addProfile: '添加模型',
    editProfile: '编辑模型',
    discardProfile:
      '这个模型还没保存——它还缺 API key 和模型名。要丢弃已填的内容吗？',
    discardProfileTitle: '丢弃这个模型？',
    discard: '丢弃',

    // General
    language: '语言',
    languageDesc:
      '界面语言。agent 用你跟它说话的语言回答——这个设置只是在你的消息无从判断时的兜底。',
    appearance: '外观',
    appearanceDesc:
      '配色方案。「跟随系统」跟着操作系统走。图标栏底部的主题图标切换的是同一个设置。',
    richEditor: '编辑时实时渲染',
    richEditorDesc:
      '标题按级别显示字号，markdown 符号隐藏起来，图片、公式和任务框就地画出来。光标所在的那一行永远显示纯文本，所以你改的就是文件里的东西。关掉它则处处显示原始 markdown。',

    // Profile editor
    labelOptional: 'Label（可选）',
    maxTokensLabel: '单次回复的 token 上限（默认 {n}）',
    reasoningLabel: '思考强度（默认：由厂商决定）',
    reasoning: {
      none: '关闭',
      minimal: '极低',
      low: '低',
      medium: '中',
      high: '高',
      xhigh: '很高',
    },
    defaultPlaceholder: '默认',
    profileHelp:
      '不会有任何数据发给我们。key 只存在这个浏览器里，请求直连你选的厂商。选好厂商，填上 API key 和模型名。支持本地模型。',
    baseUrlHelp:
      '填 API 根地址，不要填具体端点 —— /chat/completions 和 /images/generations 会自动接上。',
    baseUrlResolved: '对话请求会发到',
    capabilities: '这个模型能做什么',
    capability: { chat: '对话', vision: '能看图', image: '能生图' },

    // Models list
    profilesHeading: '模型 Profiles',
    noProfiles:
      '还没有模型。加一个任意厂商的 key —— 它只存在这个浏览器里，直接发给厂商，不经过我们。',
    badge: { primary: '主模型', vision: '视觉', image: '图像' },
    slotsHeading: '模型分工',
    slot: { primary: '主模型', vision: '视觉理解', image: '图像生成' },
    notConfigured: '未配置',
    notMarkedFor: '未标记为可做这件事',
    markTitle: '用它来担这个角色？',
    mark: '使用并标记',
    markConfirm: {
      chat: '「{label}」没有标记为对话模型。仍然把它设为主模型，并标记上吗？',
      vision: '「{label}」没有标记为能看图。仍然用它填这个角色，并标记上吗？',
      image: '「{label}」没有标记为能生图。仍然用它填这个角色，并标记上吗？',
    },
    visionHelp:
      '视觉理解模型可选。留空时，只要主模型自己能看图，agent 需要看图就直接交给主模型。也可以在这里单独指定一个视觉理解模型，需要看图时改用它。',
    imageHelp:
      '图像生成模型可选。配好之后 agent 就能生成图片并存进知识库；留空则不会生成图片。',

    // Agent behavior
    writeMode: '写入模式',
    writeModeDesc:
      '「先询问」模式下，每次写入、修改、删除都会停在聊天里，把要改什么摆给你看，等你点确认。删除文件夹，或者图片、视频、PDF，两种模式下都会先问——那些删了找不回来。无论哪种模式，改过什么都列在 “Agent changes” 面板里。',
    writeAuto: '直接写入（事后审查）',
    writeAsk: '先询问（每次批准）',
    multiTab: '多标签页对话',
    multiTabDesc:
      '允许 agent 面板同时开多个对话标签；关闭时最多一个对话。运行中的对话，切换标签或关闭它的标签都不会中断——只有输入框的 stop 按钮、删除对话或关闭网页才会停止。',
    maxTabs: '最多标签数',

    // Hotkeys
    hotkeysHeading: '键盘快捷键',
    resetDefaults: '恢复默认',
    recordingHint: '按下新组合键，Esc 取消',
    recordHint: '点击后录制新键位',
    recording: '录制中…',
    resetOne: '重置为默认',
    hotkeysHelp:
      '点击右侧键位后按下新组合键（需含 ⌘/Ctrl）。⌘N、⌘M、⌘` 等被浏览器或系统占用时，改用 ⌥⌘N、⌥⌘M、⌃` 触发同一命令。改动即时保存。',
    needsModifier: '快捷键需配合 ⌘ 或 Ctrl',
    conflictsWith: '与「{label}」冲突，请换一个',

    // KB health scope
    healthScope: '检测范围',
    healthDesc:
      '健康检查跳过哪些内容。「raw/」跳过整个目录；「AGENTS.md」跳过任意位置的同名文件；「*」代表名字里的一段。其余都会检查。',
    ignorePlaceholder: '搜索要忽略的文件或目录……',
    ignoreAddPattern: '把「{pattern}」作为规则加入',
    ignoredHeading: '已忽略（{n}）',
    ignoredRow: '健康检查会跳过：{pattern}',
    ignoreReset: '恢复默认',
    ignoreEmpty: '没有忽略任何内容——整个知识库都会被检测。',
    ignoreRemove: '取消忽略',

    // External tools — recommended catalog
    recommended: '推荐工具',
    bundledGroup: '自带工具',
    bundledDesc:
      '随应用附带，开箱即用。目前是网页搜索和读网页；这个集合以后会变多。',
    connectionsGroup: '外部接入',
    connectionsDesc: '所有连到这个浏览器之外的服务的能力。',
    connectTitle: '接入一个服务',
    connectDesc:
      '说出你想让 agent 够到什么 —— 一个阅读应用、一个 API、你常用的某个服务。它会去查这个服务怎么用，建好工具并测通，需要你提供的东西（密钥、扩展）会来问你。',
    connectAction: '描述给 agent',
    installed: '已安装',
    installedDesc:
      '当前 agent 能用到的全部能力，一行一个集成。点开可以看到里面具体有哪些工具。',
    sourcePreset: '预设',
    sourceYours: '你的',
    sourceKb: 'KB',
    kindExtension: '扩展',
    backToTools: '工具',
    noneInstalled:
      '还没装任何工具 —— 把上面的开关打开，或者直接告诉 agent 你想接什么。',
    noToolsHere: '没有报告任何工具。如果这是扩展或服务器，可能尚未连接。',
    removeEntry: '移除',
    presetLockedHint:
      '这是预设项：它的工具由应用定义，所以这里只能改你必须自己填的字段。',
    serverUrl: '服务器 URL',
    signIn: '登录',
    signOut: '退出登录',
    signingIn: '等待登录…',
    checkChecking: '检测中…',
    checkOk: '已连接 —— 刚刚响应了。',
    checkFailed: '仍未连上。',
    lmdConnect: {
      setupNeeded: '需要设置',
      setupOpen: '打开这个扩展的设置页',
      reload: '刷新本页',
      recheck: '重新检测',
      connected: '已连接 —— localmd Connect 正在响应本站。',
      notDetected:
        '本页上没有响应 —— 可能没安装或没启用，也可能是本页加载之后才变的。扩展是在页面加载那一刻接入的，所以装好后刷新一次。',
      extension: '扩展 {id}',
      presentButSilent:
        '它在本页上，但不响应。刷新试试；还不行就看看它在这里是否启用。',
      setupTitle: '设置 localmd Connect',
      step1: '安装扩展，然后刷新本页。',
      storeLink: 'Chrome 应用商店 →',
      stepScripts:
        '可选：在它的弹窗里打开「Allow user scripts」—— 只有站点脚本需要它。',
      confirmNote:
        '任何可能改动真实网站的操作，都会先在聊天里停在一张确认卡片上。站点脚本可以在扩展弹窗里暂停或删除。',
    },
    advanced: '高级',
    advancedDesc: '手动搭一个集成 —— 如果你不想让 agent 代劳的话。',
    customToolsDesc:
      '一个工具就是一次 HTTP 请求 —— URL 模板、参数、响应怎么裁剪。这些 agent 都能帮你生成；这个编辑器用于手写。',
    addManually: '手动写一个工具',
    newToolTitle: '新建工具',
    editToolTitle: '编辑工具',
    serversDesc:
      '一个独立的程序（MCP），一次性提供一整组工具，而不是单次请求。',
    addServer: '添加 MCP 服务器',
    newServerTitle: '新建 MCP 服务器',
    editServerTitle: '编辑 MCP 服务器',
    keys: '密钥',
    keysDesc:
      '你装的那些工具需要的 key。它们只存在这个浏览器里，agent 看不到 —— 它只知道 key 的名字，所以能告诉你缺哪一个，却看不到内容。',
    getKey: '去获取 →',
    keyUsedBy: '被这些工具读取：{tools}',
    agentToolPrompt:
      '我需要一个新工具。它应该做的是（哪个服务、我想拿到什么）：\n\n',
    catalogFeatured: '首选',
    catalogNotConnected: '未连接',
    catalogLearnMore: '了解更多 →',
    catalogRepo: 'GitHub 上的文档与源码',
    catalog: {
      'localmd-connect': {
        title: 'localmd Connect 浏览器扩展',
        desc: '把你已登录的 Chrome 变成 agent 的工具：读网页、点击输入、搜索、打开你已登录的站点 —— 包括很多网页本身够不着的地方。另有一项目前仍是实验性的能力：每次打开页面自动生效的站点脚本。任何会向真实网站发内容或注入代码的操作都会先问你。',
      },
      jina: {
        title: 'Jina 网页工具 (web_search、web_fetch)',
        desc: '通过 Jina AI Reader 实现免 key 的网页搜索与正文抓取。不带登录态和 cookie，登录墙和强反爬页面会失败，但无需安装任何东西。',
      },
      parallel: {
        title: 'Parallel 联网搜索',
        desc: '为 agent 做的联网搜索和网页提取，免 key。比上面的 Jina 更强 —— 它接收的是「你想查清什么」而不只是关键词 —— 返回的摘录长且可直接引用，所以会占掉对话里不小的一块。',
      },
    },

    helpLink: '工具是怎么回事、都存在哪里 →',

    // KB-carried tools
    kbToolsTitle: '这个知识库自带工具',
    kbToolsDesc:
      '它的 .agents/tools.json 定义了下列工具。它们是跟着文件夹一起来的，所以在你确认之前不会启用。请先看清每个工具会把数据发到哪里。',
    kbToolsApprove: '确认启用这些工具',
    kbToolsUsesKeys: '会读取你已保存的密钥：{ids}',

    // Custom tools
    kbToolHint:
      '由这个知识库的 .agents/tools.json 定义 —— 要改或删，跟 agent 说。',
    toolName: '名称（agent 调用时使用）',
    toolNameTaken: '这个名称已被其他工具占用。',
    toolTransport: '请求通道',
    transportAuto: '自动（先直连，失败走浏览器扩展）',
    transportDirect: '仅直连',
    transportExtension: '仅浏览器扩展',
    toolDescription: '描述',
    toolDescriptionPlaceholder: '这个工具做什么、agent 什么时候该用它。',
    toolUrl: '请求',
    toolUrlHelp:
      '用 {{参数名}} 插入参数，用 {{secret:id}} 插入已保存的密钥。必须是 https，且域名部分不能含占位符 —— 工具只会访问你确认过的那台服务器。',
    toolParams: '参数',
    addParam: '+ 添加',
    paramDescription: '该传什么（agent 会读这段）',
    paramRequired: '必填',
    toolHeaders: '请求头（每行一条）',
    toolBody: '请求体',
    toolResponse: '响应处理',
    toolResponseHelp:
      'text 原样返回响应体。json 会取出一个列表并用你的模板渲染每一项 —— 建议用它：原始 JSON 一次调用就可能消耗几千 token。',
    toolSecretsNote:
      '使用了已保存的密钥：{ids}。请在上方拥有它们的条目里填写。',
    toolTest: '测试参数：',
    toolRunTest: '运行测试',
    toolTesting: '运行中…',
    toolTestChars: '结果 {n} 个字符 —— 这就是 agent 看到的内容。',
    toolInvalid: '需要填写名称和 https URL。',

    reconnect: '重连',
    status: {
      off: '已停用',
      connecting: '连接中…',
      failed: '连接失败',
      nTools: '{n} 个工具',
      oneTool: '1 个工具',
    },
    kbServerTitle: '来自知识库的 .agents/mcp.json — 编辑该文件修改',
    enable: '启用',
    disable: '停用（保留配置）',
    editingServer: '正在编辑「{name}」',
    namePlaceholder: '名称',
    urlPlaceholder: 'https://…/mcp',
    serverUrlInvalid: '需要一个 http(s) 地址 —— 这里填的是 MCP 端点。',
    tokenPlaceholder: 'token（可选）',
    serverViaExtension: '通过浏览器扩展连接',
    serverViaExtensionHint:
      '当这个服务器不接受网页直接访问时打开它。大多数托管的 MCP 服务器都直接拒绝浏览器；浏览器扩展（localmd Connect）会代替本页去取，不受这条限制。',
    serverViaExtensionMissing:
      '浏览器扩展未连接 —— 在 localmd Connect 连上之前这个服务器起不来。',
    toolsHelp:
      '有些服务器不接受网页直连，那种就走浏览器扩展。这里是全局列表；知识库也可以自带一份 .agents/mcp.json 跟着走（token 建议放这里，别写进那个文件）。服务器返回的内容一律按不可信处理。',

    // Git & GitHub
    gitHeading: '给文件夹留一份历史',
    gitDesc:
      '可选。把文件夹变成一个 git 仓库，每次改动就成了一个可以回去的点 —— 提交在 git 面板里做，这一步不会把任何东西发到外面。再填一个 GitHub token，同一个面板就能 push 和 pull，知识库靠这个在多台机器之间流转，也靠这个拿到一份不在浏览器里的备份。',
    commitAuthor: 'Commit 作者名',
    commitAuthorPlaceholder: '（默认读仓库 git config）',
    commitEmail: 'Commit 邮箱',
    githubToken: 'GitHub Token（push 需要；pull 公开仓库可不填）',
    githubTokenLink: '点这里创建 Fine-grained token ↗',
    githubHelp:
      '：Repository access 选 Only select repositories（只勾知识库仓库），Permissions → Contents 设为 Read and write，生成后把 github_pat_… 粘贴到上面。',
  },
  ru: {
    nav: {
      general: 'Общие',
      models: 'Модели',
      agent: 'Агент',
      hotkeys: 'Горячие клавиши',
      health: 'Здоровье БЗ',
      tools: 'Инструменты',
      git: 'Git и GitHub',
    },
    privacyNote:
      'API-ключи и токены хранятся только в этом браузере — отправляются напрямую провайдеру, минуя любые другие серверы.',
    back: 'Назад',
    addProfile: 'Добавить модель',
    editProfile: 'Редактировать модель',
    discardProfile:
      'Эта модель ещё не сохранена — ей не хватает API-ключа и названия модели. Отбросить введённое?',
    discardProfileTitle: 'Отбросить эту модель?',
    discard: 'Отбросить',

    // General
    language: 'Язык',
    languageDesc:
      'Язык интерфейса. Агент отвечает на том языке, на котором вы к нему обращаетесь, — это лишь запасной вариант на случай, когда из вашего сообщения ничего понять нельзя.',
    appearance: 'Оформление',
    appearanceDesc:
      'Цветовая схема. «Системная» следует за вашей операционной системой. Значок темы внизу панели значков переключает ту же настройку.',
    richEditor: 'Живой предпросмотр при редактировании',
    richEditorDesc:
      'Показывать заголовки их размером, прятать символы markdown, рисовать картинки, формулы и чекбоксы на месте. Строка под курсором всегда показывает обычный текст, так что вы редактируете ровно то, что лежит в файле. Выключите, чтобы везде видеть сырой markdown.',

    // Profile editor
    labelOptional: 'Название (необязательно)',
    maxTokensLabel: 'Самый длинный ответ, в токенах (по умолчанию {n})',
    reasoningLabel: 'Усилие на обдумывание (по умолчанию: решает провайдер)',
    reasoning: {
      none: 'Выкл',
      minimal: 'Минимальное',
      low: 'Низкое',
      medium: 'Среднее',
      high: 'Высокое',
      xhigh: 'Очень высокое',
    },
    defaultPlaceholder: 'По умолчанию',
    profileHelp:
      'Нам ничего не отправляется. Ключ остаётся в этом браузере, а каждый запрос идёт напрямую выбранному вами провайдеру. Выберите провайдера, вставьте его API-ключ и название модели. Локальные модели тоже поддерживаются.',
    baseUrlHelp:
      'Корень API, а не один из его endpoints, — /chat/completions и /images/generations добавятся сами.',
    baseUrlResolved: 'Запрос чата уйдёт на',
    capabilities: 'Что она умеет',
    capability: {
      chat: 'Чат',
      vision: 'Читает картинки',
      image: 'Создаёт картинки',
    },

    // Models list
    profilesHeading: 'Профили моделей',
    noProfiles:
      'Моделей пока нет. Добавьте ключ любого провайдера — он останется в этом браузере и пойдёт напрямую им, минуя нас.',
    badge: { primary: 'Основная', vision: 'Зрение', image: 'Картинки' },
    slotsHeading: 'Роли моделей',
    slot: { primary: 'Основная', vision: 'Зрение', image: 'Генерация картинок' },
    notConfigured: 'Не задано',
    notMarkedFor: 'Не отмечена для этого',
    markTitle: 'Использовать её для этой роли?',
    mark: 'Использовать и отметить',
    markConfirm: {
      chat: '«{label}» не отмечена как модель чата. Всё равно использовать как основную и отметить?',
      vision:
        '«{label}» не отмечена как читающая картинки. Всё равно использовать для этой роли и отметить?',
      image:
        '«{label}» не отмечена как создающая картинки. Всё равно использовать для этой роли и отметить?',
    },
    visionHelp:
      'Модель зрения необязательна. Оставьте пустым — и, когда основная модель умеет читать картинки, агент будет показывать их ей самой. Задайте её, чтобы всё, что нужно рассмотреть, отправлялось другой модели.',
    imageHelp:
      'Модель генерации картинок необязательна. Задайте её — и агент сможет делать картинки и сохранять их в вашу базу знаний; оставьте пустым — и делать не будет.',

    // Agent behavior
    writeMode: 'Режим записи',
    writeModeDesc:
      'В режиме «сначала спросить» каждая запись, правка и удаление останавливаются в чате, показывают ровно то, что изменится, и ждут вашего клика. Удаление папки, а также картинки, видео или PDF спрашивает в обоих режимах — их ничто не вернёт. В любом случае то, что изменилось, перечислено в панели «Agent changes».',
    writeAuto: 'Писать сразу (проверка после)',
    writeAsk: 'Сначала спросить (подтверждать каждый раз)',
    multiTab: 'Чаты во многих вкладках',
    multiTabDesc:
      'Разрешить панели агента держать несколько вкладок чатов сразу; выкл — значит один чат. Работающий чат не прерывается переключением или закрытием его вкладки — останавливают его только кнопка «стоп», удаление чата или закрытие страницы.',
    maxTabs: 'Макс. вкладок',

    // Hotkeys
    hotkeysHeading: 'Горячие клавиши',
    resetDefaults: 'Сбросить к умолчаниям',
    recordingHint: 'Нажмите новое сочетание, Esc — отмена',
    recordHint: 'Нажмите, чтобы записать новую привязку',
    recording: 'Запись…',
    resetOne: 'Сбросить к умолчанию',
    hotkeysHelp:
      'Нажмите привязку справа, затем нажмите новое сочетание (обязательно с ⌘/Ctrl). Когда ⌘N, ⌘M, ⌘` и подобные заняты браузером или системой, используйте ⌥⌘N, ⌥⌘M, ⌃` для той же команды. Изменения сохраняются сразу.',
    needsModifier: 'Сочетание должно включать ⌘ или Ctrl',
    conflictsWith: 'Конфликтует с «{label}» — выберите другое',

    // KB health scope
    healthScope: 'Область проверки',
    healthDesc:
      'Что пропускает проверка здоровья. «raw/» пропускает эту папку и всё в ней, «AGENTS.md» пропускает это имя где бы оно ни лежало, а «*» означает часть имени. Всё остальное проверяется.',
    ignorePlaceholder: 'Найти файлы и папки для игнорирования…',
    ignoreAddPattern: 'Игнорировать «{pattern}» как шаблон',
    ignoredHeading: 'Игнорируется ({n})',
    ignoredRow: 'Проверка здоровья пропустит: {pattern}',
    ignoreReset: 'Сбросить к умолчаниям',
    ignoreEmpty: 'Ничего не игнорируется — проверяется вся база знаний.',
    ignoreRemove: 'Не игнорировать',

    // External tools — recommended catalog
    recommended: 'Рекомендуемые инструменты',
    bundledGroup: 'Встроенные инструменты',
    bundledDesc:
      'Поставляются с приложением и не требуют настройки. Сегодня это веб-поиск и чтение страниц; набор может расти.',
    connectionsGroup: 'Подключения',
    connectionsDesc: 'Всё, что обращается к сервису за пределами этого браузера.',
    connectTitle: 'Подключить что-нибудь',
    connectDesc:
      'Скажите, до чего вы хотите дотянуться агенту, — приложение для чтения, API, сервис, которым вы пользуетесь. Он выяснит, как этот сервис устроен, соберёт и проверит инструменты и спросит у вас то, что можете дать только вы (ключ, расширение).',
    connectAction: 'Описать агенту',
    installed: 'Установлено',
    installedDesc:
      'Всё, до чего агент может дотянуться прямо сейчас, — по строке на интеграцию. Откройте строку, чтобы увидеть инструменты внутри.',
    sourcePreset: 'Пресет',
    sourceYours: 'Ваше',
    sourceKb: 'БЗ',
    kindExtension: 'Расширение',
    backToTools: 'Инструменты',
    noneInstalled:
      'Пока ничего не установлено — включите что-нибудь выше или попросите агента о том, до чего хотите дотянуться.',
    noToolsHere:
      'Инструментов не заявлено. Если это расширение или сервер, возможно, он не подключён.',
    removeEntry: 'Удалить',
    presetLockedHint:
      'Это пресет: его инструменты определены приложением, поэтому здесь редактируются только поля, которые вы обязаны заполнить сами.',
    serverUrl: 'URL сервера',
    signIn: 'Войти',
    signOut: 'Выйти',
    signingIn: 'Ожидание входа…',
    checkChecking: 'Проверка…',
    checkOk: 'Подключено — только что ответило.',
    checkFailed: 'По-прежнему не подключено.',
    lmdConnect: {
      setupNeeded: 'Нужна настройка',
      setupOpen: 'Открыть настройку этого расширения',
      reload: 'Перезагрузить эту страницу',
      recheck: 'Проверить снова',
      connected: 'Подключено — localmd Connect отвечает этому сайту.',
      notDetected:
        'На этой странице не отвечает — возможно, оно не установлено или выключено, или это изменилось после загрузки страницы. Расширение подключается к странице в момент её загрузки, поэтому после установки перезагрузитесь.',
      extension: 'Расширение {id}',
      presentButSilent:
        'Оно на этой странице, но не отвечает ей. Перезагрузитесь; если не поможет, проверьте, включено ли оно здесь.',
      setupTitle: 'Настроить localmd Connect',
      step1: 'Установите его, затем перезагрузите эту страницу.',
      storeLink: 'Chrome Web Store →',
      stepScripts:
        'Необязательно: включите «Allow user scripts» в его всплывающем окне — это нужно только скриптам сайтов.',
      confirmNote:
        'Всё, что может изменить реальный сайт, сначала спрашивает — карточкой в чате. Скрипты сайтов можно приостановить или удалить во всплывающем окне расширения.',
    },
    advanced: 'Продвинутое',
    advancedDesc:
      'Собрать интеграцию вручную, если не хотите поручать это агенту.',
    customToolsDesc:
      'Инструмент — это один HTTP-запрос: шаблон URL, параметры и то, как оформить ответ. Агент может собрать их за вас; этот редактор — для ручной работы.',
    addManually: 'Написать инструмент вручную',
    newToolTitle: 'Новый инструмент',
    editToolTitle: 'Редактировать инструмент',
    serversDesc:
      'Отдельная программа (MCP), которая сразу даёт целый набор инструментов, а не один запрос.',
    addServer: 'Добавить MCP-сервер',
    newServerTitle: 'Новый MCP-сервер',
    editServerTitle: 'Редактировать MCP-сервер',
    keys: 'Ключи',
    keysDesc:
      'Ключи, нужные установленным вами инструментам. Они хранятся в этом браузере и никогда не показываются агенту — он знает ключ только по имени, поэтому может сказать, какого не хватает, не видя его.',
    getKey: 'Получить →',
    keyUsedBy: 'Читают {tools}',
    agentToolPrompt:
      'Мне нужен новый инструмент. Вот что он должен делать (какой сервис, что я хочу получить):\n\n',
    catalogFeatured: 'Начните отсюда',
    catalogNotConnected: 'не подключено',
    catalogLearnMore: 'Подробнее →',
    catalogRepo: 'Доки и исходники на GitHub',
    catalog: {
      'localmd-connect': {
        title: 'Расширение браузера localmd Connect',
        desc: 'Ваш вошедший Chrome как инструменты агента: читать страницы, кликать и печатать, искать и открывать сайты, куда вы вошли, — включая многие, куда веб-страница сама по себе дотянуться не может. Плюс, пока экспериментально: скрипты сайтов, чинящие страницу при каждом визите. Всё, что публикует на реальном сайте или внедряет код, сначала спрашивает вас.',
      },
      jina: {
        title: 'Веб-инструменты Jina (web_search, web_fetch)',
        desc: 'Веб-поиск и чтение страниц без ключа через Jina AI Reader. Лёгкие, быстрые ответы — и единственный веб-доступ, который продолжает работать, когда соединение с сервером отсутствует. Без входа и cookies, поэтому стены входа и серьёзная бот-защита не пройдут.',
      },
      parallel: {
        title: 'Веб-поиск Parallel',
        desc: 'Веб-поиск и извлечение страниц, построенные для агентов, без ключа. Принимает то, что вы пытаетесь выяснить, а не просто ключевые слова, и возвращает длинные цитируемые отрывки — ответы лучше, чем у пакета Jina, и изрядный кусок чата под них.',
      },
    },

    helpLink: 'Как работают инструменты и где они хранятся →',

    // KB-carried tools
    kbToolsTitle: 'Эта база знаний несёт инструменты',
    kbToolsDesc:
      'Её .agents/tools.json определяет инструменты ниже. Они пришли вместе с папкой, поэтому выключены, пока вы их не одобрите. Сначала проверьте, куда каждый из них отправляет данные.',
    kbToolsApprove: 'Одобрить эти инструменты',
    kbToolsUsesKeys: 'читает ваш сохранённый ключ: {ids}',

    // Custom tools
    kbToolHint:
      'Определён файлом .agents/tools.json этой базы знаний — попросите агента изменить или удалить его.',
    toolName: 'Имя (так его вызывает агент)',
    toolNameTaken: 'Это имя уже занято другим инструментом.',
    toolTransport: 'Отправлять через',
    transportAuto: 'Авто (сначала напрямую, затем через расширение браузера)',
    transportDirect: 'Только напрямую',
    transportExtension: 'Только через расширение браузера',
    toolDescription: 'Описание',
    toolDescriptionPlaceholder:
      'Что он делает и когда агенту стоит к нему обращаться.',
    toolUrl: 'Запрос',
    toolUrlHelp:
      'Используйте {{param}} для параметра и {{secret:id}} для сохранённого ключа. Должен быть https, а хост не может содержать плейсхолдер — инструмент всегда говорит с сервером, который вы одобрили.',
    toolParams: 'Параметры',
    addParam: '+ Добавить',
    paramDescription: 'Что передать (агент читает это)',
    paramRequired: 'Обязательный',
    toolHeaders: 'Заголовки (по одному на строку)',
    toolBody: 'Тело',
    toolResponse: 'Ответ',
    toolResponseHelp:
      'text возвращает тело как есть. json забирает список и отрисовывает каждый элемент вашим шаблоном — используйте его: сырой JSON-пейлоад может стоить тысячи токенов за вызов.',
    toolSecretsNote:
      'Используются сохранённые ключи: {ids}. Добавьте их значения выше, в запись, которая ими владеет.',
    toolTest: 'Проверить на:',
    toolRunTest: 'Запустить проверку',
    toolTesting: 'Выполняется…',
    toolTestChars: 'Результат: {n} символов — именно это видит агент.',
    toolInvalid: 'Нужны имя и https-URL.',

    reconnect: 'Переподключить',
    status: {
      off: 'Выключено',
      connecting: 'Подключаюсь…',
      failed: 'Не удалось подключиться',
      nTools: 'Инструментов: {n}',
      oneTool: '1 инструмент',
    },
    kbServerTitle:
      'Из .agents/mcp.json базы знаний — меняйте правкой того файла',
    enable: 'Включить',
    disable: 'Выключить (сохранив настройки)',
    editingServer: 'Редактирование «{name}»',
    namePlaceholder: 'Имя',
    urlPlaceholder: 'https://…/mcp',
    serverUrlInvalid:
      'Нужен http(s)-адрес — в это поле вводится MCP-endpoint.',
    tokenPlaceholder: 'токен (необязательно)',
    serverViaExtension: 'Дотягиваться через расширение браузера',
    serverViaExtensionHint:
      'Включите, когда сервер не хочет говорить с веб-страницей. Большинство хостинговых MCP-серверов отказывают браузерам сразу; расширение браузера (localmd Connect) забирает данные от имени этой страницы и этим не связано.',
    serverViaExtensionMissing:
      'Расширение браузера не подключено — этот сервер не запустится, пока не подключён localmd Connect.',
    toolsHelp:
      'Некоторые серверы отказываются отвечать веб-странице напрямую; такие работают через расширение браузера. Это общий список — база знаний может нести и свой в .agents/mcp.json, который путешествует вместе с ней (токены держите здесь, а не в том файле). Всё, что возвращает сервер, считается недоверенным.',

    // Git & GitHub
    gitHeading: 'История версий вашей папки',
    gitDesc:
      'Необязательно. Превратите папку в git-репозиторий — и каждое изменение станет точкой, к которой можно вернуться: коммиты приложение делает из git-панели, и это никуда ничего не отправляет. Добавьте ещё и GitHub-токен — и та же панель сможет делать push и pull: так база знаний переезжает между машинами и получает резервную копию, которая не этот браузер.',
    commitAuthor: 'Имя автора коммитов',
    commitAuthorPlaceholder: '(по умолчанию — из git config репозитория)',
    commitEmail: 'Email для коммитов',
    githubToken:
      'GitHub-токен (нужен для push; для pull публичных репозиториев не нужен)',
    githubTokenLink: 'Создать fine-grained токен здесь ↗',
    githubHelp:
      ': Repository access поставьте Only select repositories (только репозиторий вашей БЗ), Permissions → Contents — Read and write, затем вставьте github_pat_… в поле выше.',
  },
};
