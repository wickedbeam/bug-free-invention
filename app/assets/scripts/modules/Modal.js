import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
		}

		events() {
			//click the open modal button
			this.openModalButton.click(this.openModal.bind(this));

			//clicking the x close modal button
			this.closeModalButton.click(this.closeModal.bind(this));

			//pushes any key
			$(document).keyup(this.keyPressHandler.bind(this));
		}

		keyPressHandler(e) {
			if (e.keyCode ==27) { //27 คือ esc
				this.closeModal();
			}	
		}

		openModal() {
			this.modal.addClass("modal__is-visible");
			return false;

		}

		closeModal() {
			this.modal.removeClass("modal__is-visible");
		}
	}


export default Modal;