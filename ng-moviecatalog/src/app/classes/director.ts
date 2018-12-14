export class Director {
  id: number;
  name: string;
  nationality: string;
  bio: string;

  public constructor(id?: number,
                     name?: string,
                     nationality?: string,
                     bio?: string) {
    this.id = id;
    this.name = name;
    this.nationality = nationality;
    this.bio = bio;
  }
}
