const TechnologyType = {
	ProgrammingLanguage: 'Programming Languages',
	FrameWork: 'Frameworks',
	Deployment: 'Deployment Technologies',
	Cloud: 'Cloud Technologies',
	Protocol: 'Protocols',
	DataBase: 'Databases',
	Software: 'Softwares',
	FileSystem: 'File Systems',
	OS: 'Operating Systems',
};

const Technologies = {
	REACT: {
		title: 'Reactjs',
		icon: '/assets/technologies/react.svg',
		description: '',
		type: TechnologyType.FrameWork
	},
	NODE: {
		title: 'Node.js',
		icon: '/assets/technologies/node.js.png',
		decription: '',
		type: TechnologyType.ProgrammingLanguage
	},
	ONEOPS: {
		title: 'OneOps',
		icon: '/assets/technologies/oneops.svg',
		decription: '',
		type: TechnologyType.Cloud
	},
	AWS: {
		title: 'AWS',
		icon: '/assets/technologies/aws.png',
		decription: '',
		type: TechnologyType.Cloud
	},
	JENKINS: {
		title: 'Jenkins',
		icon: '/assets/technologies/jenkins.svg',
		description: '',
		type: TechnologyType.Software
	},
	GOLANG: {
		title: 'Golang',
		icon: '/assets/technologies/golang.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	DOCKER: {
		title: 'Docker',
		icon: '/assets/technologies/docker.png',
		description: '',
		type: TechnologyType.Deployment
	},
	PWA: {
		title: 'PWA',
		icon: '/assets/technologies/pwa.png',
		description: '',
		type: TechnologyType.FrameWork
	},
	WORKBOX: {
		title: 'WorkBox',
		icon: '/assets/technologies/workbox.svg',
		description: '',
		type: TechnologyType.FrameWork
	},
	MOCHA: {
		title: 'Mocha',
		icon: '/assets/technologies/mocha.jpg',
		description: '',
		type: TechnologyType.FrameWork
	},
	NGINX: {
		title: 'Nginx',
		icon: '/assets/technologies/nginx.svg',
		description: '',
		type: TechnologyType.Software
	},
	EAS: {
		title: 'Microsoft Exchange ActiveSync',
		icon: '/assets/technologies/eas.png',
		description: '',
		type: TechnologyType.Protocol
	},
	CALDAV: {
		title: 'Caldav',
		icon: '/assets/technologies/caldav.png',
		description: '',
		type: TechnologyType.Protocol
	},
	COUCHDB: {
		title: 'CouchDB',
		icon: '/assets/technologies/couchdb.png',
		description: '',
		type: TechnologyType.DataBase
	},
	PGSQL: {
		title: 'PostgreSQL',
		icon: '/assets/technologies/postgresql.png',
		description: '',
		type: TechnologyType.DataBase
	},
	IMAP: {
		title: 'IMAP',
		icon: '/assets/technologies/thunderbird.png',
		description: '',
		type: TechnologyType.Software
	},
	FREEBSD: {
		title: 'FreeBSD',
		icon: '/assets/technologies/freebsd.png',
		description: '',
		type: TechnologyType.OS
	},
	ZFS: {
		title: 'ZFS',
		icon: '/assets/technologies/zfs.png',
		description: '',
		type: TechnologyType.FileSystem

	},
	XFS: {
		title: 'XFS',
		icon: '/assets/technologies/xfs.jpg',
		description: '',
		type: TechnologyType.FileSystem
	},
	NFS: {
		title: 'NFS',
		icon: '/assets/technologies/nfs.png',
		description: '',
		type: TechnologyType.FileSystem
	},
	PHP: {
		title: 'PHP',
		icon: '/assets/technologies/php.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	PYTHON: {
		title: 'Python',
		icon: '/assets/technologies/python.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	BASH: {
		title: 'Bash',
		icon: '/assets/technologies/bash-l.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	FTP: {
		title: 'Pure-ftp',
		icon: '/assets/technologies/pure-ftpd.png',
		description: '',
		type: TechnologyType.Software
	},
	RSYNC: {
		title: 'Rsync',
		icon: '/assets/technologies/rsync.png',
		description: '',
		type: TechnologyType.Protocol
	},
	VARNISH: {
		title: 'Varnish',
		icon: '/assets/technologies/varnish.png',
		description: '',
		type: TechnologyType.Software
	},
	ASPNET: {
		title: 'Asp.Net',
		icon: '/assets/technologies/asp.net.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	JQUERY: {
		title: 'jQuery',
		icon: '/assets/technologies/jquery.svg',
		description: '',
		type: TechnologyType.FrameWork
	},
	GOOGLE_MAP: {
		title: 'Google Map',
		icon: '/assets/technologies/googlemap.png',
		description: '',
		type: TechnologyType.FrameWork
	},
	CSHARP: {
		title: 'C#',
		icon: '/assets/technologies/csharp.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	SSRS: {
		title: 'SSRS',
		icon: '/assets/technologies/ssrs.png',
		description: '',
		type: TechnologyType.Software
	},
	JAVASCRIPT: {
		title: 'Javascript',
		icon: '/assets/technologies/js.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	WTTOM: {
		title: 'WTTOM',
		icon: '/assets/technologies/wttom.jpg',
		description: 'Windows Testing Technologies',
		type: TechnologyType.Software
	},
	NAGIOS: {
		title: 'NAGIOS',
		icon: '/assets/technologies/nagios.png',
		description: '',
		type: TechnologyType.Software
	},
	THRUK: {
		title: 'THRUK',
		icon: '/assets/technologies/thruk.png',
		description: '',
		type: TechnologyType.Software
	},
	PERL: {
		title: 'Perl',
		icon: '/assets/technologies/perl.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	DOVECOT: {
		title: 'Dovcot IMAP',
		icon: '/assets/technologies/dovecot.svg',
		description: 'Devcot IMAP Server',
		type: TechnologyType.Software
	},
	APACHE: {
		title: 'Apache 2',
		icon: '/assets/technologies/apache.jpg',
		description: 'Web Server',
		type: TechnologyType.Software
	},
	WSCRIPTING: {
		title: 'Windows Scripting',
		icon: '/assets/technologies/wscripting.png',
		description: 'Windows Scripting, Jscript, VB Script',
		type: TechnologyType.ProgrammingLanguage
	},
	DOS: {
		title: 'DOS',
		icon: '/assets/technologies/msdos.png',
		description: 'DOS shell',
		type: TechnologyType.Software
	},
	C: {
		title: 'C',
		icon: '/assets/technologies/c.png',
		description: '',
		type: TechnologyType.ProgrammingLanguage
	},
	XMPP: {
		title: 'XMPP',
		icon: '/assets/technologies/xmpp.svg',
		description: '',
		type: TechnologyType.Protocol
	},
	SQLITE: {
		title: 'Sqlite',
		icon: '/assets/technologies/sqlite.png',
		description: '',
		type: TechnologyType.DataBase
	},
	MSSQL: {
		title: 'MSSQL',
		icon: '/assets/technologies/mssql.png',
		description: 'Microsoft SQL Server',
		type: TechnologyType.DataBase
	},
	MYSQL: {
		title: 'MYSQL',
		icon: '/assets/technologies/mysql.svg',
		description: 'My SQL Server',
		type: TechnologyType.DataBase
	},
	MARIADB: {
		title: 'MARIADB',
		icon: '/assets/technologies/mariadb.png',
		description: 'Maria DB Server',
		type: TechnologyType.DataBase
	},
	MONGODB: {
		title: 'MONGODB',
		icon: '/assets/technologies/mongodb.png',
		description: 'MongoDB',
		type: TechnologyType.DataBase
	},
	DYNAMODB: {
		title: 'Dynamo DB',
		icon: '/assets/technologies/dynamodb.png',
		description: 'Dynamo DB',
		type: TechnologyType.DataBase
	},
	NEO4J: {
		title: 'Neo4j',
		icon: '/assets/technologies/neo4j.png',
		description: 'Neo4j',
		type: TechnologyType.DataBase
	},
	LXC: {
		title: 'LXC',
		icon: '/assets/technologies/lxc.png',
		description: 'LXC',
		type: TechnologyType.Deployment
	},
	KUBERNETES: {
		title: 'Kubernetes',
		icon: '/assets/technologies/kubernetes.svg',
		description: 'kubernetes',
		type: TechnologyType.Deployment
	}
};

export { Technologies, TechnologyType };
