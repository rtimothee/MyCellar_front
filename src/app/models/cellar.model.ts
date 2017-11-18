import { WineModel } from './wine.model';

export class CellarModel{
  id: number;
  name: string;
  wines: WineModel[];

  constructor(id: number, name: string, wines: WineModel[]){
    this.id = id;
    this.name = name;
    this.wines = wines;
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
   * Getter wines
   *
   * @return WineModel[] Wines
   */
  getWines(): WineModel[] {
    return this.wines;
  }

  /**
   * Setter Wines
   *
   * @param WineModel[] Wines
   */
  setWines(wines: WineModel[]): void {
    this.wines = wines;
  }

  /**
   * Add a wine in the cellar
   *
   * @param WineModel wine
   */
  addWine(wine: WineModel): void {
    this.wines.push(wine);
  }
}
