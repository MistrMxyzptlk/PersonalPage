export interface IBreakpointModel<T> {
  orientation?: boolean;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  value: T;
}
