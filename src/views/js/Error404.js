

const Error404 = {
     after_render: () => {
       document.getElementById("homeButton").addEventListener ("click",  () => {
            location.href="/";
       });
   }

}

export default Error404;