import { h, Component } from 'preact';
import style from './style';

export default class Experience extends Component {
	render() {
		return (
			<div class={style.experience}>
				DEVELOPMENT PROJECTS 
 
 Mexico Ecommerce (Walmart Labs)
 Worked on migrating Mexico ecommerce customer faced applications and dependent services from Rackspace cloud to OneOps. Feature development for sams.com.mx web application. Working on creating an orchestrator service for clients by integrating various backend service.
 
 Technologies: Reactjs, Node.js, OneOps, Looper.
 
 Web/Core Service (Saltside Technologies)
 Worked on Adding feature or update existing features in Web & API application deployed for 4 countries. Highly scalable architecture, implementation with AWS EC2 instances. Workstation, development environments are with Vagrant, Docker, EC2. Also Worked in integration with various analytics tools, Facebook conversion pixels.
 
 Currently working on migration legacy web application to react oriented progressive web app.
 
 Technologies: Reactjs, Node.js for web, Golang for Core, Docker, PWA (Progressive Web App), Service workers
 
 Exchange Active sync v2(One.com)
 Microsoft released new version of protocol specification for Exchange active sync. I worked on upgrading current EAS implementation with new protocol specification.
 Technologies: node.js, mocha, PgSQL, Ngnix, Microsoft Exchange ActiveSync, IMAP, Caldav, CouchDB.
 
 Backup Restore System (One.com)
 Created tls rpc based backup restore system for customers who hosted their domains in one.com. The system handles restore of email, MySQL, Address books, other web applications data. Also Written a parallel self-learning job scheduler which execute restore job based on priority, server load, availability of target server and customer state.
 Technologies: Golang, FreeBSD, zfs, rsync.
 
 Exchange Active sync v1 (One.com)
 Active member in team for developing & bug fixing in EAS (Microsoft Exchange Active sync) protocol Implementation to sync one.com services like Mail, Calendar, Contacts with mobile devices. Developed a EAS/Cal/Contact log analysis system which enhance developer to point out critical issues.
 Technologies: node.js, PgSQL, ngnix, Microsoft Exchange ActiveSync, IMAP, Caldav, CouchDB.
 
 Custom tools/applications (One.com)
 xfs inode stat: 
	 Which use for bulk stat analysis of xfs file system to find the frequent disk user, usage limit.
 Ftp-server: 
 Customized pure-ftp open source ftp server with company specification and implemented new module for varnish cache communication.
 Chat-ticketing system: 
 One.com has several departments to communicate for live customer issues through messenger. Jabber tracker provides and efficient mechanism to raise ticket against respective Department and get solution immediately. It provides features like Issue creation, assign, reopen, close, search, report, Group list announcements, bulk mail/ request handling, shift handling etc.
 Fsmon/diskusage :
 One.com provide internet services like Web hosting, Mail Servers, Cloud Drive and other web 	applications, hence it is necessary to calculate customer web space size in near real time 	manner. Achieving near real time we have created and implemented Fsmon and disk usage for NFS/XFS/Maildir.
 Technologies: Java, PHP, XMPP, C, Python, Bash.
 Bititfinder (One.com - legacy systems)
 Created a backup restore system for customers who hosted their domains in one.com. The system handles the restore of email account, web content restore, MySQL restore, Address books, other web applications, and Cloud drive data.
 Technologies: PHP, pgSQL, eclipse, jQuery.
 Sysmail (One.com)
 Created a centralized cron mail processing and reporting system which receives cron mails generated from servers are then processed and stored in SQLite database (Week basis).Using this stored data for report on sever needed update, server health, process failure details etc.
 Technologies: PHP, SQLite3, eclipse, jQuery. 
 
 ELocator (Infosys)
 Web based application for E&R department created in ASP.net, Google map API’s. It is a project for managing employee’s certifications, examinations, error reports, various reports required for management to evaluate invoice etc.
 Technologies: C#, Visual Studio 2008, ASP. Net, Google Map, Ajax, Google Map API, SSRS
 
 KMART (mygofer)
 Worked with a retail web application for KMART, I had assigned to fix the bugs on web client side communication/UI issues in www.mygofer.com
 Technologies: Java, WCS, Eclipse, jQuery.
 
 Shared Lab Portal (Microsoft)
 I had involved in development of website for coordinating testing activities of Windows operating system components. This Portal enables user to manage jobs for scheduling on machines with testing requirements, like install OS (w2k, xp, vista, LH, win7), install updates/Hotfix, run the defined test sets in operating system. The portal using WTTOM interface for communicating with machines in network.
 Technologies: C#, Visual Studio 2008, ASP.Net, SQL Server, Ajax, WTTOM. 
 
 TESTING PROJECTS 
  
 Microsoft windows sustained engineering (Microsoft)
 Windows SE
 The windows sustained engineering group is involved in maintenance of windows operating systems. The project involves testing and test automation of various components for service packs, security patches & critical updates of Windows NT, W2K, XP, WSO3 and Vista Operating System, WSO8. Quality assurance for the fixes is very important before the operating system patches (Service packs) are released worldwide. The activities include system test planning, system testing, and liaison with core and sustained engineering teams for test execution on security system components.
 I had involved in automation testing and manual test cases execution of various components for different service packs. I prepared Patch analysis report for a fix and decide what test traces need to be run to cover security holes. I was involved in triage and analysis of OS bugs and their follow-ups with developers. I developed automation's of test bed setup using VB scripts, C#, Mita.
 Technologies:  Windows Scripting, Jscript, VB script, WTT
 
 CAI18N (Computer Associates)
 I was member of testing team for the project of internationalization of eHealth software from CA, product having around 6 million lines of code, and we have to support internationalization in 7 more language, I had executed i18n testing in windows as well as Linux environment and prepared report based on the outcome.
 Technologies:  C++, Java, Linux Shell scripting
 
 Vendor review (One.com)
 We have selected some vendor for developing our CMS plugins. I have done vendor product analysis, code review  and quality check as per our requirement checklist.
 Technologies: HTML, PHP, JavaScript 
 
 SERVER ADMINISTRATION 
 
 Server administration (One.com)
 One.com is an Internet service provider involves Domain registration, Web hosting, Mail Accounts, Cloud drive and other web applications. One.com have 5000+ Servers including Web, Database, Mail storage, SMTP, Cloud, Application servers, Varnish cache, Data Storage, Load balancer, DNS, Central Admin Database, Customer Database, CRM Jboss etc. One.Com is purely working in open source technologies.
 
 Server Administration needs knowledge in all areas of respective server management and issue resolution if required. Any issue in servers have to be resolved quickly as possible before customer get impacted. Daily basis administration task involves resolving customers issue, DDOS/Botnet attack detection and block, prevent mail spamming, and Database spamming. Create mail/MySQL servers/LXC servers and move customers for load balance etc. 
 Technologies:  PgSQL, Nagios, Thruk, Perl, Apache, PHP, dovecot, Varnish etc.
  
 
			</div>
		);
	}
}
