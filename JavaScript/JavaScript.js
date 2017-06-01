function searchFunction() {
    document.getElementById('search-1').style.cssText = 'display:none';
    document.getElementById('search-2').style.cssText = 'display:inline-block';
}

function ratingStars(x) {
    if (x === 1) {
        document.getElementById('star-1').style.cssText = 'display:none';
        document.getElementById('star-2').style.cssText = 'display:inline-block';
    }

    if (x === 2) {
        document.getElementById('star-1').style.cssText = 'display:none';
        document.getElementById('star-2').style.cssText = 'display:inline-block';
        document.getElementById('star-3').style.cssText = 'display:none';
        document.getElementById('star-4').style.cssText = 'display:inline-block';

    }

    if (x === 3) {
        document.getElementById('star-1').style.cssText = 'display:none';
        document.getElementById('star-2').style.cssText = 'display:inline-block';
        document.getElementById('star-3').style.cssText = 'display:none';
        document.getElementById('star-4').style.cssText = 'display:inline-block';
        document.getElementById('star-5').style.cssText = 'display:none';
        document.getElementById('star-6').style.cssText = 'display:inline-block';

    }

    if (x === 4) {
        document.getElementById('star-1').style.cssText = 'display:none';
        document.getElementById('star-2').style.cssText = 'display:inline-block';
        document.getElementById('star-3').style.cssText = 'display:none';
        document.getElementById('star-4').style.cssText = 'display:inline-block';
        document.getElementById('star-5').style.cssText = 'display:none';
        document.getElementById('star-6').style.cssText = 'display:inline-block';
        document.getElementById('star-7').style.cssText = 'display:none';
        document.getElementById('star-8').style.cssText = 'display:inline-block';

    }

    if (x === 5) {
        document.getElementById('star-1').style.cssText = 'display:none';
        document.getElementById('star-2').style.cssText = 'display:inline-block';
        document.getElementById('star-3').style.cssText = 'display:none';
        document.getElementById('star-4').style.cssText = 'display:inline-block';
        document.getElementById('star-5').style.cssText = 'display:none';
        document.getElementById('star-6').style.cssText = 'display:inline-block';
        document.getElementById('star-7').style.cssText = 'display:none';
        document.getElementById('star-8').style.cssText = 'display:inline-block';
        document.getElementById('star-9').style.cssText = 'display:none';
        document.getElementById('star-10').style.cssText = 'display:inline-block';

    }
}

var main_page = false;

function colorChange (y, main_page) {
    if (y === 1) {
        document.getElementById('theme').href = '../css/theme-1.css';
        if (main_page === true) {
            document.getElementById('theme').href = 'css/theme-1.css';
        }
    }
    
    if (y === 2) {
        document.getElementById('theme').href = '../css/theme-2.css';
        if (main_page === true) {
            document.getElementById('theme').href = 'css/theme-2.css';
        }
    }
    
    if (y === 3) {
        document.getElementById('theme').href = '../css/theme-3.css';
        if (main_page === true) {
            document.getElementById('theme').href = 'css/theme-3.css';
        }
    }
    
     if (y === 4) {
        document.getElementById('theme').href = '../css/theme-4.css';
    }
    
     if (y === 5) {
        document.getElementById('theme').href = '../css/theme-5.css';
    }
    
     if (y === 6) {
        document.getElementById('theme').href = '../css/theme-6.css';
    }
    
     if (y === 7) {
        document.getElementById('theme').href = '../css/theme-7.css';
    }
    
     if (y === 8) {
        document.getElementById('theme').href = '../css/theme-8.css';
    }
    
     if (y === 9) {
        document.getElementById('theme').href = '../css/theme-9.css';
    }
    
     if (y === 10) {
        document.getElementById('theme').href = '../css/theme-10.css';
    }
    
     if (y === 11) {
        document.getElementById('theme').href = '../css/theme-11.css';
    }
    
     if (y === 12) {
        document.getElementById('theme').href = '../css/theme-12.css';
    }
}
