const RightAnswer = [{
        question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        answer: "C) Amazon EC2 instances can be launched on demand when needed",
        justification: "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.",
    },
    {
        question: "Which AWS service would simplify the migration of a database to AWS?",
        answer: "B) AWS Database Migration Service (AWS DMS)",
        justification: "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
    },
    {
        question: "Which AWS networking service enables a company to create a virtual network within AWS?",
        answer: "D) Amazon Virtual Private Cloud (Amazon VPC)",
        justification: "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.",
    },
    {
        question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
        answer: "B) Maintaining physical hardware",
        justification: "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model",
    },
    {
        question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
        answer: "B) Edge locations",
        justification: "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. ",
    },
    {
        question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
        answer: "Enable multi-factor authentication",
        justification: "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password",
    },
    {
        question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
        answer: "AWS CloudTrail",
        justification: "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role",
    },
    {
        question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
        answer: "Amazon Simple Notification Service (Amazon SNS)",
        justification: "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS",
    },
    {
        question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
        answer: "AWS Acceptable Use Policy",
        justification: "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. ",
    },
];