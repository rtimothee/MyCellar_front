export class WineModel{
  id: number;
  name: string;
  year: number;
  region: string;


  constructor(id: number, name: string, year: number, region:string){
    this.id = id;
    this.name = name;
    this.year = year;
    this.region = region;
  }


  /**
   * Getter Id
   *
   * @return number Id
   */
  getId(): number {
    return this.id;
  }

  /**
   * Setter Id
   *
   * @param number Id
   */
  setId(id: number): void {
    this.id = id;
  }

  /**
   * Getter name
   *
   * @return string Name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Setter Name
   *
   * @param string Name
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Getter Year
   *
   * @return number Year
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Setter Year
   *
   * @param number Year
   */
  setYear(year: number): void {
    this.year = year;
  }

  /**
   * Getter region
   *
   * @return string Region
   */
  getRegion(): string {
    return this.region;
  }

  /**
   * Setter Region
   *
   * @param string Region
   */
  setRegion(region: string): void {
    this.region = region;
  }
}
