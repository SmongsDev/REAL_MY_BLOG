export default interface TagType {
  id: number;
  name: string;
}

export default interface Data{
  id: number,
  title: string,
  content: string,
  hits: number,
  createdAt: string,
  img?: string
  tags?: TagType[];
}