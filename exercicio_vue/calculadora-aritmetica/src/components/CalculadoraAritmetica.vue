<template>
  <div class="calculator">
    <h1>Calculadora Aritmética</h1>
    <input type="number" v-model.number="num1" placeholder="Número 1" />
    <input type="number" v-model.number="num2" placeholder="Número 2" />

    <select v-model="operation">
      <option value="+">Adição</option>
      <option value="-">Subtração</option>
      <option value="*">Multiplicação</option>
      <option value="/">Divisão</option>
    </select>

    <h2>Resultado: {{ calculateResult }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operation: '+',
    };
  },
  computed: {
    calculateResult() {
      switch (this.operation) {
        case '+':
          return this.num1 + this.num2;
        case '-':
          return this.num1 - this.num2;
        case '*':
          return this.num1 * this.num2;
        case '/':
          return this.num2 !== 0 ? this.num1 / this.num2 : 'Indefinido';
        default:
          return 0;
      }
    },
  },
};
</script>

<style>
.calculator {
  max-width: 300px;
  margin: auto;
  text-align: center;
}

input, select {
  margin: 10px 0;
  padding: 8px;
  width: 100%;
}
</style>
