interface Title{
    type: string;
    text: [] | null;
    plain_text: string;
}

interface Rich {
    type: string;
    plain_text: string;
}

interface Mult{
    id: string;
    name: string;
    color: string;
}

interface Proprty{
    Date: {
        id: string;
        type: string;
        date: {
            start: string;
            end: string;
        };
    }
    content: {
        id: string;
        type: string;
        rich_text: Rich[];
    }
    Tag: {
        id: string;
        type: string;
        multi_select: Mult[];
    }
    Github: {
        id: string,
        type: string,
        url: string | undefined;
    },
    Youtube: {
        id: string,
        type: string,
        url: string | undefined;
    },
    Name: {
        id: string,
        type: string,
        title: Title | any;
    }
}

interface Img{
    file?: {
        url: string;
    }
    external: {
        url: string;
    }
}

export default interface ProjectType {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    properties: Proprty;
    url: string;
    cover: Img;
}