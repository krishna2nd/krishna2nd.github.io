webpackJsonp([1],{"NfG/":function(e){e.exports={techBox:"techBox__2NHSL",dark:"dark__2uGJo"}},SLQc:function(e,t,o){"use strict";var n=o("KM04"),i=(o.n(n),o("9qb7")),s=(o.n(i),o("r78e")),a=(o.n(s),o("bKgr")),r=o.n(a),c=o("/rW/");o.n(c);t.a=function(e){var t=e.id,o=e.title,i=e.children,s=e.footer,a=e.className;return Object(n.h)("div",{id:t},Object(n.h)(c.Grid,{className:a},Object(n.h)(c.Row,null,Object(n.h)(c.Col,{className:r.a.label},o)),Object(n.h)(c.Row,null,Object(n.h)(c.Col,{xs:!0,md:!0,lg:!0},i)),s&&"object"==typeof s?s:Object(n.h)(c.Row,null,Object(n.h)(c.Col,null,s))))}},j2VS:function(){},qmke:function(e,t,o){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o("KM04"),a=o("j2VS"),r=o.n(a),c=(o("xQ7v"),o("xgJW")),l=(o("SLQc"),o("9qb7")),p=o.n(l),g=o("NfG/"),d=o.n(g),m=o("bKgr"),u=o.n(m),h=o("/rW/"),E=Object(s.h)("br",null),S=function(e){var t=e.Technologies,o=Object.keys(t);return Object(s.h)("div",null,Object(s.h)(h.Grid,null,Object(s.h)(h.Row,{start:!0,className:u.a.card},Object(s.h)(h.Col,{xs:12,md:12,lg:12,className:p()(u.a.label,d.a.dark)},"TECHNOLOGIES USED ",E),o.map(function(e){var o=t[e];return Object(s.h)(h.Col,{xs:3,md:3,lg:2,className:d.a.techBox,style:{backgroundImage:"url("+(o.icon||"")+")"}},Object(s.h)("span",null,o.title))}))))},y=S;o.d(t,"default",function(){return f});var D=Object(s.h)(y,{TechnologyType:c.b,Technologies:c.a}),f=function(e){function t(){return n(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return Object(s.h)("div",{class:r.a.technolgies},D)},t}(s.Component)},r78e:function(){},xQ7v:function(e,t,o){"use strict";var n={DEVELOPMENT:"DEVELOPMENT",TESTING:"TESTING",DEVOPS:"DEVOPS"},i={LEAD_DEVELOPER:"LEAD DEVELOPER",DEVELOPER:"DEVELOPER",QE:"QE",DEVOPS_ENGINEER:"DEV OPS ENGINEER"},s={WALMARTLABS:{image:"/assets/experience/walmart-labs.svg",icon:"/assets/experience/icons/walmart-labs.png",title:"Walmart Labs"},INFOSYS:{image:"/assets/experience/infosys.png",icon:"/assets/experience/icons/infosys.png",title:"Infosys Technologies ltd."},ONE_COM:{image:"/assets/experience/one.com.png",icon:"/assets/experience/icons/one.com.png",title:"One.com"},SALTSIDE:{image:"/assets/experience/saltside.png",icon:"/assets/experience/icons/saltside.png",title:"Saltside Technologies"}},a=o("xgJW"),r={company:s.INFOSYS,duration:{from:new Date("2006-07-07"),to:new Date("2009-11-30")},roles:[{role:"Asistant System Engineer",duration:{from:new Date("2006-07-07"),to:new Date("2008-05-30")}},{role:"System Engineer",duration:{from:new Date("2008-06-01"),to:new Date("2009-11-30")}}],projects:[{title:"ELocator",company:s.INFOSYS,role:i.DEVELOPER,type:n.DEVELOPMENT,description:["Web based application for E&R department created in ASP.net, Google map API’s.                 It is a project for managing employee’s certifications, examinations, error reports,                 various reports required for management to evaluate invoice etc."],technologies:[a.a.ASPNET,a.a.MSSQL,a.a.JQUERY,a.a.GOOGLE_MAP,a.a.CSHARP,a.a.SSRS],duration:{from:new Date("2012-11-01"),to:new Date("2013-05-30")}},{title:"KMART",company:s.INFOSYS,role:i.DEVELOPER,type:n.DEVELOPMENT,description:["Worked with a retail web application for KMART,                 I had assigned to fix the bugs on web client side communication/UI issues in www.mygofer.com"],technologies:[a.a.JQUERY],duration:{from:new Date("2012-11-01"),to:new Date("2013-05-30")}},{title:"Shared Lab Portal",company:s.INFOSYS,role:i.DEVELOPER,type:n.DEVELOPMENT,description:["I had involved in development of website for coordinating testing activities of Windows operating system components.                 This Portal enables user to manage jobs for scheduling on machines with testing requirements,                 like install OS (w2k, xp, vista, LH, win7), install updates/Hotfix, run the defined test sets in operating system.                 The portal using WTTOM interface for communicating with machines in network."],technologies:[a.a.ASPNET,a.a.JAVASCRIPT,a.a.CSHARP,a.a.MSSQL,a.a.WTTOM],duration:{from:new Date("2012-11-01"),to:new Date("2013-05-30")}},{title:"Microsoft WinSE",company:s.INFOSYS,role:i.QE,type:n.TESTING,description:["The windows sustained engineering group is involved in maintenance of windows operating systems.                 The project involves testing and test automation of various components for service packs,                 security patches & critical updates of Windows NT, W2K, XP, WSO3 and Vista Operating System, WSO8.                 Quality assurance for the fixes is very important before the operating system patches (Service packs)                 are released worldwide. The activities include system test planning, system testing, and                 liaison with core and sustained engineering teams for test execution on security system components.","I had involved in automation testing and manual test cases execution of various components for different service packs.                 I prepared Patch analysis report for a fix and decide what test traces need to be run to cover security holes.                 I was involved in triage and analysis of OS bugs and their follow-ups with developers.                 I developed automation's of test bed setup using VB scripts, C#, Mita."],technologies:[a.a.WSCRIPTING,a.a.WTTOM,a.a.DOS],duration:{from:new Date("2012-11-01"),to:new Date("2013-05-30")}}]},c=r,l={company:s.ONE_COM,duration:{from:new Date("2012-10-20"),to:new Date("2016-04-28")},roles:[{role:"System Developer",duration:{from:new Date("2012-10-20"),to:new Date("2014-01-01")}},{role:"Senior System Developer",duration:{from:new Date("2014-01-01"),to:new Date("2016-04-28")}}],projects:[{title:"Exchange Active sync v2",role:i.DEVELOPER,company:s.SALTSIDE,description:["Microsoft released new version of protocol specification for Exchange active sync. \n                I worked on upgrading current EAS implementation with new protocol specification"],technologies:[a.a.NODE,a.a.MOCHA,a.a.PGSQL,a.a.NGINX,a.a.EAS,a.a.IMAP,a.a.CALDAV,a.a.COUCHDB],duration:{from:new Date("2016-05-02"),to:new Date("2016-01-01")}},{title:"Backup Restore System ",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["Created tls rpc based backup restore system for customers who hosted their domains in one.com.\n                The system handles restore of email, MySQL, Address books, other web applications data.\n                Also Written a parallel self-learning job scheduler which execute restore job based on priority, \n                server load, availability of target server and customer state."],technologies:[a.a.GOLANG,a.a.FREEBSD,a.a.ZFS,a.a.RSYNC],duration:{from:new Date("2015-06-01"),to:new Date("2015-12-30")}},{title:"Exchange Active sync v1",company:s.ONE_COM,role:i.DEVELOPER,type:n.DEVELOPMENT,description:["Active member in team for developing & bug fixing in EAS (Microsoft Exchange Active sync) protocol \n                Implementation to sync one.com services like Mail, Calendar, Contacts with mobile devices. \n                Developed a EAS/Cal/Contact log analysis system which enhance developer to point out critical issues."],technologies:[a.a.NODE,a.a.PGSQL,a.a.NGINX,a.a.EAS,a.a.IMAP,a.a.CALDAV,a.a.COUCHDB],duration:{from:new Date("2014-08-01"),to:new Date("2015-06-30")}},{title:"XFS INODE STAT",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["Which use for bulk stat analysis of xfs file system to find the frequent disk user, customer storage usage details."],technologies:[a.a.XFS,a.a.C],duration:{from:new Date("2014-06-01"),to:new Date("2014-06-30")}},{title:"Fsmon/diskusage ",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["One.com provide internet services like Web hosting, Mail Servers, Cloud Drive and other web \tapplications, hence it is necessary to calculate customer web space size in near real time \tmanner. Achieving near real time we have created and implemented Fsmon and disk usage for NFS/XFS/Maildir."],technologies:[a.a.PHP,a.a.XFS,a.a.C,a.a.NFS,a.a.XMPP,a.a.PYTHON,a.a.BASH],duration:{from:new Date("2014-07-01"),to:new Date("2014-07-30")}},{title:"FTP Server",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["Customized pure-ftp open source ftp server with company specification and implemented new module for varnish cache communication"],technologies:[a.a.C,a.a.NFS,a.a.BASH,a.a.VARNISH],duration:{from:new Date("2014-04-01"),to:new Date("2014-05-30")}},{title:"Chat ticketing system",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["One.com has several departments to communicate for live customer issues through messenger. \n                Jabber tracker provides and efficient mechanism to raise ticket against respective Department and get solution immediately. \n                It provides features like Issue creation, assign, reopen, close, search, report, Group list announcements, \n                bulk mail/ request handling, shift handling etc."],technologies:[a.a.PHP,a.a.XFS,a.a.C,a.a.NFS,a.a.XMPP,a.a.PYTHON,a.a.BASH],duration:{from:new Date("2013-12-01"),to:new Date("2014-03-30")}},{title:"Sysmail",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["Created a centralized cron mail processing and reporting system which receives cron mails generated \n                from servers are then processed and stored in SQLite database (Week basis).Using this stored data \n                for report on sever needed update, server health, process failure details etc."],technologies:[a.a.PHP,a.a.SQLITE,a.a.JQUERY],duration:{from:new Date("2013-06-01"),to:new Date("2013-11-30")}},{title:"Bititfinder",company:s.ONE_COM,role:i.LEAD_DEVELOPER,type:n.DEVELOPMENT,description:["Created a backup restore system for customers who hosted their domains in one.com. \n                The system handles the restore of email account, web content restore, MySQL restore, \n                Address books, other web applications, and Cloud drive data."],technologies:[a.a.PHP,a.a.PGSQL,a.a.JQUERY,a.a.NFS],duration:{from:new Date("2012-11-01"),to:new Date("2013-05-30")}},{title:"DevOps",company:s.ONE_COM,role:i.DEVOPS_ENGINEER,type:n.DEVOPS,description:["One.com is an Internet service provider involves Domain registration, Web hosting, Mail Accounts, Cloud drive and other web applications. One.com have 5000+ Servers including Web, Database, Mail storage, SMTP, Cloud, Application servers, Varnish cache, Data Storage, Load balancer, DNS, Central Admin Database, Customer Database, CRM Jboss etc. One.Com is purely working in open source technologies.","Server Administration needs knowledge in all areas of respective server management and issue resolution if required. Any issue in servers have to be resolved quickly as possible before customer get impacted. Daily basis administration task involves resolving customers issue, DDOS/Botnet attack detection and block, prevent mail spamming, and Database spamming. Create mail/MySQL servers/LXC servers and move customers for load balance etc. "],technologies:[a.a.PGSQL,a.a.NAGIOS,a.a.THRUK,a.a.PERL,a.a.APACHE,a.a.DOVECOT,a.a.VARNISH],duration:{from:new Date("2012-10-20"),to:new Date("2013-12-31")}}]},p=l,g={company:s.WALMARTLABS,duration:{from:new Date("2017-12-21"),to:new Date},roles:[{role:"Senior Software Engineer",duration:{from:new Date("2017-12-21"),to:new Date}}],projects:[{title:"Mexico Ecommerce",company:s.WALMARTLABS,type:n.DEVELOPMENT,role:i.LEAD_DEVELOPER,description:["Worked on migrating Mexico ecommerce customer faced applications and dependent services from \n            Rackspace cloud to OneOps. Feature development for sams.com.mx web application. \n            Working on creating an orchestrator service for clients by integrating various backend service."],technologies:[a.a.REACT,a.a.NODE,a.a.ONEOPS,a.a.JENKINS],duration:{from:new Date("2017-12-20"),to:Date()}}]},d=g,m={company:s.SALTSIDE,duration:{from:new Date("2016-05-02"),to:new Date("2017-12-20")},roles:[{role:"Senior Software Developer",duration:{from:new Date("2016-05-02"),to:new Date("2017-12-20")}}],projects:[{title:"Web / Backend Core Service ",company:s.SALTSIDE,type:n.DEVELOPMENT,role:i.LEAD_DEVELOPER,description:["Worked on Adding feature or update existing features in Web & API application deployed for 4 countries. \n            Highly scalable architecture, implementation with AWS EC2 instances. \n            Workstation, development environments are with Vagrant, Docker, EC2. \n            Also Worked in integration with various analytics tools, Facebook conversion pixels, Worked on migration to PWA Web"],technologies:[a.a.REACT,a.a.NODE,a.a.DOCKER,a.a.PWA],duration:{from:new Date("2016-05-02"),to:new Date("2017-12-20")}}]},u=m,h=[d,u,p,c];t.a={Experience:h}},xgJW:function(e,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return n});var n={ProgrammingLanguage:"Programming Languages",FrameWork:"Frameworks",Deployment:"Deployment Technologies",Cloud:"Cloud Technologies",Protocol:"Protocols",DataBase:"Databases",Software:"Softwares",FileSystem:"File Systems",OS:"Operating Systems"},i={REACT:{title:"Reactjs",icon:"/assets/technologies/react.svg",description:"",type:n.FrameWork},NODE:{title:"Node.js",icon:"/assets/technologies/node.js.png",decription:"",type:n.ProgrammingLanguage},ONEOPS:{title:"OneOps",icon:"/assets/technologies/oneops.svg",decription:"",type:n.Cloud},AWS:{title:"AWS",icon:"/assets/technologies/aws.png",decription:"",type:n.Cloud},JENKINS:{title:"Jenkins",icon:"/assets/technologies/jenkins.svg",description:"",type:n.Software},GOLANG:{title:"Golang",icon:"/assets/technologies/golang.png",description:"",type:n.ProgrammingLanguage},DOCKER:{title:"Docker",icon:"/assets/technologies/docker.png",description:"",type:n.Deployment},PWA:{title:"PWA",icon:"/assets/technologies/pwa.png",description:"",type:n.FrameWork},WORKBOX:{title:"WorkBox",icon:"/assets/technologies/workbox.svg",description:"",type:n.FrameWork},MOCHA:{title:"Mocha",icon:"/assets/technologies/mocha.jpg",description:"",type:n.FrameWork},NGINX:{title:"Nginx",icon:"/assets/technologies/nginx.svg",description:"",type:n.Software},EAS:{title:"Microsoft Exchange ActiveSync",icon:"/assets/technologies/eas.png",description:"",type:n.Protocol},CALDAV:{title:"Caldav",icon:"/assets/technologies/caldav.png",description:"",type:n.Protocol},COUCHDB:{title:"CouchDB",icon:"/assets/technologies/couchdb.png",description:"",type:n.DataBase},PGSQL:{title:"PostgreSQL",icon:"/assets/technologies/postgresql.png",description:"",type:n.DataBase},IMAP:{title:"IMAP",icon:"/assets/technologies/thunderbird.png",description:"",type:n.Software},FREEBSD:{title:"FreeBSD",icon:"/assets/technologies/freebsd.png",description:"",type:n.OS},ZFS:{title:"ZFS",icon:"/assets/technologies/zfs.png",description:"",type:n.FileSystem},XFS:{title:"XFS",icon:"/assets/technologies/xfs.jpg",description:"",type:n.FileSystem},NFS:{title:"NFS",icon:"/assets/technologies/nfs.png",description:"",type:n.FileSystem},PHP:{title:"PHP",icon:"/assets/technologies/php.png",description:"",type:n.ProgrammingLanguage},PYTHON:{title:"Python",icon:"/assets/technologies/python.png",description:"",type:n.ProgrammingLanguage},BASH:{title:"Bash",icon:"/assets/technologies/bash-l.png",description:"",type:n.ProgrammingLanguage},FTP:{title:"Pure-ftp",icon:"/assets/technologies/pure-ftpd.png",description:"",type:n.Software},RSYNC:{title:"Rsync",icon:"/assets/technologies/rsync.png",description:"",type:n.Protocol},VARNISH:{title:"Varnish",icon:"/assets/technologies/varnish.png",description:"",type:n.Software},ASPNET:{title:"Asp.Net",icon:"/assets/technologies/asp.net.png",description:"",type:n.ProgrammingLanguage},JQUERY:{title:"jQuery",icon:"/assets/technologies/jquery.svg",description:"",type:n.FrameWork},GOOGLE_MAP:{title:"Google Map",icon:"/assets/technologies/googlemap.png",description:"",type:n.FrameWork},CSHARP:{title:"C#",icon:"/assets/technologies/csharp.png",description:"",type:n.ProgrammingLanguage},SSRS:{title:"SSRS",icon:"/assets/technologies/ssrs.png",description:"",type:n.Software},JAVASCRIPT:{title:"Javascript",icon:"/assets/technologies/js.png",description:"",type:n.ProgrammingLanguage},WTTOM:{title:"WTTOM",icon:"/assets/technologies/wttom.jpg",description:"Windows Testing Technologies",type:n.Software},NAGIOS:{title:"NAGIOS",icon:"/assets/technologies/nagios.png",description:"",type:n.Software},THRUK:{title:"THRUK",icon:"/assets/technologies/thruk.png",description:"",type:n.Software},PERL:{title:"Perl",icon:"/assets/technologies/perl.png",description:"",type:n.ProgrammingLanguage},DOVECOT:{title:"Dovcot IMAP",icon:"/assets/technologies/dovecot.svg",description:"Devcot IMAP Server",type:n.Software},APACHE:{title:"Apache 2",icon:"/assets/technologies/apache.jpg",description:"Web Server",type:n.Software},WSCRIPTING:{title:"Windows Scripting",icon:"/assets/technologies/wscripting.png",description:"Windows Scripting, Jscript, VB Script",type:n.ProgrammingLanguage},DOS:{title:"DOS",icon:"/assets/technologies/msdos.png",description:"DOS shell",type:n.Software},C:{title:"C",icon:"/assets/technologies/c.png",description:"",type:n.ProgrammingLanguage},XMPP:{title:"XMPP",icon:"/assets/technologies/xmpp.svg",description:"",type:n.Protocol},SQLITE:{title:"Sqlite",icon:"/assets/technologies/sqlite.png",description:"",type:n.DataBase},MSSQL:{title:"MSSQL",icon:"/assets/technologies/mssql.png",description:"Microsoft SQL Server",type:n.DataBase},MYSQL:{title:"MYSQL",icon:"/assets/technologies/mysql.svg",description:"My SQL Server",type:n.DataBase},MARIADB:{title:"MARIADB",icon:"/assets/technologies/mariadb.png",description:"Maria DB Server",type:n.DataBase},MONGODB:{title:"MONGODB",icon:"/assets/technologies/mongodb.png",description:"MongoDB",type:n.DataBase},DYNAMODB:{title:"Dynamo DB",icon:"/assets/technologies/dynamodb.png",description:"Dynamo DB",type:n.DataBase},NEO4J:{title:"Neo4j",icon:"/assets/technologies/neo4j.png",description:"Neo4j",type:n.DataBase},LXC:{title:"LXC",icon:"/assets/technologies/lxc.png",description:"LXC",type:n.Deployment},KUBERNETES:{title:"Kubernetes",icon:"/assets/technologies/kubernetes.svg",description:"kubernetes",type:n.Deployment}}}});
//# sourceMappingURL=route-technologies.chunk.299d3.js.map