import {
    Technologies,
    Company,
    ProjectRole,
    ProjectType
} from '../types';

const WalmartLabs = {
    company: Company.WALMARTLABS,
    duration: {
        from: new Date('2017-12-21'),
        to: new Date()
    },
    roles: [
        {
            role: 'Senior Software Engineer',
            duration: {
                from: new Date('2017-12-21'),
                to: new Date()
            }
        }
    ],
    projects: [{
        title: 'Mexico Ecommerce',
        company: Company.WALMARTLABS,
        type: ProjectType.DEVELOPMENT,
        role: ProjectRole.LEAD_DEVELOPER,
        description: [
            `Worked on migrating Mexico ecommerce customer faced applications and dependent services from 
            Rackspace cloud to OneOps. Feature development for sams.com.mx web application. 
            Working on creating an orchestrator service for clients by integrating various backend service.`
        ],
        technologies: [
            Technologies.REACT,
            Technologies.NODE,
            Technologies.ONEOPS,
            Technologies.JENKINS
        ],
        duration: {
            from: new Date('2017-12-20'),
            to: Date()
        }
    }]
};

export default WalmartLabs;
