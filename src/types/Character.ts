interface Serie {
  name: string;
}
export default interface Character {
  id: string;
  name: string;
  description?: string | null;
  thumbnail: string;
  series?: Serie[];
}
