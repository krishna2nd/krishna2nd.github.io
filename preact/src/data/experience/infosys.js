import {
    Technologies,
    Company,
    ProjectRole,
    ProjectType
} from '../types';

const Infosys =  {
    company: Company.INFOSYS,
    duration: {
        from: new Date('2006-07-07'),
        to: new Date('2009-11-30')
    },
    roles: [
        {
            role: 'Asistant System Engineer',
            duration: {
                from: new Date('2006-07-07'),
                to: new Date('2008-05-30')
            }
        },
        {
            role: 'System Engineer',
            duration: {
                from: new Date('2008-06-01'),
                to: new Date('2009-11-30')
            }
        }
    ],
    projects: [
        {
            title: 'ELocator',
            company: Company.INFOSYS,
            role: ProjectRole.DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Web based application for E&R department created in ASP.net, Google map API’s. 
                It is a project for managing employee’s certifications, examinations, error reports, 
                various reports required for management to evaluate invoice etc.`
            ],
            technologies: [
                Technologies.ASPNET,
                Technologies.MSSQL,
                Technologies.JQUERY,
                Technologies.GOOGLE_MAP,
                Technologies.CSHARP,
                Technologies.SSRS
            ],
            duration: {
                from: new Date('2012-11-01'),
                to: new Date('2013-05-30')
            }
        },

        {
            title: 'KMART',
            company: Company.INFOSYS,
            role: ProjectRole.DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `Worked with a retail web application for KMART, 
                I had assigned to fix the bugs on web client side communication/UI issues in www.mygofer.com`
            ],
            technologies: [Technologies.JQUERY],
            duration: {
                from: new Date('2012-11-01'),
                to: new Date('2013-05-30')
            }
        },

        {
            title: 'Shared Lab Portal',
            company: Company.INFOSYS,
            role: ProjectRole.DEVELOPER,
            type: ProjectType.DEVELOPMENT,
            description: [
                `I had involved in development of website for coordinating testing activities of Windows operating system components. 
                This Portal enables user to manage jobs for scheduling on machines with testing requirements, 
                like install OS (w2k, xp, vista, LH, win7), install updates/Hotfix, run the defined test sets in operating system. 
                The portal using WTTOM interface for communicating with machines in network.`
            ],
            technologies: [
                Technologies.ASPNET,
                Technologies.JAVASCRIPT,
                Technologies.CSHARP,
                Technologies.MSSQL,
                Technologies.WTTOM
            ],
            duration: {
                from: new Date('2012-11-01'),
                to: new Date('2013-05-30')
            }
        },

        {
            title: 'Microsoft WinSE',
            company: Company.INFOSYS,
            role: ProjectRole.QE,
            type: ProjectType.TESTING,
            description: [
                `The windows sustained engineering group is involved in maintenance of windows operating systems. 
                The project involves testing and test automation of various components for service packs, 
                security patches & critical updates of Windows NT, W2K, XP, WSO3 and Vista Operating System, WSO8. 
                Quality assurance for the fixes is very important before the operating system patches (Service packs) 
                are released worldwide. The activities include system test planning, system testing, and 
                liaison with core and sustained engineering teams for test execution on security system components.`,
                `I had involved in automation testing and manual test cases execution of various components for different service packs. 
                I prepared Patch analysis report for a fix and decide what test traces need to be run to cover security holes. 
                I was involved in triage and analysis of OS bugs and their follow-ups with developers. 
                I developed automation's of test bed setup using VB scripts, C#, Mita.`
            ],
            technologies: [
                Technologies.WSCRIPTING,
                Technologies.WTTOM,
                Technologies.DOS
            ],
            duration: {
                from: new Date('2012-11-01'),
                to: new Date('2013-05-30')
            }
        }
    ]
}

export default Infosys;
