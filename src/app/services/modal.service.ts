import { Injectable } from '@angular/core';

export interface ModalData {
  title: string;
  desc: string;
  descTwo?: string;
  descThree?: string;
  className: string;
  isOpen: boolean;
  saveButton: {};
  CloseButton: {}
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalData: ModalData = {
    title: '',
    desc: '',
    isOpen: false,
    className: '',
    saveButton: {},
    CloseButton: {}
  };

  openModal(modalData: ModalData) {
    this.modalData = modalData;
    this.modalData.isOpen = true;
    console.log('this.modalData', this.modalData);
  }

  closeModal() {
    this.modalData.isOpen = false;
  }

  constructor() { }
}
