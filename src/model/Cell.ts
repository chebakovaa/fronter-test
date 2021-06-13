import ICell from "./ICell";

export default class Cell implements ICell {

  private readonly _id: number = -1;
  private readonly _content: any = null;
  private _isVisible = false;
  private _isDeleted = false;
  private _idContent: number;

  constructor(id: number, idContent: number, content: any) {
    this._id = id;
    this._idContent = idContent;
    this._content = content;
  }

  public get content(): any { return this._content; }
  
  public get id(): number { return this._id; }

  public get idContent(): number { return this._idContent; }

  public get isVisible(): boolean { return this._isVisible; }

  public get isDeleted(): boolean { return this._isDeleted; }

  delete() {
    this._isDeleted = true;
  }

  show() {
    this._isVisible = true;
  }

  hide() {
    this._isVisible = false;
  }
  
}