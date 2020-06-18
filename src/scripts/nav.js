ps.navModule = (function() {

  let dropdownLinks, otherLinks;
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

  function onotherLinkClick(e){
    e.preventDefault();
  }

  function addNavListeners() {

    dropdownLinks = document.querySelectorAll('.feds-popup-trigger .feds-navLink');
    dropdownLinks.forEach((dropdownLink,index)=>{
      dropdownLink.addEventListener('click',onDropdownLinkClick);
    })
    otherLinks = document.querySelectorAll('a:not(.feds-navLink)');
    otherLinks.forEach((otherLink,index)=>{
      otherLink.addEventListener('click',onotherLinkClick);
    })
  }

  function init(){ //called from main.js
    addNavListeners();
  }

  return {
    init: init
  }

}());