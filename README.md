# 15 - SASS

### styles.scss
```
// Variáveis
$cor-fundo: #f5f6fa;
$cor-primaria: #182C61;
$cor-botao: #44bd32;
$cor-botao-hover: #4cd137;
$espaco-menu: 24px;
$espaco-secao: 56px;
$espaco-produto: 40px;

// Mixins
@mixin grid($colunas, $coluna-gap, $linha-gap) {
  display: grid;
  grid-template-columns: repeat($colunas, 32.66%);
  column-gap: $coluna-gap;
  row-gap: $linha-gap;
}

// Funções
@function largura-maxima($largura) {
  @return $largura * 0.8; // 80% da largura fornecida
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: $cor-fundo;
}

li {
  list-style: none;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

header {
  background-color: $cor-primaria;
  position: sticky;
  top: 0;
  left: 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.menu {
  display: flex;
}

.menu li {
  font-weight: bold;
  margin-left: $espaco-menu;
}

.menu li a {
  color: #fff;
  text-decoration: none;
}

section {
  padding: $espaco-secao 0;
}

.products {
  margin-top: $espaco-produto;
  @include grid(3, 1%, 4%);
  width: 100%;
}

.product-item img {
  width: 100%;
  border-radius: 16px;
}

.product-button {
  display: block;
  background-color: $cor-botao;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  border-radius: 8px;
  margin-top: 8px;
  text-decoration: none;
}

.product-button:hover {
  background-color: $cor-botao-hover;
}

@media screen and (max-width: 1023px) {
  .container {
    max-width: largura-maxima(1024px);
  }

  .products {
    @include grid(2, 3%, 0);
  }
}

@media screen and (max-width: 767px) {
  .products {
    display: block;
  }

  .product-item {
    margin-bottom: 32px;
  }
}
```