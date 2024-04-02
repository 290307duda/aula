
/*import React from "react";
import {View, Text} from "react-native";

function App () {

return {
  <View>
      <Text> Olá mundo! </Text>
  </View>

  };

}

export default App;//função padrão que irá ser chamada no inicio 

// pode usar tambem: export defalut function App () {
}*/

//react-native é uma extenção do react

//Exemplo 2
//usa classes obrigatorio ter um render( redenrizar na tela) é pode criar várias
import React, {Component}  from "react"; // importa
import { View, Text, Image} from "react-native"; //react-native= smartphone. View (div do html)= tela 

class App extends Component { //pega herança da classe component
  render(){ // redenriza a tela, monstada tela tudo oq esta abaixo dele, é função

    let curso ="INFO";

    return (// retorna para a tela, tem que estar dentro do render

// desenho da tela, tem compomentes flex
      <View> 
          <Text> Olá mundo! </Text>
          <Text> Exemplo! </Text>
          <Text style= {{color: 'blue', fontSize: 30, margin: 15}}> Meu exemplo </Text>  
          {/* style formata */}
          {/* tela adaptval = % 
          fixo na tela- pixel*/}

          <Image source= {{uri: 'color a url aqui'}} style= {{width: 300, height: 300}}/> 
        {/* Image é obrigado a informar a largura e altura */} 
        {/* imagem/ uir-> url da web em https com o link */}

        <Text> {curso } </Text>
        {/* entre {} é variavel */}

        {/* para cjamar o componente */}
        {/* <MinhaImagem> */}
        {/* Passando propriedades a Largura e a Altura */}
        {/* <MinhaImagem largura={400} altura={400}  nome="Imagem 1" */}
      <MinhaImagem largura = {400} altura={400} nome= "Imagem 1" />
      {/* Não precisa de pixel no número 
      Tag de função*/}
      </View>


    );
  }
}
// para a imagem tem que ter o https
export default App;

//componente: é uma função, é reutilizável, algo que mostra na tela, caixa que chama na tela qnts vezes eu quiser 

//caso queira criar um componente para a img
//Não precisa colocar a viem pq é um único componente
class MinhaImagem extends Component{ // imagem aqui é componente, toda classe precisa de render, return e View
  render (){

    let img = 'url da imagem'; // variável
    return {
      <View> 
      {/* <Image source= {{uri: img}} styles ={{width: 300, height: 300}}/> */}

      <Image source={{uri: img}} style={{width: this.props.largura, //this-> pega propriedade/valor da classe
      height:this.props.altura}}/> //props-> cria propriedade
        <Text> {this.props.nome}</Text>
    </View>
  }
 }
}
