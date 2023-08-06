import {
    Technologies,
    Company,
    ProjectRole,
    ProjectType
} from '../types';

const SaltSide =  {
    company: Company.SALTSIDE,
    duration: {
        from: new Date('2016-05-02'),
        to: new Date('2017-12-20')
    },
    roles: [
        {
            role: 'Senior Software Developer',
            duration: {
                from: new Date('2016-05-02'),
                to: new Date('2017-12-20')
            }
        }
    ],
    projects: [{
        title: 'Web / Backend Core Service ',
        company: Company.SALTSIDE,
        type: ProjectType.DEVELOPMENT,
        role: ProjectRole.LEAD_DEVELOPER,
        description: [
            `Worked on Adding feature or update existing features in Web & API application deployed for 4 countries. 
            Highly scalable architecture, implementation with AWS EC2 instances. 
            Workstation, development environments are with Vagrant, Docker, EC2. 
            Also Worked in integration with various analytics tools, Facebook conversion pixels, Worked on migration to PWA Web`
        ],
        technologies: [
            Technologies.REACT,
            Technologies.NODE,
            Technologies.DOCKER,
            Technologies.PWA
        ],
        duration: {
            from: new Date('2016-05-02'),
            to: new Date('2017-12-20')
        }
    }]
};

export default SaltSide;
