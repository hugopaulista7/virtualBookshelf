export interface ModalInterface {
  header: string;
  message: string;
  confirmHandler: (...data: any) => {};
  cancelHandler: () => {};
}
