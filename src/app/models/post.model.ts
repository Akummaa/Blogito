export class Post {

  public postDate;
    constructor(
      public name: string,
      public description: string,
      public nbLike: number,
      public nbDislike: number
    ) {
      this.postDate = new Date().toUTCString();
    }
}
