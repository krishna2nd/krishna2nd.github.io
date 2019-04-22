import {
    Technologies,
    Company,
    ProjectRole,
    ProjectType
} from '../types';

const OneCom =   {
    company: Company.ONE_COM,
    duration: {
        from: new Date('2012-10-20'),
        to: new Date('2016-04-28')
    },
    roles: [
        {
            role: 'System Developer',
            duration: {
                from: new Date('2012-10-20'),
                to: new Date('2014-01-01')
            }
        },
        {
            role: 'Senior System Developer',
            duration: {
                from: new Date('2014-01-01'),
                to: new Date('2016-04-28')
            }
        }
    ],
    projects: [
        {
            title: 'Exchange Active sync v2',
            role: ProjectRole.DEVELOPER,
            company: Company.SALTSIDE,
            description: [
                `Microsoft released new version of protocol specification for Exchange active sync. 
                I worked on upgrading current EAS implementation with new protocol specification`
            ],
            technologies: [
                Technologies.NODE,
                Technologies.MOCHA,
                Technologies.PGSQL,
                Technologies.NGINX,
                Technologies.EAS,
                Technologies.IMAP,
                Technologies.CALDAV,
                Technologies.COUCHDB
            ],
            duration: {
                from: new Date('2016-05-02'),
                to: new Date('2016-01-01')
            }
        },

        {
            title: 'Backup Restore System ',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Created tls rpc based backup restore system for customers who hosted their domains in one.com.
                The system handles restore of email, MySQL, Address books, other web applications data.
                Also Written a parallel self-learning job scheduler which execute restore job based on priority, 
                server load, availability of target server and customer state.`
            ],
            technologies: [
                Technologies.GOLANG,
                Technologies.FREEBSD,
                Technologies.ZFS,
                Technologies.RSYNC
            ],
            duration: {
                from: new Date('2015-06-01'),
                to: new Date('2015-12-30')
            }
        },

        {
            title: 'Exchange Active sync v1',
            company: Company.ONE_COM,
            role: ProjectRole.DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Active member in team for developing & bug fixing in EAS (Microsoft Exchange Active sync) protocol 
                Implementation to sync one.com services like Mail, Calendar, Contacts with mobile devices. 
                Developed a EAS/Cal/Contact log analysis system which enhance developer to point out critical issues.`
            ],
            technologies: [
                Technologies.NODE,
                Technologies.PGSQL,
                Technologies.NGINX,
                Technologies.EAS,
                Technologies.IMAP,
                Technologies.CALDAV,
                Technologies.COUCHDB
            ],
            duration: {
                from: new Date('2014-08-01'),
                to: new Date('2015-06-30')
            }
        },

        {
            title: 'XFS INODE STAT',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Which use for bulk stat analysis of xfs file system to find the frequent disk user, customer storage usage details.`
            ],
            technologies: [Technologies.XFS, Technologies.C],
            duration: {
                from: new Date('2014-06-01'),
                to: new Date('2014-06-30')
            }
        },

        {
            title: 'Fsmon/diskusage ',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `One.com provide internet services like Web hosting, Mail Servers, Cloud Drive and other web 	applications, hence it is necessary to calculate customer web space size in near real time 	manner. Achieving near real time we have created and implemented Fsmon and disk usage for NFS/XFS/Maildir.`
            ],
            technologies: [
                Technologies.PHP,
                Technologies.XFS,
                Technologies.C,
                Technologies.NFS,
                Technologies.XMPP,
                Technologies.PYTHON,
                Technologies.BASH
            ],
            duration: {
                from: new Date('2014-07-01'),
                to: new Date('2014-07-30')
            }
        },

        {
            title: 'FTP Server',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Customized pure-ftp open source ftp server with company specification and implemented new module for varnish cache communication`
            ],
            technologies: [
                Technologies.C,
                Technologies.NFS,
                Technologies.BASH,
                Technologies.VARNISH
            ],
            duration: {
                from: new Date('2014-04-01'),
                to: new Date('2014-05-30')
            }
        },

        {
            title: 'Chat ticketing system',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `One.com has several departments to communicate for live customer issues through messenger. 
                Jabber tracker provides and efficient mechanism to raise ticket against respective Department and get solution immediately. 
                It provides features like Issue creation, assign, reopen, close, search, report, Group list announcements, 
                bulk mail/ request handling, shift handling etc.`
            ],
            technologies: [
                Technologies.PHP,
                Technologies.XFS,
                Technologies.C,
                Technologies.NFS,
                Technologies.XMPP,
                Technologies.PYTHON,
                Technologies.BASH
            ],
            duration: {
                from: new Date('2013-12-01'),
                to: new Date('2014-03-30')
            }
        },

        {
            title: 'Sysmail',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Created a centralized cron mail processing and reporting system which receives cron mails generated 
                from servers are then processed and stored in SQLite database (Week basis).Using this stored data 
                for report on sever needed update, server health, process failure details etc.`
            ],
            technologies: [
                Technologies.PHP,
                Technologies.SQLITE,
                Technologies.JQUERY
            ],
            duration: {
                from: new Date('2013-06-01'),
                to: new Date('2013-11-30')
            }
        },

        {
            title: 'Bititfinder',
            company: Company.ONE_COM,
            role: ProjectRole.LEAD_DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Created a backup restore system for customers who hosted their domains in one.com. 
                The system handles the restore of email account, web content restore, MySQL restore, 
                Address books, other web applications, and Cloud drive data.`
            ],
            technologies: [
                Technologies.PHP,
                Technologies.PGSQL,
                Technologies.JQUERY,
                Technologies.NFS
            ],
            duration: {
                from: new Date('2012-11-01'),
                to: new Date('2013-05-30')
            }
        },
        {
            title: 'DevOps',
            company: Company.ONE_COM,
            role: ProjectRole.DEVOPS_ENGINEER,
            type: ProjectType.DEVOPS,
            description: [
                `One.com is an Internet service provider involves Domain registration, Web hosting, Mail Accounts, Cloud drive and other web applications. One.com have 5000+ Servers including Web, Database, Mail storage, SMTP, Cloud, Application servers, Varnish cache, Data Storage, Load balancer, DNS, Central Admin Database, Customer Database, CRM Jboss etc. One.Com is purely working in open source technologies.`,
                `Server Administration needs knowledge in all areas of respective server management and issue resolution if required. Any issue in servers have to be resolved quickly as possible before customer get impacted. Daily basis administration task involves resolving customers issue, DDOS/Botnet attack detection and block, prevent mail spamming, and Database spamming. Create mail/MySQL servers/LXC servers and move customers for load balance etc. `
            ],
            technologies: [
                Technologies.PGSQL,
                Technologies.NAGIOS,
                Technologies.THRUK,
                Technologies.PERL,
                Technologies.APACHE,
                Technologies.DOVECOT,
                Technologies.VARNISH
            ],
            duration: {
                from: new Date('2012-10-20'),
                to: new Date('2013-12-31')
            }
        },
    ]
};

export default OneCom;
