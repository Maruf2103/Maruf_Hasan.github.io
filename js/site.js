// site.js — ML idea generator and small helpers
(function(){
  // Small helpers: copy email to clipboard
  document.addEventListener('DOMContentLoaded', ()=>{
    const copyEmail = document.getElementById('copyEmail');
    if(copyEmail){
      copyEmail.addEventListener('click', ()=>{
        const email = document.getElementById('emailLink').textContent.trim();
        navigator.clipboard && navigator.clipboard.writeText(email).then(()=>{
          copyEmail.textContent = 'Copied';
          setTimeout(()=>copyEmail.textContent = 'Copy',1200);
        }).catch(()=>alert('Copy failed'));
      });
    }
  });
})();