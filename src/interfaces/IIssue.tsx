export default interface IIssue
{
    id: string,
    summary: string,
    type: number,
    projectID: string,
    description: string,
    priority: number,
    assignee: {
        id: number,
    name: string,
        email: string,
        teamName: string,
        desination: string
    },
    tags: string[],
    sprint: string,
    storyPoint: null,
    status: number,
    createdBy: {
        id: number,
        name: string,
        email: string,
        teamName: string,
        desination: string
    },
    createdOn:string,
    updatedBy: {
        id: number,
        name: string,
        email: string,
        teamName:string ,
        desination: string
    },
    updatedOn: string
}