export default interface ICell {
  
  id: number;
  idContent: number;
  content: any;
  isDeleted: boolean;
  isVisible: boolean;

  delete(): void;
  hide(): void;
  show(): void;
}