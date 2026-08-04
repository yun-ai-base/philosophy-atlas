/* ============================================================
   思想史长卷 · 东方学派数据（7家，做深不做浅）
   ============================================================ */
window.SCHOOLS_EAST = [
  {
    id: 'confucianism',
    name: '儒家',
    en: 'Confucianism',
    civ: 'east',
    years: [-551, -238],
    era: '轴心时代',
    keyword: '仁 · 礼 · 德治',
    eraConditions: [
      { t: 'war', n: '礼崩乐坏·春秋战乱', how: '周天子失序，礼乐征伐自诸侯出，旧宗法秩序崩溃，需要一套不靠鬼神、不靠武力，而靠人自身修养重建秩序的答案' },
      { t: 'culture', n: '史官与《诗》《书》传统', how: '周代礼乐文明遗留的典籍，为孔子提供了"述而不作"的思想资源' }
    ],
    timeAsked: '礼崩乐坏、人欲横流的世界，靠什么重新把人联结成一个共同体？',
    withDisciplines: [
      { d: 'literature', dir: 'given', desc: '《诗经》被尊为经典，诗教传统使文学承载道德教化，开"文以载道"两千年先河' },
      { d: 'religion', dir: 'absorbed', desc: '回应墨家"天志"与原始鬼神信仰，"敬鬼神而远之"，把信仰重心从神转向人与道德' },
      { d: 'science', dir: 'absorbed', desc: '收纳《考工记》等工艺与天文乐律知识，礼制中蕴含着对器物秩序的系统理解' }
    ],
    lineage: [
      { role: 'founder', who: '孔子', note: '以仁释礼，开创私学与儒家' },
      { role: 'inherit', who: '曾子', note: '以孝传孔门，《大学》言格致诚正' },
      { role: 'inherit', who: '子思', note: '《中庸》发挥"天命之谓性"' },
      { role: 'inherit', who: '孟子', note: '性善论，仁政王道，民贵君轻' },
      { role: 'transcend', who: '荀子', note: '性恶论，把礼客观化制度化，转向外王' },
      { role: 'transcend', who: '程朱', note: '宋代理学，回应佛老，重建"天理"体系' },
      { role: 'transcend', who: '王阳明', note: '心学反拨理学，良知即天理' }
    ],
    doctrine: [
      { title: '仁', core: '人与人的共感与爱，是一切德性的根基', args: ['己所不欲，勿施于人', '克己复礼为仁', '仁者爱人'], influence: '奠定东亚伦理的核心，与基督教"爱邻如己"遥相呼应' },
      { title: '礼', core: '把仁落实为可践行的秩序、仪式与制度', args: ['不学礼，无以立', '君君臣臣，父父子子'], influence: '塑造东亚制度文明与日常生活的秩序感' },
      { title: '德治', core: '为政以德，执政者以身作则，民本为归', args: ['为政以德，譬如北辰', '民为贵，社稷次之，君为轻'], influence: '民本思想成为后世批评与约束君主制的思想资源' }
    ],
    relations: [
      { to: 'moism', type: 'reject', note: '墨家非儒：兼爱（无差等）对抗仁爱的差等，节葬对抗厚葬，明鬼对抗敬鬼神而远之' },
      { to: 'daoism', type: 'dialogue', note: '老庄指仁义是"大道废"的产物；儒道互补构成中国思想的阴阳双翼' },
      { to: 'legalism', type: 'reject', note: '法家以法术势对抗德治，韩非直斥儒者"以文乱法"' },
      { to: 'plato', type: 'resonance', note: '孔子与柏拉图都以"理想人格+理想国"回应乱世，都坚信教育能改造人' },
      { to: 'enlightenment', type: 'resonance', note: '伏尔泰曾借儒家"道德政治"批判欧洲教会，儒学首度成为启蒙的镜子' }
    ],
    interpretations: [
      { from: '冯友兰', view: '儒家是"道德底形上学"——由道德实践透显天理，境界说贯通宇宙与人生' },
      { from: '劳思光', view: '儒家精义在心性论，孔孟挺立"德性主体"，荀子为歧出，宋儒别有一脉' },
      { from: '李泽厚', view: '儒家是"实用理性"与"乐感文化"，不是宗教而是一种文化—心理结构' }
    ],
    quotes: [
      { text: '己所不欲，勿施于人。', src: '《论语·卫灵公》' },
      { text: '人而不仁，如礼何？人而不仁，如乐何？', src: '《论语·八佾》' },
      { text: '民为贵，社稷次之，君为轻。', src: '《孟子·尽心下》' }
    ],
    reception: '汉武帝时董仲舒"罢黜百家、独尊儒术"，儒家成为两千年帝制中国的官方纲常；晚清遭"打倒孔家店"的清算，20世纪新儒家（牟宗三、唐君毅）以康德、黑格尔重构儒学，使其走向世界',
    shipwreck: { sank: '秦火焚书坑儒，六经几绝', salvaged: '汉初凭口传与伏生壁藏《尚书》等残篇重见天日' }
  },
  {
    id: 'daoism',
    name: '道家',
    en: 'Daoism',
    civ: 'east',
    years: [-571, -280],
    era: '轴心时代',
    keyword: '道 · 无为 · 逍遥',
    eraConditions: [
      { t: 'war', n: '诸侯争霸·人生无常', how: '有为之政（变法、征战、苛法）越闹越乱，逼出对"有为"本身的怀疑' },
      { t: 'culture', n: '楚文化与隐逸传统', how: '南方楚地的巫文化与不仕传统，滋养了与北方礼乐迥异的思路' }
    ],
    timeAsked: '如果"治理"与"进步"本身就是病灶，人应当如何活着？',
    withDisciplines: [
      { d: 'literature', dir: 'given', desc: '道家言意之辨、大美不言，塑造中国艺术的留白、意境与"言有尽而意无穷"' },
      { d: 'science', dir: 'absorbed', desc: '吸收阴阳五行与自然知识，其宇宙论成为中医、气功与风水思想的哲学根基' },
      { d: 'religion', dir: 'given', desc: '道教以老子为教祖，《道德经》成为本土宗教的圣典' }
    ],
    lineage: [
      { role: 'founder', who: '老子', note: '《道德经》，道可道非常道' },
      { role: 'inherit', who: '庄子', note: '齐物逍遥，泯是非生死' },
      { role: 'transcend', who: '玄学', note: '魏晋以老庄注经，名教与自然之辨' },
      { role: 'transcend', who: '禅宗', note: '自然无为的精神渗入禅宗与文人画' }
    ],
    doctrine: [
      { title: '道', core: '宇宙的本源与法则，不可名、不可道', args: ['道可道，非常道', '道生一，一生二，二生三，三生万物'], influence: '开启中国最深刻的本体论，也影响西方海德格尔等' },
      { title: '无为', core: '不妄为、不越位，顺应万物本性而治', args: ['无为而无不为', '治大国若烹小鲜'], influence: '成为与儒家"有为"相对的另一种政治与人生哲学' },
      { title: '逍遥', core: '精神的绝对自由，与天地并生、与万物为一', args: ['至人无己，神人无功，圣人无名', '游刃有余'], influence: '塑造中国艺术与士人精神的超脱维度' }
    ],
    relations: [
      { to: 'confucianism', type: 'dialogue', note: '儒家救世、道家救身；儒道互补是中国思想的基本张力' },
      { to: 'chan', type: 'resonance', note: '禅宗"应无所住而生其心"与道家的自然无为深相呼应' },
      { to: 'nietzsche', type: 'resonance', note: '尼采重估一切价值、追求生命强力，与庄子"逍遥游"构成东西方两大超越路径' },
      { to: 'legalism', type: 'reject', note: '韩非借《老子》言"术"，把无为改造成君主的统治术，是对道家最深的背叛' }
    ],
    interpretations: [
      { from: '冯友兰', view: '道家由"负的方法"讲形上学——不说道是什么，而说它不是什么' },
      { from: '陈鼓应', view: '《老子》是"中国哲学的主干"，其宇宙论比儒家更接近本体论' },
      { from: '刘笑敢', view: '庄子是"有真人而后有真知"的生存哲学，逍遥不是逃避而是精神自由的实证' }
    ],
    quotes: [
      { text: '道可道，非常道；名可名，非常名。', src: '《道德经》第一章' },
      { text: '人法地，地法天，天法道，道法自然。', src: '《道德经》第二十五章' },
      { text: '天地与我并生，而万物与我为一。', src: '《庄子·齐物论》' }
    ],
    reception: '汉初黄老之学一度为统治术，魏晋玄学成为士人精神救赎；至今道家的"无为""自然"仍是中国艺术、生态思想与人生哲学的源头活水',
    shipwreck: { sank: '黄老被汉武帝罢黜后，道家一度退隐', salvaged: '魏晋玄学复兴之；近代又被重新译为"生态哲学"的东方先声' }
  },
  {
    id: 'moism',
    name: '墨家',
    en: 'Mohism',
    civ: 'east',
    years: [-468, -230],
    era: '轴心时代',
    keyword: '兼爱 · 尚贤 · 非攻',
    eraConditions: [
      { t: 'war', n: '战国兼并战争', how: '列国以兼并杀人为业，墨子出身工匠阶层，主张"非攻"，以组织化的弟子集团抗御侵略' },
      { t: 'culture', n: '礼教流于形式', how: '儒家之礼与厚葬靡费民力，墨家以实用与节俭反其道而行' }
    ],
    timeAsked: '当血缘之爱护不住百姓，为什么不能把"爱"推及天下所有人？',
    withDisciplines: [
      { d: 'science', dir: 'given', desc: '《墨经》讨论力学、光学（小孔成像）、几何与逻辑，是先秦唯一的科学传统' },
      { d: 'logic', dir: 'given', desc: '墨辩与西方三段论、印度因明并称世界三大逻辑体系' }
    ],
    lineage: [
      { role: 'founder', who: '墨翟', note: '兼爱、非攻、尚贤、节用，行侠仗义' },
      { role: 'inherit', who: '墨家巨子', note: '严密的组织化团体，赴汤蹈火在所不惜' },
      { role: 'transcend', who: '后期墨家', note: '《墨经》转向名辩与科学，成为先秦逻辑高峰' }
    ],
    doctrine: [
      { title: '兼爱', core: '爱无差等，视人若己，反对儒家的差等之爱', args: ['兼相爱，交相利', '天下兼相爱则治'], influence: '提出中国最早的平等主义伦理，与基督教博爱、功利主义交相辉映' },
      { title: '尚贤', core: '任人唯贤，不论出身，打破世卿世禄', args: ['虽在农与工肆之人，有能则举之'], influence: '早于西方文官制的平等用人之道' },
      { title: '非攻·节用', core: '反对一切侵略战争与靡费，逻辑与实测并举', args: ['非攻者，攻无罪也', '兴天下之利，除天下之害'], influence: '中国古代最彻底的反战与节俭主张' }
    ],
    relations: [
      { to: 'confucianism', type: 'reject', note: '非儒：兼爱反差等，节葬反厚葬，明鬼反敬而远之' },
      { to: 'utilitarianism', type: 'resonance', note: '"兴天下之利，除天下之害"是两千年后的"最大多数人的最大幸福"' },
      { to: 'atomism', type: 'resonance', note: '《墨经》对物质、运动、因果的分析，与德谟克利特的自然研究东西呼应' },
      { to: 'analytic', type: 'resonance', note: '墨辩之名实、同异、兼别，与弗雷格、罗素的逻辑关切惊人相似' }
    ],
    interpretations: [
      { from: '胡适', view: '墨家是"非儒的宗教的兼爱主义"，其名学可与希腊逻辑并观' },
      { from: '梁启超', view: '墨学是"中国平等思想的渊源"，兼爱即社会主义之先声' }
    ],
    quotes: [
      { text: '兼相爱，交相利。', src: '《墨子·兼爱中》' },
      { text: '官无常贵，而民无终贱。', src: '《墨子·尚贤上》' }
    ],
    reception: '墨家至秦汉即衰亡，思想一度湮灭；近代梁启超、胡适"整理国故"将其重新发掘，与西学对照，成为中国科学思想与平等思想的重要先声',
    shipwreck: { sank: '秦统一后墨者集团星散，两汉后墨学中绝', salvaged: '清代毕沅校注《墨子》，近代梁启超、胡适重估其价值，墨学"起死回生"' }
  },
  {
    id: 'legalism',
    name: '法家',
    en: 'Legalism',
    civ: 'east',
    years: [-390, -233],
    era: '轴心时代',
    keyword: '法 · 术 · 势',
    eraConditions: [
      { t: 'war', n: '战国变法竞赛', how: '诸侯以变法求强，商鞅、韩非把"强国"做成了一套冷峻的政治技术学' },
      { t: 'culture', n: '对礼治失效的彻底失望', how: '儒家的德治在现实政治中屡屡落空，法家索性主张"不务德而务法"' }
    ],
    timeAsked: '如果讲仁义救不了国，什么样的政治制度才能让弱国变强、让天下太平？',
    withDisciplines: [
      { d: 'political', dir: 'given', desc: '提出中国最早的现代性政治学：法治、官僚制、信息监控，远超其时代' },
      { d: 'science', dir: 'absorbed', desc: '以耕战为纲，把国家当作一架可计算、可设计的机器' }
    ],
    lineage: [
      { role: 'founder', who: '商鞅', note: '变法图强，以法治国' },
      { role: 'inherit', who: '申不害', note: '重"术"，君主的驭下之术' },
      { role: 'inherit', who: '慎到', note: '重"势"，权势为法之基' },
      { role: 'transcend', who: '韩非', note: '集法术势于大成，兼采老子的冷峻' }
    ],
    doctrine: [
      { title: '法', core: '成文而公开、平等而威严的规则，刑无等级', args: ['法不阿贵，绳不挠曲', '以法为教，以吏为师'], influence: '中国最早的系统法治理论，至今仍在"法治"讨论中回响' },
      { title: '术', core: '君主驾驭臣下的隐秘权术与信息控制', args: ['术者，因任而授官，循名而责实'], influence: '奠定中国传统政治运作的潜规则' },
      { title: '势', core: '权势与地位本身即是治国之要', args: ['尧为匹夫，不能治三人；而桀为天子，能乱天下'], influence: '冷峻揭示权力运作的现实逻辑' }
    ],
    relations: [
      { to: 'confucianism', type: 'reject', note: '德治与礼治的反面，韩非视儒者为"五蠹"之首' },
      { to: 'moism', type: 'reject', note: '兼爱、尚贤被改造为"利"的功利逻辑，侠义被国家机器吞没' },
      { to: 'daoism', type: 'reject', note: '借《老子》之"无为"为君术，是对道家精神的工具化背叛' },
      { to: 'plato', type: 'resonance', note: '都相信政治家需要专门的知识与设计，只是理想国以善为纲、法家以力为纲' },
      { to: 'enlightenment', type: 'dialogue', note: '对"利己之人如何被制度驯服"的回答：西方靠契约与制衡，法家靠刑罚与权术' }
    ],
    interpretations: [
      { from: '萧公权', view: '法家是"君主之治术学"，其法治实为"治吏"而非"治君"' },
      { from: '李泽厚', view: '法家的冷峻理性是"实用理性"在政治领域的极端化，功过并存' }
    ],
    quotes: [
      { text: '刑过不避大臣，赏善不遗匹夫。', src: '《韩非子·有度》' },
      { text: '世界则事异，事异则备变。', src: '《韩非子·五蠹》' }
    ],
    reception: '秦以法家统一六国，其制度（郡县、户籍、文书）成为两千年帝制的骨架，但"法治"与"势治"之名随秦亡而蒙污；近代章太炎、现代学者重估其现代性',
    shipwreck: { sank: '秦"焚书"最烈，法家著作几乎被自身烧尽', salvaged: '西汉后人辑韩非等残篇，法家思想借制度实践延续而不以学派存' }
  },
  {
    id: 'chan',
    name: '禅宗',
    en: 'Chan Buddhism',
    civ: 'east',
    years: [520, 907],
    era: '中古',
    keyword: '明心见性 · 不立文字',
    eraConditions: [
      { t: 'religion', n: '佛学中国化与义理困局', how: '印度佛学玄奘式的琐碎义理在唐朝走向死胡同，需要一场"实践革命"破局' },
      { t: 'culture', n: '安史之乱后的精神真空', how: '盛唐崩溃，士人转向内心，禅宗以"即心即佛"提供了乱世的自救法门' },
      { t: 'culture', n: '道家与庄学的浸染', how: '老庄的自然无为为印度禅法提供了中土的思想土壤' }
    ],
    timeAsked: '真理若在文字里，为何读破三藏仍不解脱？',
    withDisciplines: [
      { d: 'literature', dir: 'given', desc: '禅意入诗入画：王维的"空山新雨后"、苏轼的禅理、宋画的留白，皆禅之化身' },
      { d: 'religion', dir: 'absorbed', desc: '吸收道家的自然无为与儒家的日用伦常，把印度禅定改造为生活化的实践' },
      { d: 'art', dir: 'given', desc: '茶道、庭园、剑道、水墨画的"留白美学"皆由禅宗塑造，远播日本' }
    ],
    lineage: [
      { role: 'founder', who: '菩提达摩', note: '西来初祖，面壁九年' },
      { role: 'inherit', who: '慧能', note: '《坛经》出，顿悟南宗确立，不立文字' },
      { role: 'transcend', who: '洪州禅', note: '马祖道一"平常心是道"，担水砍柴皆妙道' }
    ],
    doctrine: [
      { title: '即心即佛', core: '佛性本自有之，不在心外求法', args: ['菩提本无树，明镜亦非台', '识自本心，见自本性'], influence: '把佛从西天拉回当下，佛性论的中国革命' },
      { title: '不立文字', core: '真理在言语之外，须以心传心', args: ['教外别传，不立文字', '逢佛杀佛'], influence: '反智识主义的极端形态，直接影响维特根斯坦"对不可言说的必须沉默"' },
      { title: '顿悟', core: '悟不在积累，而在当下的翻转', args: ['一念悟即佛，一念迷即众生'], influence: '以"顿"抗"渐"，塑造中国式直觉思维' }
    ],
    relations: [
      { to: 'daoism', type: 'resonance', note: '"应无所住而生其心"与"逍遥游"同构，禅是佛学与道家联姻的产儿' },
      { to: 'neoconfucianism', type: 'dialogue', note: '理学借禅之心性框架反佛，朱熹斥禅又暗用禅——"援禅入儒"' },
      { to: 'xinxue', type: 'resonance', note: '王阳明"知行合一""致良知"与禅的直指人心神韵相通' },
      { to: 'analytic', type: 'resonance', note: '维特根斯坦"语言的界限即世界的界限""对不可说的必须沉默"，与禅之不可说惊人相遇' }
    ],
    interpretations: [
      { from: '铃木大拙', view: '禅是"超越逻辑的直观"，是东方给陷入逻辑困境的西方的一份礼物' },
      { from: '胡适', view: '禅宗"不立文字"实为历史建构，慧能南宗的胜利是宗教政治而非义理之争' }
    ],
    quotes: [
      { text: '菩提本无树，明镜亦非台；本来无一物，何处惹尘埃。', src: '慧能偈，《六祖坛经》' },
      { text: '不是风动，不是幡动，仁者心动。', src: '《六祖坛经》' }
    ],
    reception: '中唐后禅宗成为佛学主流，渡海入日本（镰仓时代）成为武士与茶道之魂；20世纪西传欧美，影响垮掉的一代、乔布斯与西方心灵运动',
    shipwreck: { sank: '唐武宗会昌灭佛，禅宗赖以存身的山林经济遭重创', salvaged: '禅宗以"农禅并作"自给自足，反而在灭佛后成为唯一幸存且壮大的宗派' }
  },
  {
    id: 'neoconfucianism',
    name: '程朱理学',
    en: 'Neo-Confucianism',
    civ: 'east',
    years: [1032, 1200],
    era: '中古',
    keyword: '天理 · 格物穷理 · 存天理灭人欲',
    eraConditions: [
      { t: 'religion', n: '佛道两教的精神统治', how: '儒生面对"高深"的佛道心性论而无从回应，必须重建儒学自己的形而上学' },
      { t: 'culture', n: '科举与士人政治', how: '宋代士大夫"以天下为己任"，需要一套既入世又有超越性的世界观' },
      { t: 'science', n: '格物传统的复兴', how: '博物与实学之风（如沈括）为"格物穷理"提供了知识论土壤' }
    ],
    timeAsked: '面对佛道的空与无，儒学如何重新回答"世界到底是什么、人为何而活"？',
    withDisciplines: [
      { d: 'science', dir: 'absorbed', desc: '"格物穷理"的求知精神与宋代博物、天文、医学互为表里' },
      { d: 'religion', dir: 'absorbed', desc: '借鉴佛道的心性修养方法（静坐、观照），再造儒家功夫论' },
      { d: 'literature', dir: 'given', desc: '文以载道再度强化，理学伦理渗透宋明诗文与家族制度' }
    ],
    lineage: [
      { role: 'founder', who: '周敦颐', note: '《太极图说》打通宇宙论，理学开山' },
      { role: 'inherit', who: '二程', note: '程颢识仁、程颐穷理，分启心学与理学两脉' },
      { role: 'transcend', who: '朱熹', note: '集大成：理气论、格物致知、《四书集注》' },
      { role: 'transcend', who: '王阳明', note: '以"心即理"反拨朱子，理学内部引爆心学' }
    ],
    doctrine: [
      { title: '天理', core: '宇宙与伦理同源共构的绝对原理', args: ['理一分殊', '宇宙之间，一理而已'], influence: '把儒家伦理提升为宇宙论，可比较于柏拉图的"善的理念"' },
      { title: '格物穷理', core: '通过穷究万事万物之理以通达天理', args: ['即物而穷其理', '格物而后知至'], influence: '一种儒家的认知与修养纲领，后被解读为接近科学精神' },
      { title: '存天理，灭人欲', core: '以天理节制私欲，成就道德人格', args: ['人心惟危，道心惟微'], influence: '成为东亚三百年官方意识形态，也背"礼教吃人"之讥' }
    ],
    relations: [
      { to: 'confucianism', type: 'transcend', note: '承接孔孟，却以佛道的心性框架重建，是对先秦儒学的形上化超越' },
      { to: 'chan', type: 'dialogue', note: '朱熹"援禅入儒"又力辟禅学，既借其功夫又防其出世' },
      { to: 'daoism', type: 'absorbed', note: '周敦颐太极图、邵雍先天学皆本于道家的宇宙图式' },
      { to: 'plato', type: 'resonance', note: '天理与"理念"同构：可感世界之外有一绝对真源，皆以理性贯通' },
      { to: 'kant', type: 'resonance', note: '牟宗三称朱子是"他律道德"，康德是"自律道德"之对照——理学与康德道德形上学形成文明级对话' }
    ],
    interpretations: [
      { from: '牟宗三', view: '朱子"别子为宗"，理学歧出孔孟之本；真正的儒家是阳明心学——此判引发当代新儒学最大争论' },
      { from: '冯友兰', view: '朱熹之理"似柏拉图"，理气论可比于形式与质料，是"新实在论"' },
      { from: '劳思光', view: '程朱以"存有论"代"心性论"，偏离孔孟之旨，为一度偏离' }
    ],
    quotes: [
      { text: '理一分殊。', src: '程颐' },
      { text: '格物穷理，非是要尽穷天下之物，但于一事上穷尽，其他可以类推。', src: '朱熹《朱子语类》' }
    ],
    reception: '元明清科举以《四书集注》为准，理学成为东亚文明圈的官方哲学，影响朝鲜朱子学、日本德川儒学；近代被批为"礼教吃人"，20世纪新儒家则力图为其正名',
    shipwreck: { sank: '王学冲击与清代汉学"以经学代理学"，理学失势', salvaged: '新儒家与东亚现代化讨论中，理学被视为东亚"新教伦理"式的精神资源' }
  },
  {
    id: 'xinxue',
    name: '陆王心学',
    en: 'School of Mind',
    civ: 'east',
    years: [1139, 1529],
    era: '中古',
    keyword: '心即理 · 知行合一 · 致良知',
    eraConditions: [
      { t: 'culture', n: '理学僵化为教条', how: '朱子学成为官方意识形态后"格物穷理"沦为科举记诵，需要对"理"做一次内转' },
      { t: 'war', n: '明中叶的危机与个人觉醒', how: '宦官乱政、边患丛生，士人求"大丈夫"气象，王阳明以事功（平宁王之乱）证哲学' }
    ],
    timeAsked: '如果理不在外面的物上，而在每个人心里，那"知道"与"做到"为何总是分离？',
    withDisciplines: [
      { d: 'literature', dir: 'given', desc: '心学"狂者胸次"滋养明中叶个性解放的文学（李贽、公安派）与文人画' },
      { d: 'political', dir: 'given', desc: '致良知成为乡约、书院与基层自治的精神纲领，影响东亚社会实践' },
      { d: 'religion', dir: 'absorbed', desc: '借鉴禅宗"直指本心"的顿悟法门，但落点为儒家事功而非出世' }
    ],
    lineage: [
      { role: 'founder', who: '陆九渊', note: '"宇宙便是吾心"，与朱熹鹅湖之辨' },
      { role: 'inherit', who: '陈献章、湛若水', note: '白沙"静中养出端倪"，甘泉学广布' },
      { role: 'transcend', who: '王阳明', note: '龙场悟道，致良知、知行合一，心学大成' },
      { role: 'transcend', who: '王畿、泰州学派', note: '"现成良知"，走向平民化与解放' }
    ],
    doctrine: [
      { title: '心即理', core: '天理不在心外，宇宙之理即吾心之理', args: ['宇宙便是吾心，吾心即是宇宙', '心外无物，心外无理'], influence: '中国思想史上最大的一次主体性挺立' },
      { title: '知行合一', core: '真知必能行，知而不行只是未知', args: ['知是行之始，行是知之成'], influence: '直击"知而不行"的人格分裂，至今是方法论箴言' },
      { title: '致良知', core: '人人心中皆有是非之知，依此扩充即是成圣', args: ['满街都是圣人', '致吾心之良知于事事物物'], influence: '把成圣之门向每个人打开，极具平等主义色彩' }
    ],
    relations: [
      { to: 'neoconfucianism', type: 'transcend', note: '朱陆之辨后，阳明以"心即理"反拨"理在物"，是理学内部的革命' },
      { to: 'chan', type: 'resonance', note: '"良知"之悟与禅之"直指人心"相通，阳明自觉区分"出入于佛老"' },
      { to: 'kant', type: 'resonance', note: '牟宗三称阳明"良知"是"自律道德"，恰与康德相映——中德道德形上学最高峰的对话' },
      { to: 'phenomenology', type: 'resonance', note: '"心外无物"的意识构造论，与胡塞尔意向性有惊人亲和' }
    ],
    interpretations: [
      { from: '牟宗三', view: '阳明是儒家正宗，良知是"自律道德"，可会通康德而成"道德的形上学"' },
      { from: '钱穆', view: '阳明心学之弊在"尊德性而略道问学"，流弊为狂禅空疏' },
      { from: '冈田武彦（日）', view: '阳明学是"行动哲学"，东传日本后成为明治维新的精神动力' }
    ],
    quotes: [
      { text: '知是行的主意，行是知的功夫；知是行之始，行是知之成。', src: '王阳明《传习录》' },
      { text: '破山中贼易，破心中贼难。', src: '王阳明' },
      { text: '你未看此花时，此花与汝心同归于寂；你来看此花时，则此花颜色一时明白起来。', src: '王阳明《传习录》' }
    ],
    reception: '阳明学东传日本（中江藤树、吉田松阴、西乡隆盛），成为明治维新与日本近代化的精神燃料；在东亚现代化、企业家精神与心理咨询中持续回响',
    shipwreck: { sank: '清廷以朱子学为正统，阳明学在清代一度边缘化', salvaged: '晚清王学复兴，孙中山、蒋介石、毛泽东早年皆受其影响，21世纪在日本、欧美学界重生' }
  }
];
