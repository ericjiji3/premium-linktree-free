
function toggle(){
    document.querySelector('.darkMode').onclick = function(){
        document.querySelector('.temp4Container').classList.toggle('active');
    }
}
window.onload = function(){ 
    toggle();
};
