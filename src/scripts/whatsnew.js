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
    
    document.addEventListener('scroll', function(e) {
      let cards = document.querySelectorAll('.wn-cards__card--hide');
      let windowHeight = window.innerHeight;
      
      cards.forEach(function(card) {
        let offset = card.getBoundingClientRect().top;
        let height = card.offsetHeight;
        let toShow = (offset - windowHeight - (height * .25) < 0);
        
        if(toShow) {
          card.classList.remove('wn-cards__card--hide');
        }
      });
    });
  }

  return {
    init: init
  }

}());