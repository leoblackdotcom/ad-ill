ps.whatsNewModule = (function() {
  let experience, category;
  
  // Updates the currently displayed articles based on the experience and category select menus
  function changeArticles() {
    // Get experience and category values
    experience = document.getElementById('experience-filter').value;
    category = document.getElementById('category-filter').value;
    
    // Get all articles and the target articles
    let articles = document.querySelectorAll(`.adobe-article[category=${category}][experience=${experience}]`);
    let allArticles = document.querySelectorAll(`.adobe-article-grid__grid-cell`);
    
    // Hide all articles
    allArticles.forEach(function(article) {
      article.style.display = 'none';
    });
    
    // Show current articles
    articles.forEach(function(article) {
      let parentCell = article.parentNode;
      parentCell.style.display = 'block';
    });
  }
  
  // Updates the currently displayed categories based on the experience select menu
  function updateCategories() {
    // Get the current experience
    experience = document.getElementById('experience-filter').value;
    
    // Get all categories and target categories
    let allCategories = document.querySelectorAll(`#category-filter option`);
    let currentCategories = document.querySelectorAll(`#category-filter option.filter--${experience}`);
    
    // Hide all categories
    allCategories.forEach(function(category) {
      category.style.display = 'none';
    });
    
    // Show current categories
    currentCategories.forEach(function(category) {
      category.style.display = 'block';
    });
    
    // Set the selected category to the first option in the dropdown
    document.getElementById('category-filter').value = currentCategories[0].value;
  }
  
  function cardWatcher(e) {
    // Get all cards which are currently transformed and the current window height
    let cards = document.querySelectorAll('.wn-cards__card--hide');
    let windowHeight = window.innerHeight;
    
    // If there are no more hidden cards, remove the scroll listener
    if(cards.length === 0) {
      document.removeEventListener('scroll', cardWatcher);
    }
    
    cards.forEach(function(card) {
      let offset = card.getBoundingClientRect().top;
      let height = card.offsetHeight;
      
      // Cards are transformed 25% down by default, so if the top offset minus the window height is
      //  less than 25% of the height, we should show the card.
      let toShow = (offset - windowHeight - (height * .25) < 0);
      
      if(toShow) {
        card.classList.remove('wn-cards__card--hide');
      }
    });
  }

  function init(){ //called from main.js
    // Update article on init
    changeArticles();
    
    // Watch input change for select menus
    document.addEventListener('input', function(e) {
    	// Only run on experience and category select inputs
    	if(e.target.id === 'experience-filter') {
        // If the experience changes, we have to update the categories first
        updateCategories();
        changeArticles();
      } else if(e.target.id === 'category-filter') {
        changeArticles();
      }
    }, false);
    
    // Watch scroll for when to transition cards in the What's New section
    document.addEventListener('scroll', cardWatcher);
  }

  return {
    init: init
  }

}());