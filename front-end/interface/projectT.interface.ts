export default interface TagType {
  id: number;
  name: string;
  cnt: number;
}

export default interface Data{
  id: number,
  title: string,
  content: string,
  hits: number,
  createdAt: string,
  category: string,
  img?: string
  hashTag?: TagType[];
}