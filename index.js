
const Discord = require('discord.js');
const bot = new Discord.Client();
const figlet = require('figlet');
const colors = require('colors');
const OWNER_ID = '606949672275280014'
var prefix = ".";

bot.login("NjEyNjcxNTcxMTk4NDc2MzA4.XWK-yA.5Pin324kOGTRgNH9CyRxLJc1MS0");
   
bot.on("ready",   () => {
   bot.guilds.forEach(function(guild){  
        console.log("Guild "+guild.name+" Members "+guild.memberCount+"")
    
    console.clear();
    console.log(('   .ID du compte : '+ bot.user.id).white);
    console.log(('   .Connecté à : '+ bot.user.tag).white);
    console.log(("   .Version De L'API Discord actuelle : " + Discord.version).white);
    console.log(figlet.textSync(".[ CMD ON ].").red);
    bot.user.setActivity("Generator | .help" ) 
});

 
 
//help
bot.on("message", message => {
 
    var sendembed = new Discord.RichEmbed()  
        .setAuthor(`Requested by ${message.author.username}`)
        .setColor('BLACK')
        .setThumbnail("https://cdn.discordapp.com/attachments/610998589224910852/611126430280974356/GLITCH_20190814111519.gif")
        .addField("Voici les commandes du générateur :", "`spotify`, `nordvpn`, `wwe`, `canal`, `crunchyroll`, `deezer`, `espn`, `hulu`, `mega`, `minecraft`, `pornhub`, `psn`, `uplay`, `origin`, `steam`, `ubisoft`, `fortnite(bientôt).`")
        .setFooter(`Le Staff vous souhaite une bonne journée !`)
        if  (message.content.includes(prefix + "help")) {  
            message.channel.send(sendembed)

//spotify
bot.on("message", message => {


    if (message.content.includes(prefix + "spotify")) {
        message.author.send(spotifyembed)

          var spotify = [`tylerhall0987@gmail.com:ty13rty13r`,
          `alchat63@yahoo.com:z505050`,
          `saramikel9@hotmail.com:waterpolo1`,
          `imaginekathrina@gmail.com:dramadrama`,
          `luciabarzilai@gmail.com:lucinha123`,
          `hellsfire38@gmail.com:dragonfir3`,
          `cunha.izabel@gmail.com:234602`,
          `jdelvalle1986@gmail.com:dun3d4in`,
          `marcoslacerda94@gmail.com:159357456`,
          `dragongirl952@gmail.com:ballantine`,
          `d4nelk9ng@gmail.com:dm1981992`,
          `bujieboo1111@gmail.com:sunny23608`,
          `Ericamissmama@aol.com:Armada08`,
          `aleksandr.gaichka@gmail.com:shurup97`,
          `agostinhopierreantoine@gmail.com:baba01062002`,
          `okamuraeduarda@gmail.com:eco280300`,
          `batminhobiel@gmail.com:monteiro90`,
          `mar_dom88@yahoo.com:Olimpiacampeon1`,
          `carlo.difenzio@gmail.com:Pollo9999`,
          `braunsteinjoel@gmail.com:Actorguy1`,
          `robert.neuf3ld@gmail.com:Hightech1`,
          `mlkordal@gmail.com:clank123`,
          `x7rapid@gmail.com:Nathan01`,
          `jonas.eger@gmx.de:jonas0071`,
          `a.muqattash@yahoo.com:Slayer16`,
          `even.henriksen1@hotmail.com:sheena123`,
          `bank.attila99@gmail.com:Attila99`,
          `ariel.yos60@gmail.com:ar123456`,
          `sietebarrasbajas@gmail.com:personal95`,
          `mohammed7017@hotmail.com:Mohammed2001`,
          `d4nny11@hotmail.com:Pitter11`,
          `fusagi1@wp.pl:kamizelka1`,
          `roberquinte3@aol.com:Catman15`,
          `bluto00000@gmail.com:monnhann1`,
          `jeffrey1667@aol.com:Pokemon23`,
          `nil2005hiphop@gmail.com:hiphop2005`,
          `amandatheresaa@gmail.com:wyckoff14`,
          `williamgaban@gmail.com:Winter2001`,
          `stawgzilla@gmail.com:dalailama1simon1`,
          `brotherpavel@gmail.com:nicolay123`,
          `x.hood825@gmail.com:Jamaica825`,
          `reinaldo_chorololo@hotmail.cl:balon123`,
          `boommallsj@gmail.com:bas9198540`,
          `alex.dsquared98@gmail.com:Aleks1998`,
          `eric90938@gmail.com:a45105410`,
          `calich1211@gmail.com:Ngunhuthu12`,
          `camfxd@gmail.com:sam08mie`,
          `arlenewilliamsg@yahoo.com:mylove052108`,
          `sloanephilippe@gmail.com:sloane14`,
          `erikrogalsky12@gmail.com:rogalsky12`,
          `rafalturski@onet.pl:Madagaskar2003`,
          `eyaldd2246@gmail.com:e23082000`,
          `matthbec31@gmail.com:007mB007`,
          `bobby.specjre@gmail.com:winterm426`,
          `brian.pierrepoint@sky.com:pantherman2`,
          `polat_g_32@hotmail.com:besiktas032`,
          `g.timmerman@telenet.be:Timmy211`,
          `holgerbock@gmx.de:Andrea1975`,
          `melisacomepizza@gmail.com:melisadiaz`,
          `HalloweenNightJW@aol.com:tiwwamm3`,
          `vijetv9@gmail.com:sirbu123`,
          `abdul786360@icloud.com:Hasnain7892`,
          `eosboss28@gmail.com:eoghan11`,
          `saulruiz.98@gmail.com:freetempo24`,
          `lsfuentes2@gmail.com:terapia123`,
          `0609henry@gmail.com:ksenia1212`,
          `danyxnokia@hotmail.it:daniele22`,
          `danielerizzo7@libero.it:1234Logon`,
          `maximo_05@hotmail.it:asroma1927`,
          `vincycolimoro12@gmail.com:vincenzo12`,
          `don1509@aol.com:rakkasan`,
          `bgb630@yahoo.com:wowman762`,
          `kauan_batata@hotmail.com:pok7545689`,
          `crab_legs_11@hotmail.com:12bones12`,
          `Venturini.luca90@gmail.com:peggy2000`,
          `o0svaldas@yahoo.com:asdzxc`,
          `sonicxshadowxsilver@gmail.com:naruto123`,
          `alexjah13@gmail.com:starcast`,
          `lukeash1993@msn.com:Luke2000`,
          `chunai55@gmail.com:123mendi`,
          `darksora2468@aim.com:pokemon1`,
          `alex_v27@hotmail.it:birillo`,
          `mateo.picha@gmail.com:mateo2004`,
          `c0rnh0lio@hotmail.com:Pankrot123`,
          `lucasyrea@hotmail.it:syreagld`,
          `nerkos112@interia.pl:dawid123`,
          `markzimmer97@gmail.com:mark9708`,
          `bbaraahamad@gmail.com:baraa1998`,
          `tayebahamed80@yahoo.com:Rayhanah90`,
          `emmaculateomolo@gmail.com:24edoldc`,
          `cookiemun79@gmail.com:thomas02`,
          `jimmy7gang@gmail.com:979977`,
          `davidomolina@hotmail.com:24David11`,
          `raoul-02@hotmail.fr:tectro`,
          `rene.javor@gmail.com:rene2003`,
          `s.grobecker@gmail.com:8bcg92xb`,
          `teerenis@gmail.com:molator77`,
          `s.feske@gmx.de:070676sven`,
          `registrar@live.it:ultras90`,
          `clement.gaboulaud@free.fr:maccrage`,
          `jasio.godlewski@gmail.com:polska1`,
          `anime.christeen@gmail.com:chrisswag50`,
          `michel_94_@hotmail.it:lasosoloio`,
          `mrjay42@gmail.com:mrg047559`,
          `loganman9@gmail.com:rockstar9`,
          `thedoctorwhoovesisin@gmail.com:dondon1050`,
          `jdlh2dro@gmail.com:9390623j`];

            var spotifyembed = new Discord.RichEmbed()
            .setTitle("📌Spotify\n\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(spotifyembed)
            message.author.send((((`${spotify[Math.round(Math.random() * (spotify.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte spotify dans ${message.guild.name}`).red);
    
        {
        }
    }
    });




//nordvpn
bot.on("message", message => {

     
    if (message.content.includes(prefix + "nordvpn")) {
        message.author.send(nordvpnembed)

          var nordvpn = [`joshtobes@icloud.com:Assasin1291`,
          `mallet.dani@gmail.com:Cooper04`,
          `aiivers@hotmail.com:Record12`,
          `evertjanevers@gmail.com:butler06`,
          `masterhung15@gmail.com:Ethanx15 | Expiration = 2019-10-26 18:24:34`,
          `masterhung15@gmail.com:Ethanx15 | Expiration = 2019-10-26 18:24:34`,
          `nporikos@gmail.com:hockey21 | Expiration = 2020-02-07 13:55:34`,
          `davidcrimi@hotmail.com:congo777 | Expiration = 2019-09-08 12:00:34`,
          `dylanclem@hotmail.co.uk:Animals1 | Expiration = 2021-04-29 00:44:07`,
          `bryan.kunkler@gmail.com:airplanes1 | Expiration = 2019-09-22 00:00:00`,
          `jbachura@aol.com:3500Bratt2106 | Expiration = 2019-12-27 21:24:09`,
          `crazy-chris-11@hotmail.com:dizzysix6 | Expiration = 2019-08-18 00:39:50`,
          `trevor.lisa@hotmail.co.uk:sydney0406 | Expiration = 2020-05-08 09:49:05`,
          `alteasegovia@gmail.com:11235813 | Expiration = 2020-05-17 18:05:11`,
          `plonge11@googlemail.com:deadseed11 | Expiration = 2019-08-22 05:09:10`,
          `robee0921@hotmail.com:password12 | Expiration = 2019-09-01 10:48:05`,
          `ajauring@me.com:rotatrim | Expiration = 2019-09-05 19:41:31`,
          `project_reset@live.com:0264024Mag | Expiration = 2020-12-26 12:07:13`,
          `niemand262@gmail.com:Mine0007 | Expiration = 2019-09-15 05:46:43`,
          `james.jd.lloyd@gmail.com:Physics1 | Expiration = 2020-05-16 04:59:07`,
          `romeo.se.2009@gmail.com:romeo36896 | Expiration = 2019-09-07 21:57:51`,
          `auglvig@msn.com:Viviogdan1 | Expiration = 2019-08-13 20:31:33`,
          `kentvuong88@gmail.com:Mynameisgr8 | Expiration = 2022-01-09 14:54:04`,
          `acdaniels2017@gmail.com:Reddog77 | Expiration = 2019-08-17 06:53:00`,
          `waffopops@gmail.com:Axciom99 | Expiration = 2022-08-20 01:34:34`,
          `d.golebiewski@ymail.com:5mw40gte27 | Expiration = 2019-08-20 21:05:37`,
          `brazzale@gmail.com:m8q7rwbr | Expiration = 2021-08-24 00:17:06`,
          `lucas.a.persson@outlook.com:Freja1996 | Expiration = 2020-03-23 19:14:20`,
          `jcrouch764@gmail.com:thunder3 | Expiration = 2019-08-13 10:43:23`,
          `jregini@comcast.net:Bacall01 | Expiration = 2019-08-10 17:17:40`,
          `corypark@aol.com:uscgcwo4 | Expiration = 2021-05-10 01:48:33`,
          `191738@d230.org:Elvis2001 | Expiration = 2019-08-23 16:03:41`,
          `bigkai2002@gmail.com:flower1006 | Expiration = 2022-04-20 13:36:59`,
          `revd1997@yahoo.com:Dietpoop1 | Expiration = 2020-04-27 01:36:34`,
          `glickie_07@yahoo.com:w3851t35 | Expiration = 2019-08-30 20:34:17`,
          `Andyjakub29@gmail.com:Awesomejoe1 | Expiration = 2020-07-16 02:17:21`,
          `leonardofribeiro@gmail.com:paxoncho | Expiration = 2020-06-27 19:11:21`,
          `tajtatla@gmail.com:medadon96 | Expiration = 2019-08-28 00:00:00`,
          `bricekamatchy@hotmail.com:bennour82 | Expiration = 2020-06-17 22:35:31`,
          `seiplet93@gmail.com:nightmare1 | Expiration = 2019-09-19 16:50:03`,
          `knuckles64@sbcglobal.net:Bailey64 | Expiration = 2020-03-29 20:16:01`,
          `grantmp86@gmail.com:pemagr911 | Expiration = 2019-12-11 00:36:06`,
          `jcross@wi.rr.com:lha42ndmau | Expiration = 2019-09-13 00:00:00`,
          `cleofulghum@gmail.com:crf14958 | Expiration = 2019-08-19 03:12:14`,
          `rozhokserega@gmail.com:12qwaszx | Expiration = 2022-08-13 04:49:32`,
          `mmineweaser@gmail.com:dragon99 | Expiration = 2019-08-16 03:13:32`,
          `sebtaflinger@yahoo.com:Andrew1215 | Expiration = 2020-07-05 07:43:37`,
          `mallet.dani@gmail.com:Cooper04`,
          `lightningstaff44@gmail.com:yishmael1`,
          `kyle.voorhees01@gmail.com:Voorhees1`,
          `jcross@wi.rr.com:lha42ndmau`,
           `glickie_07@yahoo.com:w3851t35`,
           `michael@michaelmell.com:Madison2013`,
           `asgerkf@gmail.com:Asgerkam1`,
           `northcutt.owen@gmail.com:owen24680`,
           `hardballjas@msn.com:Strike3-17`,
                `inbar.monica@gmail.com:moni8182`,
                `nazario76@outlook.com:Kst12394!`,
                `mannyvieira@live.com:Deannavieira1`,
                `n8bringhurst@gmail.com:footsack7`,
                `haronnadjem2@gmail.com:annoujoum2015`,
                `jtippy@gmail.com:Peanutbutter#1`,
                `fredrocks991@hotmail.com:bestman1234`,
                `kenny@khalsa.com:KenKen13`,
                `tadyrhol@gmail.com:Suburban10`,
                `namufly@hotmail.com:lolita1338`,
                `wdenies@me.com:Wilden123`,
                `r.taillandier@live.fr:roro140683`,
                `stegring@gmail.com:u87722483`,
                `andrewcoxfilm@hotmail.com:thehoho1`,
                `bucketbot89@gmail.com:Ibanez89`,
                `glennblom@gmail.com:lollol12`,
                `jmartinesofie@gmail.com:Mamma12345`,
                `bryson.larue@gmail.com:Password98`,
                `theparg@gmail.com:r1e2f3n4`,
                `ocdscale@gmail.com:eastern1`,
                `91renner@gmail.com:Thunder123`,
                `petitnissart@gmail.com:ayanami0`,
                `NadineP97@gmx.ch:Albero123`,
                `luke.stockl42@gmail.com:3103Boys`,
                `obedstamp2009@gmail.com:98Arimus`,
                `max-eingoebel@arcor.de:apfelkuchen1`,
                `guyperry888@gmail.com:Superfly888`,
                `jamesmouchet@hotmail.fr:Lestat94380`,
                `theaa.w@hotmail.com:utedass1`,
                `kingsburybm@gmail.com:kateybear88`,
                `manuelbrfd@hotmail.com:Jajaja123`,
                `qmuskus@gmail.com:Pololopo21`,
                `pharaoh.horus@gmail.com:Fuckface666`,
                `edwinruedak@yahoo.com:crazyA123`,
                `leetipton@me.com:redpanda69`,
                `nicosaporito@live.com:Blackvenom99!`,
                `ruffdog888@gmail.com:molly4848`,
                `adriantrigano@icloud.com:adrian101`];

            var nordvpnembed = new Discord.RichEmbed()
            .setTitle("📌Nordvpn\n\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator.')


            message.author.send(nordvpnembed)
            message.author.send((((`${nordvpn[Math.round(Math.random() * (nordvpn.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte nordvpn dans ${message.guild.name}`).red);
    
        {
        }
    }
    });







     
            
//wwe
bot.on("message", message => {

 
    if (message.content.includes(prefix + "wwe")) {
        message.author.send(wweembed)
  
          var wwe = [`kadets12@gmail.com:f1r3w@ll`,
          `accounts.kyle@gmail.com:hXc704421`,
          `huggybur87@gmail.com:Xsq-675!`];
  
            var wweembed = new Discord.RichEmbed()
            .setTitle("📌WWE\n\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. ??")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')
  
  
            message.author.send(wweembed)
            message.author.send((((`${wwe[Math.round(Math.random() * (wwe.length - 1), )]}`))))
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte wwe dans ${message.guild.name}`).red);
    
        {
        }
    }
    });
        
//canal
bot.on("message", message => {
 
    if (message.content.includes(prefix + "canal")) {
        message.author.send(canalembed)
  
          var canal = [`ralphi973@orange.fr:Ralphi973 `,
          `thierry.leconte9@wanadoo.fr:Elisa1099`,
          `willy.simonis@orange.fr:Scheeta01`,
          `corinne.guttin-lombard@orange.fr:Octobre07`,
          `fchiappa@wanadoo.fr:Thedriver01`,
          `louis.petroix@orange.fr:28Louis07`,
          `alexicor@orange.fr:Salpetriere123`,
          `dejonghe.gregory@orange.fr:Ingrid21aska`,
          `jm.neuhaus@orange.fr:Halima64`,
          `f.demotie@orange.fr:Yenaspas1`,
          `jonquille47@orange.fr:Portugal1959`,
          `gospels1707@orange.fr:Emalouro5`,
          `veronique.ferragu@orange.fr:Droopy37`,
          `michel_rocchi@orange.fr:Camille1`,
          `alain.adam7@orange.fr:Morgane1`,
          `pm.poder@orange.fr:Pmpoder78`,
          `yang.francois@orange.fr:Yenapas1`,
          `etienne73@wanadoo.fr:Tarmo7375!`,
          `richard.wagner9@orange.fr:Mabariche17`,
          `melanie.fortrye@orange.fr:Emelcc43`,
          `jeachris1@orange.fr:Aurignal1`,
          `stephane.cornu31@orange.fr:Thiclem13`,
          `patricedonot66@orange.fr:Vaillant66`,
          `france.lescure@orange.fr:fL329098`,
          `marie-anne.galhaut@orange.fr:Ninamathias2`,
          `alric@sfr.fr:Samourai64`,
          `maha.67@wanadoo.fr:Online100`,
          `yapottier@orange.fr:Herclat25`,
          `yannick.hubert@orange.fr:Lorymax10`,
          `jf.pennelle@wanadoo.fr:Maxence5`,
          `wahliane@orange.fr:Lenalice2`,
          `nicola.duboi@orange.fr:Binouze1974`,
          `pmelay@orange.fr:Luce1997`,
          `xavier.mieuzet@orange.fr:Valentine73`,
          `fgszf@orange.fr:Minette1`,
          `elodie.pascal@wanadoo.fr:Tortue13`,
          `valerie.valou56@orange.fr:Florent0909`,
          `pierre.bignebat@orange.fr:Pinson64`,
          `luc.dussardier@orange.fr:Smarties3`,
          `zoune66@neuf.fr:Honorine22`,
          `valou56luciole@orange.fr:Luciole1503`,
          `jrfl86@orange.fr:Montamise86`,
          `bernard.chabassut@orange.fr:Poxy2006`,
          `rebenga@orange.fr:braHIM11`,
          `minchie@orange.fr:Minchie123`,
          `jcgremillet@orange.fr:As171073`,
          `claude.dold@orange.fr:Montilles13`];
  
            var canalembed = new Discord.RichEmbed()
            .setTitle("📌Canal\n\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')
  
  
            message.author.send(canalembed)
            message.author.send((((`${canal[Math.round(Math.random() * (canal.length - 1), )]}`))))
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte canal dans ${message.guild.name}`).red);
    
        {
        }
    }
    });

//crunchyroll
bot.on("message", message => {
 
    if (message.content.includes(prefix + "crunchyroll")) {
        message.author.send(crunchyrollembed)

          var crunchyroll = [`nkcraig1@gmail.com:noname34`,
          `w.herve0@laposte.net:JAPON1988`,
          `rosgof115@yahoo.com:pikapoo9`,
          `jameshbean94@yahoo.com:111223Aa`,
          `catherineradin@yahoo.com:Darwin1223`,
          `nickimemine@gmail.com:Gators#1`,
          `dochoa927@gmail.com:metalfest90`,
          `samuel.b.shields@gmail.com:butth34d`,
          `kirbykeeter@yahoo.com:love4free`,
          `gamingtank234@gmail.com:IanTank.500`,
          `phi.tidemand@gmail.com:sim99phi`,
          `kwakattack17@gmail.com:C00kb00k`,
          `brendan_kempny@hotmail.com:CheezeCake12`,
          `xeryl4ever@gmail.com:gamer123`,
          `chris.ko25@yahoo.com:chk10002`,
          `fussydave@gmail.com:ds123456`,
          `iimirachu@gmail.com:miranda127`,
          `firfirzm34@gmail.com:kitty123`,
          `aimslayer@gmail.com:raymond7`,
          `bursaki7@gmail.com:ursaki98`,
          `baudoin.alexandre44@gmail.com:Chichi44`,
          `batista.jonathan@hotmail.com:abcd0081`,
          `matt_cook32@yahoo.com:zxasqw12.`,
          `finderwow@gmail.com:miguel1999`,
          `nicolasgamboa.a@gmail.com:Lov3Playing`,
          `razerzonenja@yahoo.com:GODzilla13`,
          `devon.brundige@gmail.com:Icecream2002`,
          `tysonvick98@gmail.com:Shadowmoor98`,
          `zpessetti@yahoo.com:Bleach92`,
          `ajvazqz@gmail.com:veloster2020`,
          `joshua922@comcast.net:Jester2`,
          `abcdepo@live.fr:19961996po`,
          `cotycox09@gmail.com:number7255`,
          `peter_soad@hotmail.co.uk:busterdog1991`,
          `jasonestepan@gmail.com:Gemini2012`,
          `thadiusfindley@gmail.com:fartcart1`,
          `rafapayan@outlook.com:Puerco82`,
          `safew33@gmail.com:queenz33`,
          `acs2013@hotmail.com:tombrady1201`,
          `jeremyburton88@gmail.com:Poptropica1`,
          `harveyzhang11@gmail.com:Zapacore11`,
          `tarala@windowslive.com:HuPLuPtUP1234,1`,
          `rasnickquinn@gmail.com:Pokemon123`,
          `timothyjohnbelanger@gmail.com:Cowpig23`,
          `rasnickquinn@gmail.com:Pokemon123`,
          `timothyjohnbelanger@gmail.com:Cowpig23`,
          `zbonsmann@gmail.com:Artemisfowl3`,
                `mmitchell910@yahoo.com:minecraft910`,
                `jamie24spenik@gmail.com:tigger12`,
                `oliverlock@ntlworld.com:Henry321`,
                `asmithg99@gmail.com:a6l3e7x3`,
                `liam12202@gmail.com:Hermes1012`,
                `Untz401@gmail.com:Sawyer3`,
                `bohearn45@yahoo.com:Madden07`,
                `thomasmullarkey1@gmail.com:IRONMAN23`,
                `jarmenta1996@gmail.com:chivas1996`,
                `hamza.nasir2@gmail.com:Sims12118`,
                `anthony.riesco@gmail.com:bebiouse19892406`,
                `landongomm@hotmail.com:Soccer09 `,
                `freeziewars_@hotmail.com:Tripod68 `,
                `lundpedersen@msn.com:fred0404`,
                `Carloscolin13@gmail.com:Id14403903`,
                `jonathaneliel17@gmail.com:rodriguez7`];

            var crunchyrollembed = new Discord.RichEmbed()
            .setTitle("📌Crunchyroll\n\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(crunchyrollembed)
            message.author.send((((`${crunchyroll[Math.round(Math.random() * (crunchyroll.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte crunchyroll dans ${message.guild.name}`).red);
    
        {
        }
    }
    });

  

//deezer
bot.on("message", message => {
 
    if (message.content.includes(prefix + "deezer")) {
        message.author.send(deezerembed)

          var deezer = [`alice_goffin@hotmail.fr:220191`,
          `bellemeuff84@hotmail.fr:123mariiamma`,
          `sylvieberton@free.fr:SONISY`,
          `veronique.havard1962@orange.fr:11081964`,
          `eric.arrieta@garagearrieta.fr:quitterie`,
          `jujuholland@hotmail.fr:basile`,
          `mikael.tressout@hotmail.fr:m0582181`,
          `anthony.garcia@outlook.fr:anthony1992`,
          `amauravril@live.fr:albiez..3101`,
          `ricci.arnaud@orange.fr:marathon79`,
          `kasia57@live.fr:malcolm`,
          `grevex.severine@orange.fr:opticien`,
          `jeanphilippe09600@hotmail.fr:korgtriton`,
          `bfaure33@yahoo.fr:270557`,
          `olivier.dupuy33@yahoo.fr:sandrine31`,
          `peaches_0@live.fr:merdedenez`,
          `christophe.salinas@yahoo.fr:jupiter`,
          `vasivite01@hotmail.fr:14/07/91`,
          `fredym@free.fr:fredym`,
          `jadou04@live.fr:noisette`,
          `miss_mouchoir@hotmail.fr:lorens`,
          `aucoeurdupeloton@yahoo.fr:charlotte`,
          `ivanserre@hotmail.fr:marielapsycho`,
          `gladieuxg@yahoo.fr:boyboy7474`,
          `carla_29@hotmail.fr:vanille`,
          `jbdrum@live.fr:tensor`,
          `christian.schor@orange.fr:lunelle`,
          `jean-paul.bleriot@hotmail.fr:SaintMichael`,
          `alicia.berthoux@live.fr:alicia07091999`,
          `cedpesca@hotmail.fr:phenix`,
          `g.eloy@live.fr:morgane007`,
          `mylm76@hotmail.fr:marmyl`,
          `randria.cl@orange.fr:flocon67`,
          `filamel@aliceadsl.fr:19012006`,
          `sauts@orange.fr:laubert33`,
          `afi134@hotmail.fr:lyonnais`,
          `abbv2001@yahoo.fr:963369h`,
          `sunstrike@free.fr:njf2gwe8`,
          `harmandbr@orange.fr:harmand1`,
          `fannyii57@hotmail.fr:hoszkowicz`,
          `jakedom@free.fr:famille`,
          `l.gresset@orange.fr:Romane10`,
          `yvan.baptiste@orange.fr:naomie66`,
          `mpeninck@bol.com.br:m393939`,
          `sebandlili@hotmail.fr:rodrigue`,
          `gilbert.rizzi@wanadoo.fr:BouLeu`,
          `salimasali@yahoo.fr:070874`];

            var deezerembed = new Discord.RichEmbed()
            .setTitle("📌Deezer\n\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(deezerembed)
            message.author.send((((`${deezer[Math.round(Math.random() * (deezer.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte deezer dans ${message.guild.name}`).red);
    
        {
        }
    }
    });

  

//espn
bot.on("message", message => {
 
    if (message.content.includes(prefix + "espn")) {
        message.author.send(espnembed)

          var espn = [`rgoldstein34@gmail.com:mamacat34`,
          `peace2400@gmail.com:leona1`,
          `jojobluedevil@gmail.com:duke2002`,
          `nctyler@gmail.com:destro`,
          `sansley700@gmail.com:tindoor`,
          `skragt@gmail.com:luv2read`,
          `kevin.healey@gmail.com:eek:peth7399`,
          `jennamariepierce@gmail.com:bradley17`,
          `onnen.nate@gmail.com:Nj1021Mr`,
          `cwooten101@gmail.com:jadan0929`,
          `rmachuret@gmail.com:redfish`,
          `bianca.bell.unc@gmail.com:december1`,
          `bdrkde2011@gmail.com:kbrkdr0911`,
          `channinralston@gmail.com:Baylee123`,
          `patrickjmcd@gmail.com:TychoBrahe34`,
          `djimenez396@gmail.com:dascope44`,
          `cathrineminor0@gmail.com:jackadam1`,
          `don.a.widener@gmail.com:donntara2`,
          `hvelampalli@gmail.com:krishna`,
          `maildavidh@gmail.com:jetta97`,
          `mchughdavid41@gmail.com:football41`,
          `akb.anthro@gmail.com:phoenix2`,
          `aaronlwoodburn@gmail.com:jackson3378`,
          `marklarnw@gmail.com:mariners`,
          `gamecockfan98@gmail.com:basketball13`,
          `fl73078@gmail.com:may1993`,
          `myron.tan@gmail.com:hack5555`,
          `chrisrivard1@gmail.com:fetzer`,
          `jwfangel@gmail.com:angelsparky00`,
          `mthayer.mwph@gmail.com:cmt010303`,
          `sveruva@gmail.com:sairam09`,
          `m.zuazua15@gmail.com:mrbunnyman1`,
          `luz.v.vargas@gmail.com:lv032587`,
          `koebbep@gmail.com:10koepai`,
          `hoisington.ben@gmail.com:b3arst0rm!`,
          `ceborchardt@gmail.com:emel2227`,
          `rinacastillo@gmail.com:12ncstll`,
          `vxd5004@gmail.com:pavilion22`,
          `billie.kl.yeung@gmail.com:billie88`,
          `0900cindy@gmail.com:lms1027`,
          `wmkuhn@gmail.com:f1esta`,
          `sharpalex54@gmail.com:UCCI2468`,
          `latraviatasmith@gmail.com:jabel71`,
          `johnson.c.steven@gmail.com:RapidFire87`,
          `frenchfrye2007@gmail.com:Teah123abc`,
          `kwilli00@gmail.com:hairdo00`,
          `parkesmom13@gmail.com:butterfly13`];

            var espnembed = new Discord.RichEmbed()
            .setTitle("📌ESPN\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(espnembed)
            message.author.send((((`${espn[Math.round(Math.random() * (espn.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte espn dans ${message.guild.name}`).red);
    
        {
        }
    }
    });

//hulu 
bot.on("message", message => {
 
    if (message.content.includes(prefix + "hulu")) {
        message.author.send(huluembed)

          var hulu = [`sarina.stacy@yahoo.com:sarina09`,
          `dirtrollers@yahoo.com:boomer`,
          `stephaniekharlow@aol.com:1phantom`,
          `krobitzsch@cox.net:twr31088`,
          `cruzhaha@yahoo.com:Infamous17`,
          `camden200909@yahoo.com:time3028`,
          `crissastrauss@yahoo.com:821371mine`,
          `kelley.kristinem@icloud.com:kristine92`,
          `mrsebt99@yahoo.com:diesel`,
          `thegarrett100@yahoo.com:sabbath1`,
          `spike160@yahoo.com:kids05`,
          `golfguy530@yahoo.com:montana91`,
          `mustlovemtb@icloud.com:racerboy5x`,
          `cindyinthecity3@yahoo.com:ca123csa`,
          `samantha2004_66@yahoo.com:lice41!`,
          `rdhoward1973@yahoo.com:Texarkana1`,
          `tedrthorne@yahoo.com:jimmiekay`,
          `mnmichael@earthlink.net:4michael`,
          `ultamitecorsair@yahoo.com:Detroit97`,
          `sec1ewt@yahoo.com:0185407e`,
          `shoal07@aol.com:T1niD1gg`,
          `marcela_806@yahoo.com:pilar218`,
          `braydonchris@aol.com:ninjathree`,
          `freckleface10496@aim.com:cookies346`,
          `sheiladavis@comcast.net:jrd224`,
          `nafesmonroe@yahoo.com:fesdabeast4`,
          `pondo202020@yahoo.com:Shelbywho1`,
          `imajoka2@yahoo.com:leverk65`,
          `superboyunlimited91@yahoo.com:josue91`,
          `isaelrodriguez714@yahoo.com:football714`,
          `marcella_laasch@yahoo.com:1love4ever`,
          `l.dubuc@comcast.net:bandit97`,
          `jessicakvcc@yahoo.com:kvcc5822`,
          `tomsoryer@yahoo.com:stat12`,
          `rayeramey@yahoo.com:zfunny99`,
          `jeffyambrick@aol.com:Nicole01`,
          `guenguin22@yahoo.com:star22`,
          `winkink1@yahoo.com:sara3689`,
          `atmadej@yahoo.com:corwood15`,
          `evilchild1313@yahoo.com:rachael10`,
          `may.jason95@yahoo.com:babycat`,
          `jessmae86@aol.com:crystal01`,
          `richard_bachan@yahoo.com:richie1995`,
          `parkerloren@yahoo.com:Lilmiss1`,
          `krisshort12@yahoo.com:corbin12`,
          `hernandezm6445@yahoo.com:sunshine55`,
          `jmendillo200@verizon.net:51neighba`];

            var huluembed = new Discord.RichEmbed()
            .setTitle("📌Hulu\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(huluembed)
            message.author.send((((`${hulu[Math.round(Math.random() * (hulu.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte hulu dans ${message.guild.name}`).red);
    
        {
        }
    }
    });


//mega   
bot.on("message", message => {
 
    if (message.content.includes(prefix + "mega")) {
        message.author.send(megaembed)

          var mega = [`geraldi_metalcrayz@yahoo.com:ayamgoreng123`,
          `melvintje-1996@hotmail.com:vermeerstraat13`,
          `b.r.i.a.n@hotmail.es:brian2013`,
          `estebanluna10@hotmail.com:30473763`,
          `msaugusto2@hotmail.com:msa1234`,
          `diogomixcds@gmail.com:cyber2010`,
          `joe_cool_9000@hotmail.com:teardrop23`,
          `mat5200@wp.pl:japonia1`,
          `anas.45.650@hotmail.fr:pakistan45`,
          `tackygaming@gmail.com:michael1993`,
          `mad-boy@hotmail.es:internet`,
          `andrewmorgan@bis.midco.net:crosby87`,
          `djsiwillo@googlemail.com:funkyscouse`,
          `arvatroz@hotmail.com:rachmaninov`,
          `pofkileriux@gmail.com:povilas1`,
          `alex.rodriga@gmail.com:123456`,
          `flash.sr@libero.it:iloverap`,
          `erickslipkorn@hotmail.com:tikkmikk`,
          `jung5441@nate.com:wjdcjs5441`,
          `dani_ic3man@hotmail.com:21051989`,
          `matthew.ligon@yahoo.com:Matthew13`,
          `mbtiger15@hotmail.com:15king15`,
          `chiss82@gmail.com:24774264`,
          `rockhoward2000@hotmail.com:gundamx`,
          `du_edu_13@hotmail.com:Eduardo.m13`,
          `yuri_benigno@hotmail.com:nintendo64`,
          `tomaz686@yahoo.com:asasas`,
          `rafaeldiaslopes@yahoo.com.br:triangulo`,
          `gokku5@hotmail.it:superale`,
          `ryan.reyes19@hotmail.com:pogiako`,
          `liam_neville@hotmail.co.uk:forest89`,
          `roxstarboy@yahoo.com:qwerty123`,
          `westley88@msn.com:Colibri1`,
          `phoenix681@hotmail.com:leinad00`,
          `safwanafiq89@yahoo.com:operator`,
          `robertomx4@outlook.com:qwerst`,
          `deposito_correo@yahoo.com:mexico`,
          `s8906108@yahoo.com.tw:68369257`,
          `powerzz009@gmail.com:tuningscene`,
          `dennisanaelhdelcid@gmail.com:tegucigalpa`,
          `nicolp_241091@hotmail.com:36571438`,
          `cazthechunkymonkey@hotmail.com:monkeypower`,
          `gorilamorado@hotmail.com:montana`,
          `klekkelk@yahoo.com:123456`,
          `leftyguitarguy@gmail.com:1monkey`,
          `brajan20059@Wp.pl:brajan012`,
          `johnpablo13@hotmail.com:192729kl.`];

            var megaembed = new Discord.RichEmbed()
            .setTitle("📌Mega\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(megaembed)
            message.author.send((((`${mega[Math.round(Math.random() * (mega.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte mega dans ${message.guild.name}`).red);
    
        {
        }
    }
    });


//minecraft  
bot.on("message", message => {
 
    if (message.content.includes(prefix + "minecraft")) {
        message.author.send(minecraftembed)

          var minecraft = [`nfowler4@verizon.net:nicholas03`,
          `ngav1012@yahoo.com:kids052717`,
          `neyalrawb@gmail.com:z0mbieland`,
          `nevets42@aol.com:notwal4218`,
          `netty820@gmail.com:topsecret1`,
          `neilerskine@live.co.uk:nelly21394`,
          `neil.dale93@gmail.com:fallf0ryou`,
          `neil.chatt@blueyonder.co.uk:newaza2767`,
          `Neil.hickman@me.com:fba975bee3`,
          `mohammed_aap147@hotmail.co.uk:hamoodi147`,
          `neilerskine@live.co.uk:nelly21394`,
          `neilerskine@live.co.uk:nelly21394`,
          `nearlybackwards@gmail.com:familydog1`,
          `ndmtram@yahoo.com:monkey1992`,
          `morganrjennings@aim.com:broomkind6`,
          `ndlatour69@gmail.com:gabrielle2`,
          `ndmtram@yahoo.com:monkey1992`,
          `ndatlas@verizon.net:natlas6970`,
          `nchouston9@gmail.com:nateattack`,
          `nblanchard82@yahoo.com:anthony143`,
          `nband0154@yahoo.com:dommerdom2`,
          `natmbell@gmail.com:isaiah6ian`,
          `nathanwilson199605@live.co.uk:1996wilson`,
          `nathan7411@hotmail.com:nathan1257`,
          `nathan.nawalaniec@gmail.com:pennywise1`,
          `nate.dubois64@gmail.com:bestkeep11`,
          `mssweetnotes@gmail.com:studio2419`,
          `natasha.driessen@hotmail.com:luvcheese3`,
          `Natalielorenzo@hotmail.com:ilovematt3`,
          `napaos563@yahoo.com:1701myboys`,
          `nanditha77k@yahoo.com:sriramsai5`,
          `nancyfaulkenburg@gmail.com:tigers1609`,
          `nancykvng@gmail.com:momloveme2`,
          `nalwood@live.com:treelo2012`,
          `nalune@gmail.com:marakesh55`,
          `myjunkbox@bellsouth.net:19breezy68`,
          `mynameisjanice@live.com:pooper1997`,
          `mynameisjanice@live.com:pooper1997`,
          `mymemorylane@yahoo.com:sixflags87`,
          `mmorrow206@gmail.com:stuartj123`,
          `myricksm@yahoo.com:5princeton`,
          `mythicsnow@gmail.com:azureice12`,
          `mytabloids@hotmail.com:jessclark1`,
          `n_allen6@sky.com:leonoscar2`,
          `n3.coalition@gmail.com:cesdin2153`,
          `nae310378@gmail.com:ryan010205`,
          `nairb1997@ymail.com:bbrriiaann`];

            var minecraftembed = new Discord.RichEmbed()
            .setTitle("📌Minecraft\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(minecraftembed)
            message.author.send((((`${minecraft[Math.round(Math.random() * (minecraft.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte minecraft dans ${message.guild.name}`).red);
    
        {
        }
    }
    });

    
//pornhub
bot.on("message", message => {
 
    if (message.content.includes(prefix + "pornhub" )) {
        message.author.send(pornhubembed)

          var pornhub = [`null.name@yahoo.com:Emo54405440`,
          `hensley.scott@gmail.com:Sh1312184`, 
          `Victorpuczynski@hotmail.com:Somom123`,
          `lmoeller1977@gmail.com:Camelot1`,
          `skygaming93@gmail.com:Seanolive1`,
          `austingedlick@gmail.com:Ag1455667`,
          `eriksenblake@gmail.com:aviator001`,
          `neoruss911@gmail.com:Neovitaga911`,
          `proxiizma@gmail.com:xboxlive36o`,
          `whood23@gmail.com:baseball33`,
          `mtruo008@yahoo.com:jordan2k`,
          `nguyen.pham143@gmail.com:soccerrule11`,
          `jbirchmore56@gmail.com:2Hearted`,
          `luisagprice@gmail.com:luis0499`];

            var pornhubembed = new Discord.RichEmbed()
            .setTitle("📌PornHub\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(pornhubembed)
            message.author.send((((`${pornhub[Math.round(Math.random() * (pornhub.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte pornhub dans ${message.guild.name}`).red);
    
        {
        }
    }
    }); 

//psn
bot.on("message", message => {
 
    if (message.content.includes(prefix + "psn")) {
        message.author.send(psnembed)

          var psn = [`walkingman800@gmail.com:mail1422`,
          `moonshadow626@hotmail.com:626popop`,
          `willjtran@hotmail.com:firebird12`,
          `juanjo_degrande@hotmail.com:dni36484223`,
          `walkingman800@gmail.com:mail1422`,
          `moonshadow626@hotmail.com:626popop`,
          `willjtran@hotmail.com:firebird12`,
          `ricardo-3@live.com:03ago1996`,
          `aubenoir@hotmail.be:crossman13`,
          `jlnascimento3@hotmail.com:joaobolinhos13`,
          `joshlilienthal@hotmail.com:Wopkins95`,
          `giuiap@hotmail.it:lodclandrift94`,
          `olek130@gmail.com:9QAsIfLS`,
          `karoha.contact@gmail.com:aurora17`,
          `redcowgames@gmail.com:blueboy2`,
          `vincentfb68@gmail.com:Frogger8`,
          `brawltek@outlook.com:franci03`,
          `luisleite2002@gmail.com:Luiskarl2`,
          `qwertyuiopzv@libero.it:piero2002`,
          `jailenbailey1999@outlook.com:Flash231`,
          `biggreenfaucher@gmail.com:Clavier50`,
          `db331@live.com:wh4t3v3r`,
          `chrisdraper01@gmail.com:Scampi1993`,
          `minimonkeysgaming@gmail.com:Superboy1`,
          `supercoolps4@gmail.com:lovejah67`,
          `danny.hillesland@gmail.com:Dantheman61161`,
          `fargher10@yahoo.com:pizza123`,
          `anna.maria1110@icloud.com:chip77165`,
          `ienjoy.com@gmail.com:lawliet14`,
          `cosmin.facebooc1@gmail.com:cosminja1`,
          `daniel13francis@outlook.com:Legendary13`,
          `francescoamatoo@hotmail.it:enj7d7dhm`,
          `skycube@outlook.de:hecht1312`,
          `sixsox_666@hotmail.com:sixsox13579`,
          `davetellus66@hotmail.com:sirsick2loco`,
          `ashraf_hussain2003@yahoo.com:Hussein1606`,
          `eugenio.bellini@yahoo.it:ugimon27`,
          `luginbr0202@gmail.com:camila99`,
          `adiostoreadoormat@yahoo.com:basil1025`,
          `francescoba46@gmail.com:Baf2001-`,
          `dancingstreamjr@gmail.com:paul7285`,
          `zangetsuman777@gmail.com:zangetsu45`,
          `credit2creators@yahoo.com:Zombies13`,
          `dr4k3zdovah@gmail.com:battlefield33`,
          `gaminggamer005@gmail.com:sept1899`,
          `spesher93@yandex.ru:XDANTElgx1`,
          `christian95martins@hotmail.com:cr060795`];

            var psnembed = new Discord.RichEmbed()
            .setTitle("📌PSN\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(psnembed)
            message.author.send((((`${psn[Math.round(Math.random() * (psn.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte psn dans ${message.guild.name}`).red);
    
        {
        }
    }
    });


//uplay    
bot.on("message", message => {
 

    if (message.content.includes(prefix + "uplay")) {
        message.author.send(uplayembed)

          var uplay = [`davidmlucio@yahoo.com:mixwell87`,
          `orion_the_slayer@yahoo.com:dog101aa`,
          `ducky808@gmail.com:Spider91`,
          `dmb.dubz@gmail.com:170785kyrell`,
          `demuns13@gmail.com:iamfat13`,
          `deancrosbie@hotmail.co.uk:sandra92`,
          `dreej@hotmail.com:sw0rdfish`,
          `dota2castfr@gmail.com:dvdgrlch18`,
          `dmb.dubz@gmail.com:170785kyrell`,
          `davidmlucio@yahoo.com:mixwell87`,
          `deancrosbie@hotmail.co.uk:sandra92`,
          `die_katze326@hotmail.com:coolcup1`,
          `kristiandelip@gmail.com:kdk123`,
          `kristiandelip@gmail.com:kdk123`,
          `ducky808@gmail.com:Spider91`,
          `dreej@hotmail.com:sw0rdfish`,
          `demuns13@gmail.com:iamfat13`,
          `draksman@gmail.com:january242010`,
          `dbayvas@gmail.com:saionji23`,
          `danielsting@yahoo.com:sumners11`,
          `sabercat0790@hotmail.com:buddyb0790`,
          `dimarespekt99@mail.ru:12345678d`,
          `danielsting@yahoo.com:sumners11`,
          `danielsting@yahoo.com:sumners11`,
          `sabercat0790@hotmail.com:buddyb0790`,
          `dhizzandra@gmail.com:gemoct13`,
          `dhizzandra@gmail.com:gemoct13`,
          `pajlot@gmail.com:pilot2fast`,
          `joshcasto17@gmail.com:Omg13766`,
          `cameronelliott42@gmail.com:Elliott321`,
          `ryansands4@gmail.com:Casimir4`,
          `demonmaster406@gmail.com:nixie284330s`,
          `cwendt1873@gmail.com:sammy101`,
          `william.dettman@gmail.com:skaterboy7`,
          `emuirhead@gmail.com:B00mst1ck`,
          `guywithsomemail@gmail.com:CasinoRoyal007`,
          `dfaire3320@gmail.com:llabasab1`,
          `brianna.lee2016@gmail.com:laughter59`,
          `nssmith2000@gmail.com:gizmo100`,
          `dtkeyse@gmail.com:lainavi1`,
          `laplacajn@gmail.com:1Giraffe4582`,
          `Jrice4266@gmail.com:R1ceboys`,
          `curtiss.ashley@gmail.com:ddgoose17!`,
          `zachwylie46@gmail.com:Victori4`,
          `andrewknight1212@hotmail.com:drew1212`,
          `preston.ellebracht@gmail.com:Tiger360`,
          `cesarjoelnunezgandara@gmail.com:monster123`,
          `spyger279@gmail.com:Sonyps279`,
          `garrett.rodden@gmail.com:Ilikecheese10`,
          `Chewy102398@gmail.com:Chwy102398`,
          `trent.orick96@gmail.com:muddybuddy3`,
          `ethan.lenhardt54@gmail.com:Blueshorts1`,
          `jackcorrigan30@gmail.com:jackson30`,
          `jackwang0302@gmail.com:abc03021528`,
          `mperry276@gmail.com:mrperry30166`,
          `chrisar100@gmail.com:Ghramone2`,
          `markd072458@gmail.com:carpediem`,
          `nieblasjordan@gmail.com:jordansam2`,
          `adamelofir23@gmail.com:Dirtbike23`,
          `comptonsmost@gmail.com:july171988`,
          `jparsons444@gmail.com:theringer4`,
          `dylanjohnson22.dj@gmail.com:korver26`,
          `cory.lovell.41@gmail.com:Polopolopolo12`,
          `miles.davidow@gmail.com:Monster5`,
          `johnm5449@gmail.com:pr3uqpqv`,
          `miltonpullen@gmail.com:mltnpuln1993`,
          `derek4900@gmail.com:2766411bB`,
          `milo10216@gmail.com:Xbox10216`,
          `obbynetwork@gmail.com:overtaco3`,
          `mercadoandrewj@gmail.com:Andy2896!`,
          `nemechek9@gmail.com:pokemon9`,
          `SurfingAndSmurfing@gmail.com:Pencil123`,
          `kkmcloud@gmail.com:foxy351949`,
          `z.agzour@gmail.com:Gameboy1`,
          `00JohnD@gmail.com:Hogwartz1!`,
          `siemrocks@gmail.com:Siemdawit1`,
          `julianzug@gmail.com:phillip1994`,
          `dtmcquillan318@gmail.com:4isforme`,
          `mploederer14@gmail.com:41qrst14`,
          `deesseur@gmail.com:hunter0406`,
          `zachschumacher@gmail.com:Zach4945`,
          `lilchoiboy18@gmail.com:fy48wfy98`,
          `GamingWithFoster@gmail.com:Codie2013`,
          `trunkzhertz786@gmail.com:trunks123`,
          `antwerdy@gmail.com:poll0000`,
          `curesoon@gmail.com:2loveGOD7`,
          `jhickok7@gmail.com:hic662662`,
          `donawt@gmail.com:CRXYfvw7`,
          `austincshaw@gmail.com:cheese555`,
          `joshawesomedude14@gmail.com:Nukacola88`,
          `ruzichjody@gmail.com:march32001`,
          `brewcitysfinest@gmail.com:Ls8215286`,
          `shubeck89@gmail.com:hawaii`,
          `statusaloha808@gmail.com:Dimestar808`,
          `spmandrick04@gmail.com:Alliance04`,
          `chinique99@gmail.com:bailey04`,
          `dbunfried@gmail.com:david1991`,
          `totallyfireproof@gmail.com:mar1naxc`,
          `patt.diego@gmail.com:wascar01`,
          `maddogb3@gmail.com:Michael12`,
          `cutie1n7h@gmail.com:willie08`,
          `lenguyen2677@gmail.com:nguyen55`,
          `millercoreym@gmail.com:linebacker`,
          `johntocci36@gmail.com:Eruzione12.`,
          `alexkoblin@gmail.com:20000140`,
          `ghubbard573@gmail.com:poodood987`,
          `Matthewwillis11@gmail.com:theif2001`,
          `lefty2184@gmail.com:buddyboy2184`,
          `jackziemann05@gmail.com:jamajama1`,
          `millerdalight@gmail.com:youtube69`];

            var uplayembed = new Discord.RichEmbed()
            .setTitle("📌Uplay\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(uplayembed)
            message.author.send((((`${uplay[Math.round(Math.random() * (uplay.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte uplay dans ${message.guild.name}`).red);
    
        {
        }
    }
    });


//origin
bot.on("message", message => {
 
    if (message.content.includes(prefix + "origin")) {
        message.author.send(originembed)

          var origin = [`Kevin.Klein12918@web.de:Kevin12918 `,
          `damik29@o2.pl:Damian20`,
          `imranelmir@gmail.com:Nyuratsi1234`,
          `driesweltens@hotmail.com:W34poM3ZE`,
          `nickdetrick1@aol.com:jay4kids`,
          `minicripto13@gmail.com:Minicripto123`,
          `muhammadadli330@gmail.com:adli1901`,
          `patrick_junod@hotmail.com:Sot794123`,
          `mcalts2@gmail.com:Gatek33per`,
          `Justinedwards327@gmail.com:Justtocoo1`,
          `lucamakoulis@web.de:luca99mama76`,
          `kab.rammbo@yahoo.com:N00dledorf`,
          `randomgamer500@yahoo.com:y0089886`,
          `soundfader@hotmail.co.uk:Trebor68`,
          `karol.m4@o2.pl:Karlos123`,
          `kirillpegov@mail.ru:Kiripegov15`,
          `juliusjg64@gmail.com:Qwertzu8)`,
          `blindpaehse@gmail.com:Blubber25`,
          `jeremygardner97@yahoo.com:Peaceout0`,
          `tbankstoyou@gmail.com:Authentic11`,
          `richde96@gmail.com:2028155St1996`,
          `patrick.beeli@gmx.ch:Nissan486`,
          `pajengers@gmail.com:Diego987`,
          `mgronemeyer01@gmail.com:Mjg127056`,
          `rafaelpereiraboeira@gmail.com:Rafaelpereira123`,
          `mucuburahman321@gmail.com:Yusuf0606`,
          `baptiste.henrion@hotmail.fr:Spelersouve8`,
          `agustinlattuada1998@gmail.com:Nitsuga1998`,
          `kohgshad0w@live.com?:?Irule2004!?`,
          `danees1997@gmail.com:Lencsike97`,
          `maticbbnr1@gmail.com:Goldfinger47`,
          `r.okenczyc123@gmail.com:0D8ada04`,
          `virus_love1@mail.ru:Ta131573`,
          `rune_baunsgaard@hotmail.com:Abehest2212`,
          `dylandam08@gmail.com:Dylandam61`,
          `nikolaiwitch2017@yandex.ru:kolYa2004`,
          `Klepkov.paul@yahoo.de:QscQsc123`,
          `goepfer.kai@web.de:20Biologie09`,
          `1N2qKCAfAJ6817dPztoWP2TmChnE35BiBQ`,
          `jragnoinsc@gmail.com:Joshua15`,
          `reecegrant2@gmail.com:Static52`,
          `ghettotawer227@gmail.com:ytcnthtyrj12UA`,
          `ramilza07@mail.ru:NfNfhcNfy1`,
          `xevillsargex@yahoo.com:Arcadia7`,
          `marlins1994@yahoo.com:Sharks55`,
          `petrokovics@gmail.com:2002Aug13`,
          `legowarp48@gmail.com:Conner03?`];

            var originembed = new Discord.RichEmbed()
            .setTitle("📌Origin\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(originembed)
            message.author.send((((`${origin[Math.round(Math.random() * (origin.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte origin dans ${message.guild.name}`).red);
    
        {
        }
    }
    });


//steam    
bot.on("message", message => {
 
    if (message.content.includes(prefix + "steam")) {
        message.author.send(steamembed)

          var steam = [`chrishart78:eminem`,
              `darrencon:cubs7th`,
              `nolantj:yankees02`,
              `ersilverman:tensor24`,
              `jlayne26:enyal777`,
              `cclopez67:coach67`,
              `dewster0703:dsd0703`,
              `link2009:csfans`,
              `snuffles4:204821205`,
              `diehell:qazwsx`,
              `tamaskas:habbo1`,
              `sun19891031:19891031`,
              `kakadu312:kakadu312`,
              `fhilin:dogy4uaxe`,
              `killawitagun:killer`,
              `usagidrop54:cvbnnbvc`,
              `diskopigg:kottomotto`,
              `cubausa66:jj1966`,
              `grzecho970:kali970`,
              `katon091:100389`,
              `gulum021:212121`,
              `bmike038:donna040`,
              `busloverocky:lanhuong`,
              `cgiallo:batuhan`,
              `averdak:miamoto`,
              `wavy93:6872755`,
              `adros91:thanatos`,
              `wertacks:gfhecybr`,
              `gregzzmail:2527cereb`,
              `cleonzed:tbs13pol`,
              `jmjlocations:507tino`,
              `profsatefwar:aungzawmyint`,
              `karlchavez17:shiela`,
              `guildwarsnrhk:gwnrhk111`,
              `grishin1933:gfhjdjp33`,
              `ivankolo2001:DfczDfyz`,
              `jbenger:bemyescape`,
              `xendy317:bohemka317`,
              `jeetdhaliwal:rajveer`,
              `bobwasbilly:superman21`,
              `tohar781:a1d2i3r4`,
              `ka198400:kas88035`,
              `t281547:zd281547`,
              `darkflare5254:knight233`,
              `johnny5385:3ccc8vwe`,
              `bittu460:hokosennsi`,
              `sayapjibril:fraser911`];

            var steamembed = new Discord.RichEmbed()
            .setTitle("📌Steam\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')


            message.author.send(steamembed)
            message.author.send((((`${steam[Math.round(Math.random() * (steam.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte steam dans ${message.guild.name}`).red);
    
        {
        }
    }
    });

//ubisoft    
bot.on("message", message => {
 
    if (message.content.includes(prefix + "ubisoft")) {
        message.author.send(ubisoftembed)

          var ubisoft = [`pablofroes93@gmail.com:3264672pablo`,
              `nleybo858@gmail.com:98319831a`,
              `deadlyh69@gmail.com:zulowieC12`,
              `pczernic@gmail.com:Pi3truszka`,
              `ragan09@gmail.com:Toolband1!`,
              `jonloving1993@gmail.com:jonathanx79`,
              `gurman.yldzhan@gmail.com:grmn7506`,
              `beau.alphin@gmail.com:Joocebocks1!`,
              `giovanni.perizzolo@gmail.com:Ciaociao123`,
              `marc.desermet@gmail.com:marco33470`,
              `paul.meyerkort@gmail.com:scribble1`,
              `borako.ozarslan@gmail.com:brzrsln96`,
              `ant.orsoni@gmail.com:1KLibr35!`,
              `ichigonn1337@gmail.com:kinder123`,
              `darkfatalityy@gmail.com:nolife11`,
              `jonny.stewart1903@gmail.com:aberdeen`,
              `carlottinger@gmail.com:Legolas1`,
              `spotedrat@gmail.com:f10g11h12`,
              `kousikforu@gmail.com:kousik1986`,
              `piotrczubat@gmail.com:pc7487357`,
              `yash20996@gmail.com:yash1996`,
              `phaenilix@gmail.com:usuratonkachi`,
              `vjohn3@gmail.com:vijayan123`,
              `wrestla10393@gmail.com:Cheyenne1`,
              `manueljoao1282@gmail.com:s.c.braga`,
              `gotmog98@gmail.com:legolas1`,
              `akash.npta@gmail.com:akash12696`,
              `aleksander.pedersen96@gmail.com:hinghongla0904`,
              `lukas.gueth@googlemail.com:lf16lspb`,
              `abrehamgjevestad@gmail.com:skater65`,
              `sjoerdje95@gmail.com:prince63`,
              `debutters4@gmail.com:Db031596`,
              `genezerby@gmail.com:jarod1997`,
              `andrew.henning8@gmail.com:lyne0796`,
              `sanjeed.shriyan7@gmail.com:sarvesh6`,
              `p.birzgalis@gmail.com:Christopher12`,
              `prafful.sahu1@gmail.com:qwerASD4`,
              `lauc.daniel11@gmail.com:danesb123`,
              `bilalgunden@gmail.com:147532689abc`,
              `malagelko@gmail.com:skullcandy98`,
              `hennkka@gmail.com:persehuora12`,
              `mikael.liljander@gmail.com:neekeri20`,
              `ahmedbalcova@gmail.com:ahmed2000`,
              `nikolas.beniak@gmail.com:vranik12`,
              `francisroyalty@gmail.com:royalguard96`,
              `pierre.bertrand50@gmail.com:Plopplop0`,
              `firasfrih13@gmail.com:rid15262`];

            var ubisoftembed = new Discord.RichEmbed()
            .setTitle("📌Ubisoft\nhttps://discord.gg/jrzsC6F ")
            .addField('Voici ton compte ! 🎁', "N'oublie pas de partager le serveur a tes amis pour plus de récompenses. 💰")
            .setColor('#261a72')
            .setFooter('Official Maestro Generator. ')
 

            message.author.send(ubisoftembed)
            message.author.send((((`${ubisoft[Math.round(Math.random() * (ubisoft.length - 1), )]}`))))  
            console.log((`${new Date().toLocaleTimeString()}: ${message.author.username} demande un compte steam dans ${message.guild.name}`).red);
    
        {
        }
    }
    });
}})})
