let clicks = localStorage.getItem("clicks") || 0;

document.querySelector(".btn-principal").addEventListener("click", function(){
    clicks++;
    localStorage.setItem("clicks", clicks);
});

function panelAdmin(){
    let clave = prompt("Contraseña:");
    if(clave === "fabio"){
        document.getElementById("panel").style.display="block";
        document.getElementById("clicksAdmin").innerText = clicks;
    }
}

/* ASISTENTE */
function responder(){
    let input = document.getElementById("mensaje").value.trim();
    if(input === "") return;

    let mensaje = input.toLowerCase();
    let chat = document.getElementById("chatBody");

    chat.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;

    let respuesta = "";

    if(mensaje.includes("precio") || mensaje.includes("caro")){
        respuesta = "Tiene 50% de descuento. Antes $193.99 y ahora solo $97 USD.";
    }
    else if(mensaje.includes("pago")){
        respuesta = "Puedes pagar con tarjeta de crédito, débito o PayPal mediante Hotmart.";
    }
    else if(mensaje.includes("certificado")){
        respuesta = "Sí, incluye certificado digital avalado por Hotmart.";
    }
    else if(mensaje.includes("garantia")){
        respuesta = "Tienes 7 días de garantía. Si no te gusta, puedes pedir reembolso.";
    }
    else if(mensaje.includes("acceso")){
        respuesta = "El acceso es de por vida y puedes estudiar a tu ritmo.";
    }
    else{
        respuesta = "Puedo ayudarte con información sobre precio, contenido, métodos de pago o garantía 😊";
    }

    chat.innerHTML += `<p class="bot">${respuesta}</p>`;
    document.getElementById("mensaje").value="";
    chat.scrollTop = chat.scrollHeight;
}