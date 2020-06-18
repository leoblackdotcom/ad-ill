ps.navModule = (function() {

  let dropdownLinks;
  let openClass = 'feds-popup--open';


  function onDropdownLinkClick(e){
    const $thisLink = e.currentTarget;
    const $thisDropdown = $thisLink.nextElementSibling;
    const isOpen = $thisDropdown.classList.contains(openClass);
    document.querySelectorAll(`.${openClass}`).forEach(($openDropdown)=>{
      $openDropdown.classList.toggle(openClass,false);
    })
    $thisDropdown.classList.toggle(openClass,!isOpen);
  }

  function addNavListeners() {
    dropdownLinks = document.querySelectorAll('.feds-popup-trigger .feds-navLink');
    dropdownLinks.forEach((dropdownLink,index)=>{
      dropdownLink.addEventListener('click',onDropdownLinkClick);
    })
  }

  function init(){ //called from main.js
    addNavListeners();
  }

  return {
    init: init
  }

}());