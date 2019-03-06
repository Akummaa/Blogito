export class Post {
    constructor(
      public name: string,
      public description: string,
      public nbLike: number,
      public nbDislike: number,
      public postDate= new Date().toUTCString()
    ) {}
  }