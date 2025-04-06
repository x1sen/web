document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('contentTable');
    const output = document.getElementById('output');
    const bgColorSelect = document.getElementById('bgColor');
    const textColorSelect = document.getElementById('textColor');
    const fontSizeSelect = document.getElementById('fontSize');
    const applyBtn = document.getElementById('applyBtn');
    
    let selectedBgColor = '#faf1e6';
    let selectedTextColor = '#5e5343';
    let selectedFontSize = '16px';
    
  
    bgColorSelect.addEventListener('change', function() {
        selectedBgColor = this.value;
    });
    
    textColorSelect.addEventListener('change', function() {
        selectedTextColor = this.value;
    });
    
    fontSizeSelect.addEventListener('change', function() {
        selectedFontSize = this.value;
    });
    
   
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = selectedBgColor;
            this.style.color = selectedTextColor;
            output.textContent = this.cells[0].textContent;
            output.style.color = selectedTextColor;
            output.style.fontSize = selectedFontSize;
            output.style.backgroundColor = selectedBgColor;
        });
        
        rows[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
            output.textContent = '';
            output.style.backgroundColor = '';
        });
    }
    
 
    applyBtn.addEventListener('click', function() {
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.color = selectedTextColor;
            rows[i].style.fontSize = selectedFontSize;
        }
        
  
        const flowerItems = document.querySelectorAll('.flower-item');
        flowerItems.forEach(item => {
            item.style.color = selectedTextColor;
            item.style.fontSize = selectedFontSize;
        });
    });
    
    
    const flowerItems = document.querySelectorAll('.flower-item');
    flowerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
        });
    });
});