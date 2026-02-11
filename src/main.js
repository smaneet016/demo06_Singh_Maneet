// Bootstrap (npm)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ✅ Correct path to your CSS folder
import '/styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Bootstrap + Custom CSS loaded ✅');

  const reviewForm = document.querySelector('#reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Review submitted (demo)');
    });
  }
});
