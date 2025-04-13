function generar() {
    const length = parseInt(document.getElementById('length').value);
    const usarMayus = document.getElementById('mayus').checked;
    const usarMinus = document.getElementById('minus').checked;
    const usarNum = document.getElementById('num').checked;
    const usarSimbolos = document.getElementById('simbolos').checked;
  
    let chars = "";
    if (usarMayus) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (usarMinus) chars += "abcdefghijklmnopqrstuvwxyz";
    if (usarNum) chars += "0123456789";
    if (usarSimbolos) chars += "!@#$%^&*()_+[]{}|;:,.<>?";
  
    if (chars.length === 0) {
      document.getElementById('resultado').innerText = "Seleccioná al menos una opción.";
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * chars.length);
      password += chars[random];
    }
  
    document.getElementById('resultado').innerText = password;
  }
  
  function copiar() {
    const resultado = document.getElementById('resultado').innerText;
    if (!resultado || resultado === "Tu contraseña aparecerá aquí") return;
  
    navigator.clipboard.writeText(resultado).then(() => {
      alert("¡Contraseña copiada al portapapeles!");
    });
  }
  