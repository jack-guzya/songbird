import $ from 'jquery'; // FOR CROSS-CHECK: BOOTSTRAP (row 28) => https://docs.google.com/spreadsheets/d/1CKx6BcS7DgFHPhdaB3IUoaNLUcGDlqHqus3wms5b1V4/edit#gid=1466057393

export interface IController {
  hide: () => void
  show: () => void,
  onHidden: (callBack: () => void) => void,
}

export const id = 'modal';

export const controller: IController = {
  hide: () => $(`#${id}`).modal('hide'),
  show: () => $(`#${id}`).modal('show'),
  onHidden: (callBack: () => void) => $(`#${id}`).on('hidden.bs.modal', callBack),
};
