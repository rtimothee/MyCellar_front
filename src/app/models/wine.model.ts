export class WineModel{
  id: number;
  name: string;
  year: number;
  region: string;
  domain : string;
  appelation : string;
  localisation : string;
  cepage : string;
  color : string;



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

  /**
   * Getter Domain
   *
   * @return string domain
   */
  getDomain(): string {
    return this.domain;
  }

  /**
   * Setter Domain
   *
   * @param string domain
   */
  setDomain(domain: string): void {
    this.domain = domain;
  }

  /**
   * Getter Appelation
   *
   * @return string appelation
   */
  getAppelation(): string {
    return this.appelation;
  }

  /**
   * Setter Appelation
   *
   * @param string appelation
   */
  setAppelation(appelation: string): void {
    this.appelation = appelation;
  }

  /**
   * Getter localisation
   *
   * @return string localisation
   */
  getLocalisation(): string {
    return this.localisation;
  }

  /**
   * Setter localisation
   *
   * @param string localisation
   */
  setLocalisation(localisation: string): void {
    this.localisation = localisation;
  }

  /**
   * Getter cepage
   *
   * @return string cepage
   */
  getCepage(): string {
    return this.cepage;
  }

  /**
   * Setter cepage
   *
   * @param string cepage
   */
  setCepage(cepage: string): void {
    this.cepage = cepage;
  }

  /**
   * Getter color
   *
   * @return string color
   */
  getColor(): string {
    return this.color;
  }

  /**
   * Setter color
   *
   * @param string color
   */
  setColor(color: string): void {
    this.color = color;
  }
}
