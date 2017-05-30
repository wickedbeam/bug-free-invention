import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this)); //bind ไว้ให้มันขี้ this ไปที่ object ใน toggleMenu เพราะ default ถ้ามันอยุ่ในฟังก์ชั่นเรียกมันขะชี้ไปที่ menuIcon
	}
	
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header__is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon__close-x");
	}
}

export default MobileMenu;