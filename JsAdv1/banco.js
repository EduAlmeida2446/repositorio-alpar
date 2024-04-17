class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}
const conta = new ContaBancaria();

const valorInput = document.getElementById('valor');
const depositoBtn = document.getElementById('deposito');
const saqueBtn = document.getElementById('saque');
const balanceSpan = document.getElementById('moneyViewer');

const updateBalance = () => {
    balanceSpan.textContent = `R$ ${conta.saldo.toFixed(2)}`;
}

const verificarValue = (value) => {
    if (!value) {
        console.warn("Campo valor não pode ser nulo!");
        alert("Campo valor não pode ser nulo!")
        return;
    }
}

depositoBtn.addEventListener('click', () => {
    verificarValue(valorInput.value)

    const valor = parseFloat(valorInput.value);
    if (!isNaN(valor) && valor > 0) {
        conta.depositar(valor);
        updateBalance();
    }
    valorInput.value = '';
});

saqueBtn.addEventListener('click', () => {
    verificarValue(valorInput.value)

    const valor = parseFloat(valorInput.value);
    if (!isNaN(valor) && valor > 0) {
        const success = conta.sacar(valor);
        if (success) {
            updateBalance();
        } else {
            alert('Saldo insuficiente!');
        }
    }
    valorInput.value = '';
});

updateBalance();