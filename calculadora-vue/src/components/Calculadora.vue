<template>
  <div class="calculadora">
    <h1>Calculadora Aritmética</h1>
    <div>
      <label>
        Número 1:
        <input
          type="number"
          v-model.number="numero1"
          @input="calcular"
        />
      </label>
    </div>
    <div>
      <label>
        Número 2:
        <input
          type="number"
          v-model.number="numero2"
          @input="calcular"
        />
      </label>
    </div>
    <div>
      <label>
        Operação:
        <select v-model="operacao" @change="calcular">
          <option value="soma">Soma</option>
          <option value="subtracao">Subtração</option>
          <option value="multiplicacao">Multiplicação</option>
          <option value="divisao">Divisão</option>
        </select>
      </label>
    </div>
    <div>
      <h2>Resultado: {{ resultado }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Calculadora',
  setup() {
    const numero1 = ref<number>(0);
    const numero2 = ref<number>(0);
    const operacao = ref<string>('soma');
    const resultado = ref<number | string>(0);

    const calcular = () => {
      const num1 = numero1.value;
      const num2 = numero2.value;

      switch (operacao.value) {
        case 'soma':
          resultado.value = num1 + num2;
          break;
        case 'subtracao':
          resultado.value = num1 - num2;
          break;
        case 'multiplicacao':
          resultado.value = num1 * num2;
          break;
        case 'divisao':
          resultado.value = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
          break;
        default:
          resultado.value = 0;
      }
    };

    return {
      numero1,
      numero2,
      operacao,
      resultado,
      calcular,
    };
  },
});
</script>

<style scoped>
.calculadora {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 1rem;
}

input,
select {
  width: 100%;
  padding: .5rem;
  margin-top: .5rem;
  border: 1px solid #ccc;
  border-radius: .25rem;
}

h2 {
  text-align: center;
  margin-top: 1.5rem;
}
</style>